import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const Sales: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>Hello , Sales</Typography>
    </Box>
  );
};

export default Sales;