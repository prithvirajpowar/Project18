import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import customRoute from "./routing";
import { RouterProvider } from "react-router-dom";

// console.log(React);
// console.log(ReactDOM);

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
//root.render("Welcome");
//root.render("<h1>Hello World</h1>");

// //render variable through interpolation(implementation of variable into string)
// var username = "Linal";
// function f1() {
//   return 100;
// }
// root.render(
//   <h1>
//     Hello {username}&nbsp;
//     {f1()}
//   </h1>
// );
//root.render(<App/>) //to render app component
root.render(
    <RouterProvider router={customRoute} />
);// to render components of customRoute as it has 5 components


