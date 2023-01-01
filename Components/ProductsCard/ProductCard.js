import Link from 'next/link';
import React from 'react';

const ProductCard = ({ info }) => {
  const { img, name, price, id } = info;
  return (
    <>
      <div className="card card-compact w-full mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className=" text-lg font-semibold">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <Link href={`products/${id}`}>
              <button className="btn btn-accent">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
