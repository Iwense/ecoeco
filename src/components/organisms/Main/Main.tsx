import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import Slider from "../../molecules/Slider";

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <Panel>
       <Box className={classes.root}>
        <Box className={classes.slider}>
          <Slider />
        </Box>
      </Box>
    </Panel>
   
  );
};

export default Main;