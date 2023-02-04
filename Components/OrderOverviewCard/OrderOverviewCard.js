import React from 'react';

const OrderOverviewCard = ({ order }) => {
  const { _id, amount, images } = order;
  return (
    <div className="flex space-x-3 ">
      <div className="hidden lg:flex h-24">
        <div>
          <img className="w-28 h-full rounded-xl" src={images[0]} alt="" />
        </div>
        <div className="relative ml-4">
          <img className="w-28 h-full rounded-xl" src={images[1]} alt="" />
          <div className="w-full h-full rounded-xl bg-black absolute flex items-center justify-center opacity-60 top-0">
            <p className="text-white text-sm font-bold">+2</p>
          </div>
        </div>
      </div>
      <div className=" py-3 space-y-3">
        <h6 className="font-bold text-sm">Order: {_id}</h6>
        <p className="text-gray-600 text-sm">Total Price: {amount} $</p>
      </div>
    </div>
  );
};

export default OrderOverviewCard;
