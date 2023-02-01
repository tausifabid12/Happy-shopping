import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <section className="relative h-[500px] bg-white  mb-20">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 opacity-25" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className=" w-full h-full mx-20 -m-16">
          <div className="flex ">
            <div className="flex items-center w-[50%]">
              <div className="space-y-7">
                <h2 className="text-5xl font-bold  text-left">
                  The Best Quality Product Granted
                </h2>

                <p className=" text-gray-600 text-left">
                  We Offer the best Products in the entire country. We always
                  care about our customers first. Lorem ipsum, dolor sit amet
                  consectetur
                </p>
                <div className="w-1/4">
                  <button className="btn btn-primary w-full text-left">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image height={500} width={500} src="/assets/hero-2.gif"></Image>
              {/* <img
                
                src="/assets/hero-1.gif"
                // className="w-full h-full max-h-screen "
              /> */}
            </div>
          </div>
        </div>
        <div className=" w-full h-full mx-20 -m-16 ">
          <div className="flex ">
            <div className="flex items-center w-[50%]">
              <div className="space-y-7">
                <h2 className="text-5xl font-bold  text-left">
                  Choose From over 1M Products
                </h2>

                <p className=" text-gray-600 text-left">
                  We Offer the best Products in the entire country. We always
                  care about our customers first. Lorem ipsum, dolor sit amet
                  consectetur
                </p>
                <div className="w-1/4">
                  <button className="btn btn-primary w-full text-left">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image height={500} width={500} src="/assets/hero-1.gif"></Image>
              {/* <img
                
                src="/assets/hero-1.gif"
                // className="w-full h-full max-h-screen "
              /> */}
            </div>
          </div>
        </div>
        <div className=" w-full h-full mx-20 -m-4">
          <div className="flex ">
            <div className="flex items-center w-[50%]">
              <div className="space-y-7">
                <h2 className="text-5xl font-bold  text-left">
                  Get Huge Exciting Discount Everyday
                </h2>

                <p className=" text-gray-600 text-left">
                  We Offer the best Products in the entire country. We always
                  care about our customers first. Lorem ipsum, dolor sit amet
                  consectetur
                </p>
                <div className="w-1/4">
                  <button className="btn btn-primary w-full text-left">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image height={500} width={500} src="/assets/hero-3.gif"></Image>
              {/* <img
                
                src="/assets/hero-1.gif"
                // className="w-full h-full max-h-screen "
              /> */}
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
