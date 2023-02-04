import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  // const heroData = [
  //   {
  //     heading: 'The Best Quality Product Granted',
  //     dec: 'We Offer the best Products in the entire country. We always care about our customers first. ',
  //     img: '/assets/hero-2.gif',
  //   },
  //   {
  //     heading: 'Choose From over 1M Products',
  //     dec: 'We Offer the best Products in the entire country. We always care about our customers first.',
  //     img: '/assets/hero-1.gif',
  //   },
  //   {
  //     heading: 'Get Huge Exciting Discount Everyday',
  //     dec: 'We Offer the best Products in the entire country. We always care about our customers first. ',
  //     img: '/assets/hero-3.gif',
  //   },
  // ];

  return (
    <section className="relative h-[500px] bg-white  mb-20">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 opacity-25" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className=" w-full h-full lg:mx-20 lg:-m-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex items-center">
              <div className="space-y-7 px-8 lg:px-0">
                <h2 className="text-2xl text-center lg:text-5xl font-bold pt-10 lg:pt-0 lg:text-left">
                  Choose From over 1M Products
                </h2>

                <p className=" text-sm text-center  lg:text-md text-gray-600 lg:text-left">
                  We Offer the best Products in the entire country. We always
                  care about our customers first. Lorem ipsum, dolor sit amet
                  consectetur
                </p>
                <div className="w-ful lg:w-1/4 mx-auto lg:mx-0">
                  <button className="btn btn-primary  w-full text-left">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image
                height={500}
                width={500}
                src="/assets/hero-2.gif"
                alt="hero"
              ></Image>
            </div>
          </div>
        </div>
        <div className=" w-full h-full lg:mx-20 lg:-m-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex items-center">
              <div className="space-y-7 px-8 lg:px-0">
                <h2 className="text-2xl text-center lg:text-5xl font-bold pt-10 lg:pt-0 lg:text-left">
                  The Best Quality Product Granted
                </h2>

                <p className=" text-sm text-center  lg:text-md text-gray-600 lg:text-left">
                  We Offer the best Products in the entire country. We always
                  care about our customers first. Lorem ipsum, dolor sit amet
                  consectetur
                </p>
                <div className="w-ful lg:w-1/4 mx-auto lg:mx-0">
                  <button className="btn btn-primary  w-full text-left">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image
                height={500}
                width={500}
                src="/assets/hero-1.gif"
                alt="hero"
              ></Image>
            </div>
          </div>
        </div>
        <div className=" w-full h-full lg:mx-20 lg:-m-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden lg:pr-12">
            <div className="flex items-center">
              <div className="space-y-7 px-8 lg:px-0">
                <h2 className="text-2xl text-center lg:text-5xl font-bold pt-10 lg:pt-0 lg:text-left">
                  Get Huge Exciting Discount Everyday
                </h2>

                <p className=" text-sm text-center  lg:text-md text-gray-600 lg:text-left">
                  We Offer the best Products in the entire country. We always
                  care about our customers first. Lorem ipsum, dolor sit amet
                  consectetur
                </p>
                <div className="w-ful lg:w-1/4 mx-auto lg:mx-0">
                  <button className="btn btn-primary  w-full text-left">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image
                height={500}
                width={500}
                src="/assets/carousel-1.png"
                alt="hero"
              ></Image>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
