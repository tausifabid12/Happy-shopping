import React from 'react';
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

const ProductsTab = ({ products }) => {
  const category = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="h-auto bg-white my-16 mx-10">
      <Tabs id="custom-animation" value="electronics">
        <div className=" grid grid-cols-1 lg:grid-cols-2 w-full">
          <p className="text-4xl font-bold">Featured Product</p>
          <div>
            <TabsHeader>
              {[
                'electronics',
                'jewelery',
                "men's clothing",
                "women's clothing",
              ].map((cat, i) => (
                <Tab key={i + 1} value={cat}>
                  {cat}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 py-10 bg-white">
            {products.map((Product) => (
              <TabPanel key={Product?.id} value={Product?.category}>
                <div className="card h-[280px] lg:card-side bg-white shadow-xl">
                  <div className="w-full p-3">
                    <img
                      src={Product.image}
                      alt={Product.title}
                      className="h-full w-full"
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
                      <button className="btn btn-primary w-full">
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
