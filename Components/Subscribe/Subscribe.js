import React from 'react';

const Subscribe = () => {
  return (
    <section class="bg-white dark:bg-gray-900 mx-10">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-4xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                Subscribe To The{' '}
                <span class="text-primary">Happy Shopping</span>
              </h1>

              <p class="mt-3 text-gray-600 dark:text-gray-400">
                be the first to knows when our
                <span class="font-medium text-primary"> Big Sell</span> is live
              </p>

              <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button class="btn btn-primary ml-2">Subscribe</button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-full h-full max-w-md"
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
