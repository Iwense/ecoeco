import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const List: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>Hello , List</Typography>
    </Box>
  );
};

export default List;