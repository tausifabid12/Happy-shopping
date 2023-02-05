import React, { useContext } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import dynamic from 'next/dynamic';
import ProductCard from '../ProductCard/ProductCard';
import { ProductContext } from '../../utilities/contexts/ProductInfoProvider';
import actionTypes from '../../utilities/state/Actiontypes';
import { toast } from 'react-hot-toast';

const ProductsTab = ({ products }) => {
  const { state, dispatch } = useContext(ProductContext);
  const category = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  const handleAddToCart = (productId, Product) => {
    const existsItem = state.cart.cartItems.find((i) => i.id === productId);
    const quantity = existsItem ? existsItem.quantity + 1 : 1;

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: { ...Product, quantity: quantity },
    });

    toast.success('Added to Cart');
  };

  return (
    <div className="h-auto  my-16 lg:mx-10">
      <Tabs id="custom-animation" value="electronics">
        <div className=" grid grid-cols-1 items-center lg:grid-cols-2 w-full bg-white">
          <p className="text-2xl text-center lg:text-left lg:text-4xl font-bold">
            Featured Product
          </p>
          <div>
            <TabsHeader className="my-5 shadow-lg h-16 border ">
              {[
                'electronics',
                'jewelery',
                "men's clothing",
                "women's clothing",
              ].map((cat, i) => (
                <Tab
                  key={i + 1}
                  value={cat}
                  className=" font-semibold capitalize"
                >
                  <h1 className="text-xs"> {cat}</h1>
                </Tab>
              ))}
            </TabsHeader>
          </div>
        </div>

        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 ">
            {products.map((Product) => (
              <TabPanel key={Product?.id} value={Product?.category}>
                <div className="card lg:h-[280px] flex lg:flex-col lg:card-side bg-white shadow-xl">
                  <div className="w-full p-3">
                    <img
                      src={Product.image}
                      alt={Product.title}
                      className="h-[200px] lg:h-full w-full"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="text-sm font-semibold line-clamp-2 p-0  text-gray-800 dark:text-white">
                      {Product.title}
                    </h2>
                    <p className="py-2 text-sm text-gray-700 line-clamp-2 dark:text-gray-400">
                      {Product.description.length > 60
                        ? Product.description.slice(0, 80) + '...'
                        : Product.description}
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleAddToCart(Product?.id, Product)}
                        className="btn btn-primary w-full"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </div>
        </TabsBody>
      </Tabs>
    </div>
  );
};

// export default ProductsTab;
export default dynamic(() => Promise.resolve(ProductsTab), { ssr: false });
