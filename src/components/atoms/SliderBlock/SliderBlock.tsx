import React from "react";

import { useStyles } from "./styles";
import { Box, ButtonBase, Typography } from "@material-ui/core";

export interface IProps {
    title?: string;
    amount?: number;
    value?: string;
    type?: string;
    onClick?: () => void;
    cupon?: boolean;
    next?: boolean;
    color?: "black" | "yellow";
}

const SliderBlock: React.FC<IProps> = (props) => {
    const {
        value,
        onClick,
        color = "black",
        title = "Бонусы",
        amount = 100,
        cupon = false,
        next = false,
    } = props;
    const classes = useStyles(props);

    return (
        <Box className={classes.root}>
            {!cupon && (
                <>
                    <Box className={classes.bonusIcon}>
                        <Typography className={classes.char}>Б</Typography>
                    </Box>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography className={classes.amount}>
                        +{amount}
                    </Typography>
                    <Typography className={classes.text}>
                        Начислено: +15
                    </Typography>
                    <Typography className={classes.text}>Списано: 0</Typography>
                </>
            )}
            {cupon && (
                <>
                    <Box className={classes.black}>
                        <Typography className={classes.titleCupon}>
                            {next
                                ? "Скидка 500₽ на первую покупку"
                                : "Скидка 20% на первые поездки"}
                        </Typography>
                    </Box>

                    <Box className={classes.footer}>
                        <Box className={classes.logo}>
                            <Typography className={classes.logoText}>
                                {next ? "Обувь " : "Taxi"}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography className={classes.footerTextTini}>
                                {next
                                    ? "Обувь - По 24 мая "
                                    : "taxi - По 29 мая"}
                            </Typography>
                            <Typography className={classes.footerText}>
                                {next
                                    ? "Скидка 500₽ на первую покупку"
                                    : "Скидка 20% на первые две поездки"}
                            </Typography>
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default SliderBlock;
