import React from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";

interface IProps {
    dataLegend: any;
    data: any;
    onClick?: () => void;
    handleMoveBox?: () => void;
}

const ChartLegend: React.FC<IProps> = ({ data }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {!!data?.length &&
                data.map((item: any) => (
                    <Box
                        key={`${item?.id}-item-products`}
                        className={classes.item}
                    >
                        <Box className={classes.circle}></Box>
                        <Typography className={classes.text}>
                            Мясо и птица
                        </Typography>
                        <Typography noWrap className={classes.price}>
                            {false || "1500.94"} &#8381;
                        </Typography>
                    </Box>
                ))}
        </Box>
    );
};

export default ChartLegend;
