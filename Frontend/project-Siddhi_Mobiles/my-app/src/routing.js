import { createBrowserRouter } from "react-router-dom";
import Mobiles from "./components/Mobiles";
import Accessories from "./components/Accessories";
import Tablets from "./components/Tablets";
import Orders from "./components/Orders";
import SmartTv from "./components/SmartTv";
import App from "./App";
import Home from "./components/Home";
import Home1 from "./components/Home1";

import Account from "./components/Account";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import Delivery from "./components/Delivery";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Iphone from "./components/Iphone";
import Delete from "./components/Delete";
import AddProducts from "./components/AddProducts";
import AddForm from "./components/AddForm";

import AccList from "./components/AccList";
import AccTab from "./components/AccTab";

const customRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<SignIn/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/home1",
                element:<Home1/>
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
                path:"/addmobiles",
                element:<Iphone/>,
            },
            {
                path:"/addaccessories",
                element:<AccList/>,
            },
            {
                path:"/addtabs",
                element:<AccTab/>,
            },
            {
                path:'/addproducts',
                element:<AddProducts/>,
            },
            {
                path:'/delete',
                element:<Delete/>,
            },
            {
                path:'/add',
                element:<AddForm/>,
            },
            {
                path:'/add',
                element:<AddForm/>,
            },
        ]
    },
    
])
export default customRoute;