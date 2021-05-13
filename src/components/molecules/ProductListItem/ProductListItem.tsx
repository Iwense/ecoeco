import React from "react";

import { useStyles } from "./styles";
import { Box, Button, SvgIcon, Typography } from "@material-ui/core";
import { IProduct } from "../../../store/models/productList";
import { IProductList } from "../../../store/models/productList";
import { formattedDate } from "../../../utils";
import ProductItem from "../../atoms/ProductItem";

interface IProps {
    id?: number;
    name: string;
    date: Date;
    time: string;
    products: IProduct[];
}

const ProductListItem: React.FC<IProps> = ({
    name = "Новый список",
    date = new Date(),
    time = "18:00",
    products,
}: IProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.line}>
                <Typography className={classes.title}>{name}</Typography>
                <Typography className={classes.date}>
                    {formattedDate(date)}{" "}
                    <span className={classes.time}>{time}</span>
                </Typography>
            </Box>
            <Box className={classes.table}>
                {!!products.length &&
                    products.map((item: IProduct, index: number) => (
                        <ProductItem
                            key={`${item?.id}-product-${index}`}
                            title={item?.title}
                            amount={item?.amount}
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default ProductListItem;
