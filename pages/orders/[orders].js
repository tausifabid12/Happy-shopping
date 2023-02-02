import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import clientPromise from '../../utilities/dbConnect';

const Orders = ({ orders }) => {
  const [ordersId, setOrdersId] = useState();

  console.log(orders, 'th isi soreder');

  return (
    <div>
      <h2>helloo this is ordres</h2>
    </div>
  );
};

export default Orders;

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('happy-shopping');

    const orders = await db.collection('users').find({}).toArray();

    return {
      props: { orders: JSON.parse(JSON.stringify(orders)) },
    };
  } catch (e) {
    console.error(e);
  }
}
