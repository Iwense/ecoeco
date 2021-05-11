import React from "react";

import { useStyles } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideBlock from '../../atoms/SliderBlock'

import 'swiper/swiper.scss';

const Slider: React.FC = () => {
  const classes = useStyles();
 
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={classes.swiper}
    >
      <SwiperSlide>
        <SlideBlock />
      </SwiperSlide>
      <SwiperSlide><SlideBlock /></SwiperSlide>
      <SwiperSlide><SlideBlock /></SwiperSlide>
      <SwiperSlide><SlideBlock /></SwiperSlide>
      <SwiperSlide><SlideBlock /></SwiperSlide>
      <SwiperSlide><SlideBlock /></SwiperSlide>
      <SwiperSlide><SlideBlock /></SwiperSlide>
      <SwiperSlide><SlideBlock /></SwiperSlide>
      <SwiperSlide><SlideBlock /></SwiperSlide>
    </Swiper>
    
  );
};

export default Slider;