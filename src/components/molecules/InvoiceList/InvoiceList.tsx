import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Invoice from "../../atoms/Invoice";
import { useSelector } from "react-redux";
import { getListInvoice } from "../../../store/selector";
import { useHistory } from "react-router-dom";



const InvoiceList: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const list = useSelector(getListInvoice)

  const handleClick = (id:number) => {
    history.push(`/invoice/${id}`)
  } 

  return (
      <Box className={classes.root}>
        <Typography className={classes.title}>Чеки</Typography>
        {!!list.length && list.map((item:any, index:number)=> (
            <Invoice key ={`invoice-${index}-${Date.now()}`} date={item?.date} time={item?.time} 
            price={item?.price} bonus={item?.bonus}
            onClick={() => handleClick(item?.id)}
            />
        ))}
      </Box>
    
  );
};

export default InvoiceList;