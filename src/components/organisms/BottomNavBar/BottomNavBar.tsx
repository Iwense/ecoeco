import React, {useState} from "react";

import { useStyles } from "./styles";
import { BottomNavigation, BottomNavigationAction, Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const BottomNavBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);
  const onClick = () => {
    history.push('start')
  }
  return (
    <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    className={classes.root}
  >
    <BottomNavigationAction label="Recents" value="Recents" />
    <BottomNavigationAction label="Favorites" value="Favorites" />
    <BottomNavigationAction label="Nearby" value="Nearby" />
  </BottomNavigation>
  );
};

export default BottomNavBar;