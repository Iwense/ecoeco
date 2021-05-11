import React from "react";

import { useStyles } from "./styles";
import { Box, ButtonBase, Typography } from "@material-ui/core";


interface IProps {
    value: string,
    type?: string,
    onClick?: () => void,
}



const Button: React.FC<IProps> = ({value, onClick}) => {
  const classes = useStyles();

  return (
      <ButtonBase
        disableRipple
        disableTouchRipple
        focusRipple
        className={classes.button}
      >
          <Typography className={classes.text}>{value}</Typography>
      </ButtonBase>
    
  );
};

export default Button;