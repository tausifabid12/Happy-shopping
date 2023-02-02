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
} catch (error) {
  console.log(error.message, 'this is mongo connection error');
}
const orders = client.db('happy-shopping').collection('users');

//* end mongoDb connection

export default async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const allOrders = await orders.find(query).toArray();

    res.status(200).send(allOrders);
  } catch (error) {
    console.log(error);
    res.send({
      error: error.message,
    });
  }
};
