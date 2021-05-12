import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import Button from "../../atoms/Button";

const Sales: React.FC = () => {
    const classes = useStyles();

    return (
        <Panel>
            <Box className={classes.root}>
                <Typography>Новый список</Typography>
                <Button value={"Создать список"} />
            </Box>
        </Panel>
    );
};

export default Sales;
