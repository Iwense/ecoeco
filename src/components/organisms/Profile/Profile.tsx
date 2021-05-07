import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const Profile: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>Hello , Profile</Typography>
    </Box>
  );
};

export default Profile;