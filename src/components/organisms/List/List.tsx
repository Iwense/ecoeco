import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import InvoiceList from "../../molecules/InvoiceList";

const List: React.FC = () => {
  const classes = useStyles();

  return (
    <Panel>
      <Box className={classes.root}>
       <InvoiceList />
      </Box>
    </Panel>
    
  );
};

export default List;