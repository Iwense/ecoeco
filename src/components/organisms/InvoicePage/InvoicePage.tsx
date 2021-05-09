import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getListInvoice } from "../../../store/selector";
import { useHistory,useParams } from "react-router-dom";
import {formattedDate } from '../../../utils'
import {IInvoiceList} from '../../../store/models/invoiceList'
import Panel from "../Panel";

type TParams = {
    id: string
}

const initialVal : IInvoiceList= {
    id: 1,
    price: "1000",
    bonus: "10",
    date: new Date(),
    time: "1:00"
}

const InvoicePage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const {id} = useParams<TParams>();
  const list: IInvoiceList[] = useSelector(getListInvoice)
  const current: IInvoiceList = list.find((item:IInvoiceList) => item.id === +id) || initialVal;

  return (
      <Panel>
          <Box className={classes.root}>
            <Typography className={classes.title}>Детали операции</Typography>
            <Box className={classes.line}>
                <Box className={classes.dateTime}>
                    <Typography className={classes.date}>{formattedDate(current?.date)}</Typography>
                    <Typography>{current?.time || 'Время'}</Typography>
                </Box>
                <Box>
                    <Typography>Адрес магазина:</Typography> 
                    {/* <Typography className={classes.price}>{current?.price}<Typography component="span" className={classes.ruble}>{" "}&#8381;</Typography></Typography> */}
                </Box>
            </Box>
            <Box className={classes.location}> 
                <Typography className={classes.locationText}>{"г.Орёл, ул. Ленина, 4"}</Typography>
            </Box>
            
        </Box>
      </Panel>
      
    
  );
};

export default InvoicePage;