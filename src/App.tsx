import React from "react";
import "./App.css";
import { HashRouter, BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <BrowserRouter basename={"/ecoeco"}>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
