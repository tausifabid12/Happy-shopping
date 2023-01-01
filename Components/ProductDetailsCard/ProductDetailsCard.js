import React, { useContext } from 'react';
import { ProductContext } from '../../utilities/contexts/ProductInfoProvider';

const ProductDetailsCard = ({ info }) => {
  const { img, name, price, category } = info;
  const { state, dispatch } = useContext(ProductContext);
  const handleAddToCart = () => {};
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="h-[400px]" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
        </div>

        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
