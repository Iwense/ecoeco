import React from "react";

import { useStyles } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import SliderBlock from "../../atoms/SliderBlock";
interface IProps {
    children: React.ReactNode[];
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
            {!!children.length &&
                children.map((item, index) => (
                    <SwiperSlide key={`${Date.now()}-slide-${index}-${item}`}>
                        {children[index]}
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default Slider;
