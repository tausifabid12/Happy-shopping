import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../Components/Layout/Layout';
import fakeData from '../../utilities/data';
import ProductDetailsCard from '../../Components/ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {
  const { query } = useRouter();
  const { productId } = query;
  const productDetail = fakeData.find((p) => p._id === productId);
  if (!productDetail) {
    return <div>No data found</div>;
  }

  return (
    <Layout title="Product Details">
      <ProductDetailsCard info={productDetail} />
    </Layout>
  );
};

export default ProductDetails;
