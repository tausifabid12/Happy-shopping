import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from '../ProductCard/ProductCard';
import dynamic from 'next/dynamic';

const TopProducts = ({ products }) => {
  return (
    <div className="h-screen">
      {' '}
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            // width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {products.slice(0, 8).map((product) => (
          <SwiperSlide>
            <ProductCard key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// export default TopProducts;
export default dynamic(() => Promise.resolve(TopProducts), { ssr: false });
