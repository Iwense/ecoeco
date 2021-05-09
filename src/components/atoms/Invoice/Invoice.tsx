import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { SvgIcon } from '@material-ui/core';
import {ReactComponent as Check} from '../../../assets/svg/invoice.svg'
import {formattedDate} from '../../../utils' 


interface IProps {
    date: Date,
    time: string,
    price: string,
    bonus: string,
    onClick: () => void,
}



const Invoice: React.FC<IProps> = ({date, time, price, bonus, onClick}) => {
  const classes = useStyles();

  return (
      <Box className={classes.root} onClick={onClick}>
        <Box className={classes.line}>
            <Box className={classes.dateTime}>
                <Typography className={classes.date}>{formattedDate(date)}</Typography>
                <Typography>{time}</Typography>
            </Box>
            <Box>
                <Typography className={classes.price}>{price}<Typography component="span" className={classes.ruble}>{" "}&#8381;</Typography></Typography>
            </Box>
        </Box>

        <Box className={classes.line}>
            <Box className={classes.bonus}>
                <Box className={classes.bonusIcon}>
                    <Typography className={classes.char}>Б</Typography>
                </Box>
                <Typography className={classes.bonusText}>+{bonus}</Typography>
            </Box>
            <Box className={classes.bonus}>
                <Typography className={classes.checkText}>Чек</Typography>
                <SvgIcon component={Check} className={classes.checkIcon}/>
                
            </Box>
        </Box>

      </Box>
    
  );
};

export default Invoice;