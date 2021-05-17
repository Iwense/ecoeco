import React from "react";

import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";

interface IProps {
    dataLegend: any;
    data: any;
    onClick: (e?: any) => void;
    handleMoveBox?: () => void;
}

const ChartLegend: React.FC<IProps> = ({ data, onClick }) => {
    const classes = useStyles();

    const handleClick = (id: number) => {
        onClick(id);
    };

    return (
        <Box className={classes.root}>
            {!!data?.length &&
                data.map((item: any) => (
                    <Box
                        key={`${item?.id}-item-products`}
                        className={classes.item}
                        onClick={() => handleClick(item?.id)}
                    >
                        <Box
                            className={classes.circle}
                            style={{ background: item?.color }}
                        ></Box>
                        <Typography className={classes.text}>
                            {item?.name}
                        </Typography>
                        <Typography noWrap className={classes.price}>
                            {item?.value} &#8381;
                        </Typography>
                    </Box>
                ))}
        </Box>
    );
};

export default ChartLegend;
