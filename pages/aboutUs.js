import React from 'react';
import Layout from '../Components/Layout/Layout';

const AboutUs = () => {
  return (
    <Layout title="About Us">
      <section className="bg-white dark:bg-gray-900 pb-20">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              About our <span className="text-primary">Company</span> <br />{' '}
              what you should know
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src="/assets/aboutUs.gif"
                alt=""
              />

              <div className="mt-8 lg:px-10 lg:mt-0 rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                  We are one of the best and trusted company on this country.
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  There are probably a million other businesses that sell what
                  you're selling, but no one else shares your story. Your story
                  is what makes you unique. Don't just write numbers and dates;
                  let your prospects know who you really are. Be vulnerable and
                  tell them why you started your business.
                </p>

                <h3 className="mt-6 text-lg font-medium text-primary">
                  Ronik Ederson
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Marketing Manager at Stech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
