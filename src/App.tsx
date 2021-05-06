import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
         <CssBaseline />
      <Container
        maxWidth={false}
        className={classes.root}
        disableGutters
        component={"div"}
      >
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
