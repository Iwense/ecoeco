import React from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import Milk from "../../../assets/png/milk.png";
import { ReactComponent as Star } from "../../../assets/svg/star.svg";

interface IProps {
    id: number;
    title: string;
    subtitle: string;
    weight: string;
    amount: number;
    price: number;
    image?: string;
}
const Product: React.FC<IProps> = ({
    title,
    subtitle,
    weight,
    amount,
    price,
    image,
}: IProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.line}>
                <Box className={classes.textWrapper}>
                    <Typography className={classes.title}>
                        {title || "Бедро цыпленка-бройлера"}
                    </Typography>
                    <Typography className={classes.subtitle}>
                        {subtitle || ""}
                    </Typography>

                    <Box className={classes.info}>
                        <Box className={classes.infoTd}>
                            <Box className={classes.infoBox}>
                                <Typography>Вес</Typography>
                            </Box>
                            <Typography noWrap className={classes.infoText}>
                                {weight || "1,004 "}
                            </Typography>
                        </Box>

                        <Box className={classes.infoTd}>
                            <Box className={classes.infoBox}>
                                <Typography>Шт</Typography>
                            </Box>
                            <Typography noWrap className={classes.infoText}>
                                {amount || "5"}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.imageBox}>
                    <img className={classes.image} src={image} alt={title} />
                </Box>
                <SvgIcon className={classes.star} component={Star} />
            </Box>

            <Box className={classes.line}>
                <Box className={classes.priceInfo}>
                    <Box className={classes.priceInfoBox}>
                        <Typography className={classes.priceInfoBoxText}>
                            Цена
                        </Typography>
                    </Box>
                    <Typography className={classes.infoText}>
                        {price} &#8381; x{amount}
                    </Typography>
                </Box>
                <Typography className={classes.price}>
                    {price * amount || "1500.94"}
                    <Typography component='span' className={classes.ruble}>
                        {" "}
                        &#8381;
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
};

export default Product;
