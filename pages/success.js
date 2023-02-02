import React, { useContext } from 'react';
import Layout from '../Components/Layout/Layout';
import { FaRegCalendarCheck } from 'react-icons/fa';
import Link from 'next/link';
import { AuthContext } from '../utilities/contexts/AuthProvider';

const success = () => {
  const { user } = useContext(AuthContext);
  return (
    <Layout title="Order Success">
      <section className="w-full h-screen  flex justify-center mt-0  lg:mt-9">
        <div className="w-full md:w-[800px] h-full  md:h-72 py-16 rounded-lg px-10 bg-base-100 space-y-6 shadow-md ">
          <div className="flex items-center justify-center">
            <FaRegCalendarCheck className="text-4xl mr-4 text-green-700" />
            <h2 className=" text-xl lg:text-4xl font-semibold">
              Thank Your Order has been confirmed
            </h2>
          </div>
          <p className="text-center ">
            Thank you for choosing us. we will send a conformation once the
            package is ready to delivery. If you want to check the status of the
            order please click the link below
          </p>
          <Link href={`/orders/${user?.uid}`} className="">
            <button className="btn btn-primary block mx-auto mt-7">
              Go to my orders
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default success;
