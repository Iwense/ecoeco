import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const CustomTooltip = ({ active, payload }: any) => {
    const classes = useStyles();

    const now = new Date(Date.now());
    const year = now.getFullYear();
    if (active && payload && payload.length) {
        return (
            <Box className={classes.tooltip}>
                <Typography className={classes.tooltipTitle}>
                    {payload[0]?.payload.date || "01.01"}.{year}
                </Typography>
                <Box className={classes.tooltipLine}>
                    <Typography className={classes.tooltipLabel}>
                        {"Сумма"}
                    </Typography>
                    <Typography className={classes.tooltipValue}>
                        {payload[0]?.payload.price || "0"} &#8381;
                    </Typography>
                </Box>
                <Box className={classes.tooltipLine}>
                    <Typography className={classes.tooltipLabel}>
                        {"Скидка"}
                    </Typography>
                    <Typography className={classes.tooltipValueSale}>
                        {payload[0]?.payload.sale || "0"} &#8381;
                    </Typography>
                </Box>
            </Box>
        );
    }

    return null;
};

export default CustomTooltip;
