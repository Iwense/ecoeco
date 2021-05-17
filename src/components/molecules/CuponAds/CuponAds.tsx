import React, { useState } from "react";

import { useStyles } from "./styles";
import { Box, Button, SvgIcon, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

export interface IProps {
    color: "black" | "yellow";
    next?: boolean;
}
const CuponAds: React.FC<IProps> = (props: IProps) => {
    const { next = false, color = "black" } = props;
    const classes = useStyles(props);

    const [promo, setPromo] = useState(false);
    const history = useHistory();

    const handleClick = () => {
        history.push("/promo");
    };

    return (
        <Box className={classes.root} onClick={handleClick}>
            <Box className={classes.black}>
                <Typography className={classes.title}>
                    {next
                        ? "Скидка 500₽ на первую покупку"
                        : "Скидка 20% на первые поездки"}
                </Typography>
                {promo && (
                    <Box className={classes.promo}>
                        <Typography className={classes.promoText}>
                            Промокод
                        </Typography>
                        <Typography noWrap className={classes.promoCode}>
                            ECO-ECO
                        </Typography>
                    </Box>
                )}
            </Box>

            <Box className={classes.footer}>
                <Box className={classes.logo}>
                    <Typography className={classes.logoText}>
                        {next ? "Обувь " : "Taxi"}
                    </Typography>
                </Box>
                <Box>
                    <Typography className={classes.footerTextTini}>
                        {next ? "Обувь - По 24 мая " : "taxi - По 29 мая"}
                    </Typography>
                    <Typography className={classes.footerText}>
                        {next
                            ? "Скидка 500₽ на первую покупку"
                            : "Скидка 20% на первые две поездки"}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CuponAds;
