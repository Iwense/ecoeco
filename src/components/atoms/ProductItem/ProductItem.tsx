import React from "react";

import { useStyles } from "./styles";
import { Box, ButtonBase, Typography } from "@material-ui/core";
import cn from "classnames";

export interface IProps {
    title?: string;
    amount?: number;
}

const ProductItem: React.FC<IProps> = (props) => {
    const { amount, title } = props;
    const classes = useStyles(props);

    return (
        <Box className={classes.root}>
            <Box className={classes.line}>
                <Box className={classes.circle}></Box>
                <Typography className={classes.title}>{title}</Typography>
            </Box>

            {!!amount && (
                <Box className={classes.center}>
                    <Box className={classes.amountBox}>
                        <Typography className={classes.amountBoxText}>
                            Шт
                        </Typography>
                    </Box>
                    <Typography className={classes.amount}>{amount}</Typography>
                </Box>
            )}
        </Box>
    );
};

export default ProductItem;
