import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";

const Profile: React.FC = () => {
  const classes = useStyles();

  return (
    <Panel>
      <Box className={classes.root}>
        <Typography>Hello , Profile</Typography>
      </Box>
    </Panel>
  );
};

export default Profile;