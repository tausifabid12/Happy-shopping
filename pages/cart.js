import { useContext } from 'react';
import CartProductCard from '../Components/CartProductCard/CartProductCard';
import Layout from '../Components/Layout/Layout';
import { ProductContext } from '../utilities/contexts/ProductInfoProvider';

const Cart = () => {
  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(ProductContext);

  console.log(cartItems);
  return (
    <Layout title="Shopping Cart">
      <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
      {cartItems && cartItems.length === 0 ? (
        <div className="grid place-content-center w-full h-screen">
          <h1 className="text-3xl lg:text-7xl font-bold text-gray-500">
            No Items Found
          </h1>
        </div>
      ) : (
        cartItems.map((item) => <CartProductCard key={item._id} info={item} />)
      )}
    </Layout>
  );
};

export default Cart;
