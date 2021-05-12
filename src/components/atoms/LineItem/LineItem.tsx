import React from "react";

import { useStyles } from "./styles";
import { Box, ButtonBase, Typography } from "@material-ui/core";
import cn from "classnames";

export interface IProps {
    value?: string;
    title?: string;
}

const LineItem: React.FC<IProps> = (props) => {
    const { value, title } = props;
    const classes = useStyles(props);

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.value}>{value}</Typography>
        </Box>
    );
};

export default LineItem;
