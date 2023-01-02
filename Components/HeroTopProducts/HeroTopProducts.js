import React from 'react';
import fakeData from '../../utilities/data';
import ProductCard from '../ProductsCard/ProductCard';

const HeroTopProducts = () => {
  const productInfo = fakeData?.products;
  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold text-gray-900">Top Products</h1>
      <div className="m-y-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productInfo.map((p) => (
          <ProductCard key={p?._id} info={p} />
        ))}
      </div>
    </div>
  );
};

export default HeroTopProducts;
