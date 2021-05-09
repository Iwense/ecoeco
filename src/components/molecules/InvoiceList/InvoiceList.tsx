import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Invoice from "../../atoms/Invoice";
import { useSelector } from "react-redux";
import { getListInvoice } from "../../../store/selector";



const InvoiceList: React.FC = () => {
  const classes = useStyles();
  const list = useSelector(getListInvoice)

  return (
      <Box className={classes.root}>
        <Typography>Чеки</Typography>
        {!!list.length && list.map((item:any, index:number)=> (
            <Invoice date={item?.date} time={item?.time} price={item?.price} bonus={item?.bonus}/>
        ))}
      </Box>
    
  );
};

export default InvoiceList;