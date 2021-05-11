import React from "react";

import { useStyles } from "./styles";
import { Box, ButtonBase, Typography } from "@material-ui/core";


interface IProps {
    title?: string;
    amount?: number;
    value?: string,
    type?: string,
    onClick?: () => void,
}



const SliderBlock: React.FC<IProps> = ({value, onClick,title="Бонусы", amount=100 }) => {
  const classes = useStyles();

  return (
      <Box className={classes.root}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.amount}>{amount}</Typography>
        <Typography className={classes.text}>Начислено: +15</Typography>
        <Typography className={classes.text}>Списано: 0</Typography>
      </Box>
    
  );
};

export default SliderBlock;