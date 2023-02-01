import React from 'react';
import { FaCodepen, FaBattleNet, FaCottonBureau } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="mx-10 py-16">
      <h2 className="text-4xl font-bold text-center">Our Services</h2>
      <div className="w-full py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="border border-t-2 text-gray-700 flex bg-white flex-col px-7 py-7 rounded-lg items-center space-y-3 shadow-lg">
          <FaCodepen className="text-6xl text-primary" />
          <h1 className="text-xl font-bold text-gray-900">Free delivery</h1>
          <p className="text-center">
            And free returns. See checkout for delivery dates.
          </p>
        </div>
        <div className="border border-t-2 text-gray-700 flex bg-white flex-col px-7 py-7 rounded-lg items-center space-y-3 shadow-lg">
          <FaBattleNet className="text-6xl text-primary" />
          <h1 className="text-xl font-bold text-gray-900">
            Pay monthly at 0% APR
          </h1>
          <p className="text-center">
            Choose to check out with Master Card Monthly Installments.
          </p>
        </div>
        <div className="border border-t-2 text-gray-700 flex bg-white flex-col px-7 py-7 rounded-lg items-center space-y-3 shadow-lg">
          <FaCottonBureau className="text-6xl text-primary" />
          <h1 className="text-xl font-bold text-gray-900">Personalize it</h1>
          <p className="text-center">
            Engrave your device with your name or a personal note
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
