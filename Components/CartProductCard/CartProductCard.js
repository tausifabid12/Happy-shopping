import React, { useContext, useState } from 'react';
import { ProductContext } from '../../utilities/contexts/ProductInfoProvider';
import actionTypes from '../../utilities/state/Actiontypes';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartProductCard = ({ info, handleRemoveFromCart }) => {
  const { image, title, price, category, description, quantity, id } = info;
  const [quantityCount, setQuantityCount] = useState(quantity);
  // { title, price, image, description }
  const { dispatch } = useContext(ProductContext);

  const handleQuantityUpdate = (type) => {
    if (type === 'increase') {
      setQuantityCount(quantityCount + 1);
    }
    if (type === 'decrease' && quantityCount > 0) {
      setQuantityCount(quantityCount - 1);
    }
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: { ...info, quantity: quantityCount },
    });
  };

  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
          src={image}
          alt="Set of travel chargers"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {title}
              </h3>
              <p className="text-sm text-gray-700">{description}</p>
              <div className="text-sm text-gray-900 flex ">
                <button
                  onClick={() => handleQuantityUpdate('decrease')}
                  className="text-md hover:bg-gray-300 py-[2px] px-2 rounded-full"
                >
                  <FaMinus />
                </button>
                <p className="font-semibold w-8 text-center mx-1 px-3 py-1 rounded-md border border-gray-400">
                  {quantityCount}
                </p>
                <button
                  onClick={() => handleQuantityUpdate('increase')}
                  className="text-md  hover:bg-gray-300 py-[2px] px-2 rounded-full"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">{price} $</p>
              <p className="text-sm line-through text-gray-600">
                {price + 100} $
              </p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              onClick={() => handleRemoveFromCart(id)}
              type="button"
              className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-500 font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
            {/* <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
              </svg>
              <span>Add to favorites</span>
            </button> */}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProductCard;
// export default dynamic(() => {
//   Promise.resolve(CartProductCard), { ssr: false };
// });
// export default dynamic(() => Promise.resolve(CartProductCard), { ssr: false });
