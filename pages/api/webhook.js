import { buffer } from 'micro';
import * as admin from 'firebase-admin';
const { MongoClient, ServerApiVersion } = require('mongodb');

// // * firebase connection
// const serviceAccount = require('../../fbPermission.json');
// const app = !admin.apps.length
//   ? admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//     })
//   : admin.app();

// mongo db connection
const uri = `mongodb+srv://${process.env.MDB_USER_NAME}:${process.env.MDB_PASSWORD}@cluster0.brxmqep.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

try {
  client.connect();
  console.log('connecting successfully');
} catch (error) {
  console.log(error);
}
//* stripe connection
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

// const fullFillOrder = async (session) => {
//   console.log('full Filling order', session);

//   return app
//     .firestore()
//     .collection('users')
//     .doc(session.metadata.email)
//     .collection('orders')
//     .doc(session.id)
//     .set({
//       amount: session.amount_total / 100,
//       amount_shipping: session.total_details.amount_shipping / 100,
//       images: JSON.parse(session.metadata.images),
//       timestamp: admin.firestore.FieldValue.serverTimestamp(),
//     })
//     .then(() => {
//       console.log(
//         `order success: order ${session.id} has been added to the db`
//       );
//     });
// };

const fullFillOrder = async (session) => {
  const orders = client.db('happy-shopping').collection('users');

  try {
    const doc = {
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      date: new Date().toLocaleDateString(),
    };
    const result = await orders.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    //* verifying the event
    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log('ERROR: ', err.message);
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      return fullFillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`web hook error : ${err}`));
    }
    // if(event.type === payment_intent.succeeded){}
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
