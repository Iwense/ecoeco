import React, {ReactNode} from "react";

import { useStyles } from "./styles";
import { Box } from "@material-ui/core";

interface IProps {
    children: ReactNode,
}

const Panel: React.FC<IProps> = ({children}:IProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {children}
    </Box>
  );
};

export default Panel;