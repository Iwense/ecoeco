import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import InvoiceList from "../../molecules/InvoiceList";
import PieChart from "../../molecules/PieChart";

const List: React.FC = () => {
  const classes = useStyles();

  return (
    <Panel>
      <Box className={classes.root}>
        <Box className={classes.line}>
          <Typography className={classes.title}>Покупка за <span className={classes.textLink}>май</span></Typography>
          <Typography className={classes.price}>1500.94{" "}&#8381;</Typography>
        </Box>
       
        <Box className={classes.analyticWrapper}>
          <PieChart />
        </Box>
       <InvoiceList />
      </Box>
    </Panel>
    
  );
};

export default List;