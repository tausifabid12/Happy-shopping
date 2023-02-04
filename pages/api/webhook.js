import { buffer } from 'micro';

const { MongoClient, ServerApiVersion } = require('mongodb');

//* mongo db connection
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
  console.log(error.message, 'this is mongo connection error');
}

//* stripe connection
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fullFillOrder = async (session) => {
  const orders = client.db('happy-shopping').collection('users');

  try {
    const doc = {
      userId: session.metadata.userId,
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping,
      images: JSON.parse(session.metadata.images),
      productIds: JSON.parse(session.metadata.productIds),
      date: new Date().toLocaleDateString(),
    };
    const result = await orders.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.log(error);
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
