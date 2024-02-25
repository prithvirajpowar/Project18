import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import customRoute from "./routing";
import { RouterProvider } from "react-router-dom";
// import GoogleOAuthProvider from "./google-oauth-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
    <RouterProvider router={customRoute} />
    {/* <GoogleOAuthProvider clientId="242718267072-driauk7gk8g7g3550gdu6ud8o2urf0tp.apps.googleusercontent.com">...</GoogleOAuthProvider> */}
    </>

);// to render components of customRoute as it has 5 components


