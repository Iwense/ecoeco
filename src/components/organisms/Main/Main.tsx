import React, { Suspense } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import MiniButton from "../../atoms/MiniButton";
import Button from "../../atoms/Button";
import ProductAds from "../../molecules/ProductAds";
import SliderBlock from "../../atoms/SliderBlock";
import Loader from "../../atoms/Loader";
import { useHistory } from "react-router";
import CuponAds from "../../molecules/CuponAds";
import CuponAdsVtb from "../../molecules/CuponAdsVtb";
import ProductAdsSlider from "../../molecules/ProductAdsSlider";

const Slider = React.lazy(() => import("../../molecules/Slider"));

const Main: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Panel>
            <Suspense fallback={<Loader />}>
                <Box className={classes.root}>
                    <Box className={classes.slider}>
                        <Slider
                            count={2}
                            children={[
                                <SliderBlock />,
                                <SliderBlock next cupon color='yellow' />,
                                <SliderBlock cupon color='black' />,
                            ]}
                        />
                    </Box>
                    <Box className={classes.line}>
                        {/* <MiniButton typeBtn={"plus"} /> */}
                        <MiniButton typeBtn={"code"} />
                        <Button
                            className={classes.btn}
                            value={"Спиcок покупок"}
                            typeBtn={"white"}
                            onClick={() => history.push("/sales")}
                        />
                    </Box>
                    <ProductAdsSlider />

                    <Typography className={classes.title}>
                        Акции и промокоды
                    </Typography>
                    <Box className={classes.line}>
                        <CuponAdsVtb />
                    </Box>
                    <Box className={classes.line}>
                        <CuponAds color='black' />
                    </Box>

                    <Box className={classes.line}>
                        <CuponAds next color='yellow' />
                    </Box>
                </Box>
            </Suspense>
        </Panel>
    );
};

export default Main;
