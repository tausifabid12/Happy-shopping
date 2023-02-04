import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import OrdersCard from '../../Components/OrdersCard/OrdersCard';
import clientPromise from '../../utilities/dbConnect';

const Orders = ({ orders }) => {
  console.log(orders, 'th isi soreder');

  const orderDates = orders.map((date) => date.date);
  const filteredDates = orderDates.filter(
    (item, index) => orderDates.indexOf(item) === index
  );
  console.log(orders);
  return (
    <Layout title="Order History">
      <section className="w-full min-h-screen">
        <div>
          <h2 className="text-3xl font-bold">Order History</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-8">
          <div className="col-span-6 space-y-4">
            {filteredDates &&
              filteredDates.map((date, i) => (
                <OrdersCard key={i} date={date} orders={orders} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db('happy-shopping');

    const userId = context.params.orders;

    const orders = await db
      .collection('users')
      .find({ userId: userId })
      .toArray();

    return {
      props: { orders: JSON.parse(JSON.stringify(orders)) },
    };
  } catch (e) {
    console.error(e);
  }
}
