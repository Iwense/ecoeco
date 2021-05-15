import React, { useState } from "react";
import cn from "classnames";
import { useStyles } from "./styles";
import { Box, Button, SvgIcon, Typography } from "@material-ui/core";
import { IProduct } from "../../../store/models/productList";
import { formattedDate } from "../../../utils";
import ProductItem from "../../atoms/ProductItem";
import { useSwipeable } from "react-swipeable";

interface IProps {
    id?: number;
    name: string;
    date: Date;
    time: string;
    products: IProduct[];
}

const ProductListItem: React.FC<IProps> = ({
    id,
    name = "Новый список",
    date = new Date(),
    time = "18:00",
    products,
}: IProps) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handlers = useSwipeable({
        onSwipedLeft: () => setShow(true),
        onSwipedRight: () => setShow(false),
    });

    const handleDeleteClick = () => {};

    return (
        <Box className={classes.root} {...handlers}>
            <Box className={cn(classes.main, show ? classes.animate : "")}>
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
            {show && (
                <Box className={classes.delete} onClick={handleDeleteClick}>
                    <Typography className={classes.deleteText}>
                        Удалить
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default ProductListItem;
