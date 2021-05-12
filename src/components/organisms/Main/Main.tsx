import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import Slider from "../../molecules/Slider";
import MiniButton from "../../atoms/MiniButton";
import Button from "../../atoms/Button";
import ProductAds from "../../molecules/ProductAds";
import SliderBlock from "../../atoms/SliderBlock";

const Main: React.FC = () => {
    const classes = useStyles();

    return (
        <Panel>
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
        </Panel>
    );
};

export default Main;
