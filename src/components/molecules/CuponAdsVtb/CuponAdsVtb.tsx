import React, { useState } from "react";

import { useStyles } from "./styles";
import { Box, Button, SvgIcon, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

export interface IProps {}
const CuponAdsVtb: React.FC<IProps> = (props: IProps) => {
    const classes = useStyles(props);
    const history = useHistory();

    const handleClick = () => {
        history.push("/promo");
    };

    return (
        <Box className={classes.root} onClick={handleClick}>
            <Box className={classes.black}>
                <Typography className={classes.title}>
                    Вам предодобрена кредитная карта ВТБ
                </Typography>

                <Typography className={classes.subtitle}>
                    {"110 дней без процентов на любые операции"}
                </Typography>
            </Box>

            <Box className={classes.footer}>
                <Box className={classes.logo}>
                    <Typography className={classes.logoText}>
                        {"ВТБ"}
                    </Typography>
                </Box>
                <Box>
                    <Typography className={classes.footerTextTini}>
                        {"ВТБ - По 31 декабря "}
                    </Typography>
                    <Typography className={classes.footerText}>
                        {"110 дней без процентов на любые операции"}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CuponAdsVtb;
