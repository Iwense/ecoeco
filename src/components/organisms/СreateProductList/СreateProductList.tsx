import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";

const СreateProductList: React.FC = () => {
    const classes = useStyles();

    return (
        <Panel>
            <Box className={classes.root}>new list</Box>
        </Panel>
    );
};

export default СreateProductList;
