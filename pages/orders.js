import React, { useContext } from 'react';
import { db } from '../Firebase/firebase';
import { AuthContext } from '../utilities/contexts/AuthProvider';
import { collection, getDocs, doc } from 'firebase/firestore';

const Orders = () => {
  const { user } = useContext(AuthContext);

  const f = async () => {
    const docRef = doc(db, 'users', user?.email);
    const stripeOrders = await getDoc(docRef);

    return stripeOrders;
  };

  f();

  //   const email = user.email;
  return (
    <div>
      <h2>helloo this is ordres</h2>
    </div>
  );
};

export default Orders;

// export async function getServerSideProps(context) {
//   const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//   if (!user?.email) {
//     return {
//       props: {},
//     };
//   }

//   const docRef = doc(db, 'users', user?.email);
//   const stripeOrders = await getDoc(docRef);

//   console.log(stripeOrders);

//   return {
//     props: {},
//   };
// }

// const querySnapshot = await getDocs(collection(db, 'users'));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
