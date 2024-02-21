import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import customRoute from "./routing";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={customRoute} />
);// to render components of customRoute as it has 5 components


