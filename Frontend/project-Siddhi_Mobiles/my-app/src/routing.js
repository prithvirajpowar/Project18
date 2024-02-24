import { createBrowserRouter } from "react-router-dom";
import Mobiles from "./components/Mobiles";
import Accessories from "./components/Accessories";
import Tablets from "./components/Tablets";
import Orders from "./components/Orders";
import SmartTv from "./components/SmartTv";
import App from "./App";
import Home from "./components/Home";
import Account from "./components/Account";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import Delivery from "./components/Delivery";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Store  from "./components/Store";

import Delete from "./components/Delete";
import AddProducts from "./components/AddProducts";

const customRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/mobiles",
                element:<Mobiles/>
            },
            {
                path:"/accessories",
                element:<Accessories/>,
            },
            {
                path:"/tablets",
                element:<Tablets/>,
            },
          
            {
                path:"/orders",
                element:<Orders/>,
            },
            {
                path:"/account",
                element:<Account/>,
            },
            {
                path:"/smarttv",
                element:<SmartTv/>,
            },
            {
                path:"/signup",
                element:<SignUp/>,
            },
            {
                path:"/signin",
                element:<SignIn/>,
            },
            {
                path:"/dashboard",
                element:<Dashboard/>,
            },
            {
                path:"/inventory",
                element:<Inventory/>,
            },
            {
                path:"/delivery",
                element:<Delivery/>,
            },
            {
                path:"/orders",
                element:<Orders/>,
            },
            {
                path:"/store",
                element:<Store/>,
            },
            {
                path:'/addproducts',
                element:<AddProducts/>,
            },
            {
                path:'/delete',
                element:<Delete/>,
            }
        ]
    },
    
])
export default customRoute;