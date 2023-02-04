import React from 'react';

const Subscribe = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mx-10 hidden lg:block">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                Subscribe To The{' '}
                <span className="text-primary">Happy Shopping</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                be the first to knows when our
                <span className="font-medium text-primary"> Big Sell</span> is
                live
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="btn btn-primary ml-2">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src="/assets/subscribe.gif"
              alt="email illustration vector art"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
