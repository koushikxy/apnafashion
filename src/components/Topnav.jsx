import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

const Topnav = () => {
  return (
    <>
      <div className=' p-3 text-white text-center bg-black tracking-[3px] font-semibold text-sm'>
        <Swiper className=''
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
        >
          <SwiperSlide className='bg-black'>SHOP FOR RS 999/- & GET EXTRA 10% OFF</SwiperSlide>
          <SwiperSlide className='bg-black'>SHOP FOR RS 1999/- & GET EXTRA 15% OFF</SwiperSlide>
          <SwiperSlide className='bg-black'>SHOP FOR RS 2999/- & GET EXTRA 20% OFF</SwiperSlide>
          <SwiperSlide className='bg-black'>SHOP FOR RS 3999/- & GET EXTRA 30% OFF</SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Topnav