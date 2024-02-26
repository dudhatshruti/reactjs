import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import flower from '../../assets/images/flower.jpeg'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Grid, Pagination } from 'swiper/modules';

export default function  Swipper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        
        autoplay={{
            delay: 2500,
          }}
        spaceBetween={2}
       
        modules={[Autoplay,Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={flower} alt="" className='mx-auto ml-48 overflow-hidden' /></SwiperSlide>
        <SwiperSlide><img src={flower} alt="" className='mx-auto ml-48 overflow-hidden'/></SwiperSlide>
        <SwiperSlide><img src={flower} alt="" className='mx-auto ml-48 overflow-hidden'/></SwiperSlide>
      </Swiper>
    </>
  );
}
