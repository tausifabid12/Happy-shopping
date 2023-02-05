import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import CartProductCard from '../Components/CartProductCard/CartProductCard';
import Layout from '../Components/Layout/Layout';
import { AuthContext } from '../utilities/contexts/AuthProvider';
import { ProductContext } from '../utilities/contexts/ProductInfoProvider';
import actionTypes from '../utilities/state/Actiontypes';

const stripePromise = loadStripe(process.env.stripe_public_key);

const Cart = () => {
  // const [quantityCount, setQuantityCount] = useState(quantity);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(ProductContext);

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id },
    });
  };

  const createCheckoutSession = async () => {
    setLoading(true);
    if (!user?.uid) {
      toast.error('please login first to checkout');
      router.push('/login');

      return;
    }
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/create-checkout-session', {
      products: cartItems,
      userId: user?.uid,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      toast(result.error.message);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <Layout title="Shopping Cart">
      <section className="lg:mx-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 pt-5 ">
          Your Cart
        </h1>
        {cartItems && cartItems.length === 0 ? (
          <div className="grid place-content-center w-full h-screen">
            <h1 className="text-3xl lg:text-7xl font-bold text-gray-500">
              No Items Found
            </h1>
          </div>
        ) : (
          <div className="flex flex-col p-6 space-y-4 sm:p-10 ">
            <ul className="flex flex-col divide-y divide-gray-700">
              {cartItems.map((item) => (
                <CartProductCard
                  key={item._id}
                  info={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total Items:
                <span className="font-semibold">
                  {cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              </p>
              <p>
                Total amount:
                <span className="font-semibold">
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <Link href="/" className="btn btn-primary ">
                Back
                <span className="sr-only sm:not-sr-only">to shop</span>
              </Link>
              <button
                onClick={createCheckoutSession}
                role="link"
                type="button"
                className={`btn ${loading ? 'loading' : 'btn-primary'}   `}
              >
                <span className="sr-only sm:not-sr-only">Continue to</span>
                Checkout
              </button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

// export default Cart;
// export default dynamic(() => {
//   Promise.resolve(Cart), { ssr: false };
// });

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
