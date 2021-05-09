import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";


interface IProps {
    date: Date,
    time: string,
    price: string,
    bonus: string,
}

const Invoice: React.FC<IProps> = ({date, time, price, bonus}) => {
  const classes = useStyles();

  return (
      <Box className={classes.root}>
        <Box className={classes.line}>
            <Box className={classes.dateTime}>
                <Typography className={classes.date}>{date}</Typography>
                <Typography>{time}</Typography>
            </Box>
            <Box>
                <Typography className={classes.price}>{price}{" "}&#8381;</Typography>
            </Box>
        </Box>

        <Box className={classes.line}>
            <Box className={classes.bonus}>
                <Box className={classes.bonusIcon}>Б</Box>
                <Typography>{bonus}</Typography>
            </Box>
            <Box className={classes.bonus}>
                <Typography>Чек</Typography>
                <Box className={classes.bonusIcon}>Б</Box>
                
            </Box>
        </Box>

      </Box>
    
  );
};

export default Invoice;