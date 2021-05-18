import React from "react";

import { useStyles } from "./styles";
import { Box, Button, SvgIcon, Typography } from "@material-ui/core";
import { ReactComponent as Close } from "../../../assets/svg/close.svg";

interface IProps {
    id?: number;
    title?: string;
    subtitle?: string;
    weight?: number;
    amount?: number;
    price?: number;
    oldPrice?: number;
    image?: string;
}
const ProductAds: React.FC<IProps> = ({
    title,
    subtitle,
    weight,
    amount,
    price,
    oldPrice,
    image,
}: IProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.sale}>-55%</Typography>
            <SvgIcon component={Close} className={classes.close} />
            <Box className={classes.line}>
                <Box className={classes.imageBox}>
                    <img className={classes.image} src={image} alt={title} />
                </Box>
                <Box className={classes.textWrapper}>
                    <Typography className={classes.title}>
                        {title || "Бедро цыпленка-бройлера"}
                    </Typography>
                    <Typography className={classes.subtitle}>
                        {subtitle}
                    </Typography>
                    <Button
                        disableRipple
                        disableTouchRipple
                        className={classes.btn}
                    >
                        Подробнее
                    </Button>
                </Box>
                <Box className={classes.priceInfo}>
                    <Box className={classes.priceInfoBox}>
                        <Typography noWrap className={classes.priceInfoBoxText}>
                            {price} &#8381;
                        </Typography>
                    </Box>
                    <Typography className={classes.oldPrice}>
                        {oldPrice} &#8381;
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductAds;
