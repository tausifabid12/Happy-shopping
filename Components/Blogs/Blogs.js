import React from 'react';

const Blogs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mx-10 hidden lg:block">
      <h1 className="text-4xl font-bold text-gray-900 text-center pt-8">
        From Our Latest Blogs
      </h1>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src="/assets/blog-1.jpg"
              alt="blog"
            />

            <div>
              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                What do you want to know about Happy Shopping
              </h1>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-primary font-bold capitalize">
                Design instument
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                How to raise $100k+ by using local designers
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-primary font-bold capitalize">Resources</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Should you creat Product by using Blox?
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-primary font-bold capitalize">
                Premium Collection
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 Blocks you can get on happy collection.
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-primary font-bold capitalize">
                Premium kits
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 offers you can get on happy collection.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
