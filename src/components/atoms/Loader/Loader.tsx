import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const Loader: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <CircularProgress disableShrink className={classes.loader} />
        </Box>
    );
};

export default Loader;
