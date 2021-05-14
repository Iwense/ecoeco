import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
