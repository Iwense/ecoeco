import React, { Suspense } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import MiniButton from "../../atoms/MiniButton";
import Button from "../../atoms/Button";
import ProductAds from "../../molecules/ProductAds";
import SliderBlock from "../../atoms/SliderBlock";
import Loader from "../../atoms/Loader";

const Slider = React.lazy(() => import("../../molecules/Slider"));

const Main: React.FC = () => {
    const classes = useStyles();

    return (
        <Panel>
            <Suspense fallback={<Loader />}>
                <Box className={classes.root}>
                    <Box className={classes.slider}>
                        <Slider count={2} children={<SliderBlock />} />
                    </Box>
                    <Box className={classes.line}>
                        <MiniButton typeBtn={"plus"} />
                        <MiniButton typeBtn={"code"} />
                        <Button value={"Спиcок покупок"} typeBtn={"white"} />
                    </Box>
                    <Box className={classes.line}>
                        <Slider count={1} children={<ProductAds />} />
                    </Box>
                </Box>
            </Suspense>
        </Panel>
    );
};

export default Main;
