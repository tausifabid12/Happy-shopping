import { createRef, Fragment, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import ReactToPdf from 'react-to-pdf';

const OrderDetailsModal = ({ open, handleOpen, orders, date }) => {
  const ref = createRef();
  const totalAmount = orders.reduce((a, c) => {
    return a + c?.amount;
  }, 0);
  const totalProducts = orders.reduce((a, c) => {
    return a + c?.productIds?.length;
  }, 0);
  const totalShipping = orders.reduce((a, c) => {
    return a + c?.amount_shipping;
  }, 0);

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen}>
        <div ref={ref}>
          <DialogHeader>Happy Shopping</DialogHeader>
          <DialogBody divider>
            <div className="flex flex-col w-full  p-6 space-y-4  sm:p-10 text-gray-900 font-semibold">
              <ul className="flex flex-col pt-4 space-y-2">
                <li className="flex items-start justify-between">
                  <h3>Date:</h3>
                  <div className="text-right">
                    <span className="block">{date}</span>
                  </div>
                </li>

                <li className="flex items-start justify-between">
                  <h3>Total Orders:</h3>
                  <div className="text-right">
                    <span className="block">{orders?.length}</span>
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <h3>Total Products:</h3>
                  <div className="text-right">
                    <span className="block">{totalProducts}</span>
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <h3>
                    Shipping Cost:
                    <span className="text-sm text-violet-400"></span>
                  </h3>
                  <div className="text-right">
                    <span className="block">{totalShipping} $</span>
                  </div>
                </li>
                <li className="flex items-start justify-between">
                  <h3>Total Amount:</h3>
                  <div className="text-right">
                    <span className="block">{totalAmount} $</span>
                  </div>
                </li>
              </ul>
            </div>
          </DialogBody>
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <ReactToPdf
            targetRef={ref}
            filename="Invoice.pdf"
            x={40}
            y={1}
            scale={1}
          >
            {({ toPdf }) => (
              <Button
                onClick={() => {
                  toPdf();
                  handleOpen();
                }}
                variant="gradient"
                color="green"
              >
                <span>Download Invoice</span>
              </Button>
            )}
          </ReactToPdf>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default OrderDetailsModal;
