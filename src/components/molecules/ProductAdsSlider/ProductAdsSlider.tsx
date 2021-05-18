import React from "react";

import { useStyles } from "./styles";
import { Box, Button, SvgIcon, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getAdsProducts } from "../../../store/selector";
import ProductAds from "../ProductAds";
import Slider from "../Slider";

const ProductAdsSlider = React.memo(() => {
    const classes = useStyles();
    const adsProducts = useSelector(getAdsProducts);

    const arrayForSlider = () => {
        const result = adsProducts.map((item: any) => (
            <ProductAds
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                oldPrice={item.oldPrice}
                image={item.image}
            />
        ));

        return result;
    };

    return (
        <Box className={classes.root}>
            <Slider count={1} children={arrayForSlider()} />
        </Box>
    );
});

export default ProductAdsSlider;
