import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
