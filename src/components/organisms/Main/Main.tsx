import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>Hello , main</Typography>
    </Box>
  );
};

export default Main;