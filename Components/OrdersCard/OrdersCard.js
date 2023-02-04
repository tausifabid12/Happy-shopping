import React, { useState } from 'react';
import OrderOverviewCard from '../OrderOverviewCard/OrderOverviewCard';
import { FaCalendarAlt } from 'react-icons/fa';
import OrderDetailsModal from '../OrderDetailsModal/OrderDetailsModal';
import { Button } from '@material-tailwind/react';
import { toast } from 'react-hot-toast';

const OrdersCard = ({ orders, date }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <section className="bg-[#f5f6f8] w-full p-9 rounded-xl mx-7">
      <h5 className="font-semibold pb-6 flex items-center">
        <span className="text-accent mr-2 text-lg">
          <FaCalendarAlt />
        </span>
        {date}
      </h5>
      <div className="flex w-full ">
        <div className="w-[60%] space-y-4 bg-white px-3 py-10  rounded-xl shadow-lg mx-4">
          {orders
            .filter((odr) => odr?.date === date)
            .map((order) => (
              <>
                <OrderOverviewCard key={order?._id} order={order} />
                <hr className="text-gray-400" />
              </>
            ))}
        </div>

        <div className="w-[40%] space-y-3 grid place-content-center">
          <button
            onClick={() => toast.error('Coming Soon')}
            className="btn btn-primary btn-wide"
          >
            Track Orders
          </button>
          <button
            onClick={handleOpen}
            className="btn btn-accent btn-outline block btn-wide"
          >
            View details
          </button>

          {/* <p className="text-center text-accent font-bold">Get Invoice</p> */}
        </div>
      </div>
      <OrderDetailsModal
        handleOpen={handleOpen}
        open={open}
        orders={orders}
        date={date}
      />
    </section>
  );
};

export default OrdersCard;

{
}
