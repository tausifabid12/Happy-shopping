import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import fakeData from '../../utilities/data';
import ProductDetailsCard from '../../Components/ProductDetailsCard/ProductDetailsCard';
import { ProductContext } from '../../utilities/contexts/ProductInfoProvider';
import actionTypes from '../../utilities/state/Actiontypes';

const ProductDetails = () => {
  const { query } = useRouter();
  const { productId } = query;
  const { state, dispatch } = useContext(ProductContext);

  const product = fakeData.products.find((p) => p._id === productId);
  if (!product) {
    return <div>No data found</div>;
  }

  const handleAddToCart = () => {
    const existsItem = state.cart.cartItems.find((i) => i._id === product._id);

    const quantity = existsItem ? existsItem.quantity + 1 : 1;

    console.log(existsItem, quantity, 'this item existsItem id');
    // if (quantity > product?.stock) {
    //   toast.error('Out of Stock');
    //   return;
    // }
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: { ...product, quantity: quantity },
    });
  };

  return (
    <Layout title="Product Details">
      <ProductDetailsCard
        ProductInfo={product}
        handleAddToCart={handleAddToCart}
      />
    </Layout>
  );
};

export default ProductDetails;
