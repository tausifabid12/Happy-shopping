import dynamic from 'next/dynamic';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ products }) => {
  console.log(products);
  return (
    <section className="w-full ">
      <h2 className="text-4xl font-bold mx-10">Popular Products</h2>

      <div className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10 mt-10">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <div className="w-full h-64 md:col-span-3 lg:col-span-4">
          <img
            src="assets/adbanner.jpg"
            className="w-full h-full rounded-md"
            alt="/"
          />
        </div>
        <div className="w-full h-full md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.slice(6, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

// export default Products;
export default dynamic(() => Promise.resolve(Products), { ssr: false });
