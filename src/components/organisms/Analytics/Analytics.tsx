import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const Analytics: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>Hello , Analytics</Typography>
    </Box>
  );
};

export default Analytics;