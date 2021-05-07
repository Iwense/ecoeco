import React, { ReactChild, ReactElement } from "react";
import {Box} from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
  children: ReactChild;
  footer: ReactChild;
}

const MainLayout: React.FC<IProps> = (props) => {
  const { children, footer } = props;

  const classes = useStyles();
  return (
    <Box className={classes.mainWrapper}>
      <Box className={classes.content}>
        {children}
      </Box> 
      <Box className={classes.footer} >
        {footer}
      </Box> 
    </Box>
  );
};

export default MainLayout;