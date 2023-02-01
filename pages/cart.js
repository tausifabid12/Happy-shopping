import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
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
  console.log(user?.email);
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
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/create-checkout-session', {
      products: cartItems,
      email: user?.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      toast(result.error.message);
    }
  };

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
        <div className="flex flex-col p-6 space-y-4 sm:p-10 ">
          <h2 className="text-xl font-semibold">Your cart</h2>
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
            <button type="button" className="btn btn-primary ">
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
            <button
              onClick={createCheckoutSession}
              role="link"
              type="button"
              className="btn btn-primary  "
            >
              <span className="sr-only sm:not-sr-only">Continue to</span>
              Checkout
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

// export default Cart;
// export default dynamic(() => {
//   Promise.resolve(Cart), { ssr: false };
// });

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
