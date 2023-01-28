import React from "react";
import picture from '../../Images/Ellipse 4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import TestimonyComp from "./TestimonyComp";

const SwiperComp = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper3"
        // style={{height: '400px'}}
      >
        <SwiperSlide>
          <TestimonyComp picture={picture} name='Harry Wilson' position='Property Owner' />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyComp picture={picture} name='Ayoola Mojeed' position='Manager' />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyComp picture={picture} name='Ayoola Mojeed' position='Manager' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


// const swiper = new Swiper

export default SwiperComp