import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';


import slider1 from '../Images/Header_slider/Urban outfit.png'
import slider2 from '../Images/Header_slider/Urban outfit2.png'
import slider3 from '../Images/Header_slider/Urban outfit3.png'
import slider4 from '../Images/Header_slider/Urban outfit4.png'
import slider5 from '../Images/Header_slider/Urban outfit5.png'
import slider6 from '../Images/Header_slider/Urban outfit6.png'
import slider7 from '../Images/Header_slider/Urban outfit7.png'
import slider8 from '../Images/Header_slider/Urban outfit8.png'
import slider9 from '../Images/Header_slider/Urban outfit9.png'


const Headerslider = () => {
    return (
        <>
            <div className='cursor-pointer'>
                <Swiper className='w-full'
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    slidesPerView={2}
                >
                    <SwiperSlide ><img src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={slider3} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={slider4} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={slider5} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={slider6} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={slider7} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={slider8} alt="" /></SwiperSlide>
                    <SwiperSlide ><img src={slider9} alt="" /></SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Headerslider