import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import { ProductContext } from '../../utilities/contexts/ProductInfoProvider';
import actionTypes from '../../utilities/state/Actiontypes';

const ProductCard = ({ product }) => {
  const { title, price, image, description, id } = product;
  const [ratingS] = useState(Math.floor(Math.random() * 5) + 1);
  const { state, dispatch } = useContext(ProductContext);

  const handleAddToCart = (productId) => {
    const existsItem = state.cart.cartItems.find((i) => i.id === productId);
    const quantity = existsItem ? existsItem.quantity + 1 : 1;

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: { ...product, quantity: quantity },
    });
  };

  return (
    <div className="card card-compact w-full h-[490px] bg-white shadow-xl">
      {/* <img src={image} className="w-full rounded-md" alt="" /> */}
      <div className="w-full h-[200px] pt-2 ">
        <img src={image} className="w-full h-full object-contain" alt="Shoes" />
      </div>
      {/* <Image
        src={image}
        height={200}
        width={250}
        objectFit="contain"
        objectPosition={'center'}
      /> */}
      <div className="card-body">
        <h2 className="text-sm font-semibold line-clamp-2 p-0  text-gray-800 dark:text-white">
          {title}
        </h2>
        <div className="flex text-primary">
          {Array(ratingS)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="h-5" />
            ))}
        </div>
        <p className="py-2 text-sm text-gray-700 line-clamp-2 dark:text-gray-400">
          {description.length > 60
            ? description.slice(0, 80) + '...'
            : description}
        </p>
        <p className="p-0 text-gray-900 font-bold dark:text-gray-400">
          {price} $
        </p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(id)}
            className="btn btn-primary w-full"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* <div className="w-full h-[450px] relative overflow-hidden bg-white rounded-lg shadow-md border dark:bg-gray-800">
      <div className="flex justify-center h-1/2">
        <Image
          src={image}
          height={200}
          width={200}
          objectFit="contain"
          alt=""
        />
      </div>
      <div className="px-6 pt-6 pb-14 capitalize">
        <h1 className="text-sm font-semibold line-clamp-2  text-gray-800 dark:text-white">
          {title}
        </h1>
        <div className="flex text-primary">
          {Array(ratingS)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="h-5" />
            ))}
        </div>

        <p className="py-2 text-sm text-gray-700 line-clamp-2 dark:text-gray-400">
          {description.length > 60
            ? description.slice(0, 60) + '...'
            : description}
        </p>
        <p className="py-2 text-gray-900 font-bold dark:text-gray-400">
          {price}
        </p>
      </div>
      <div className="px-4 absolute bottom-3 w-full ">
        <button
          onClick={() => handleAddToCart(id)}
          className="block font-semibold w-full btn py-3 bg-primary rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div> */
}
