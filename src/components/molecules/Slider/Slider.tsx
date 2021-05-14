import React from "react";

import { useStyles } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
interface IProps {
    children: React.ReactNode;
    count: number;
}

const Slider: React.FC<IProps> = ({ children, count = 2 }) => {
    const classes = useStyles();

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={count}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            className={classes.swiper}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <SwiperSlide key={`${Date.now()}-slide-${index}-${item}`}>
                    {children}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
