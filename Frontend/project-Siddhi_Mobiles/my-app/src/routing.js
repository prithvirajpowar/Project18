import { createBrowserRouter } from "react-router-dom";
import Mobiles from "./components/Mobiles";
import Accessories from "./components/Accessories";
import Tablets from "./components/Tablets";
import Orders from "./components/Orders";
import SmartTv from "./components/SmartTv";
import App from "./App";
import Home from "./components/Home";
import Account from "./components/Account";
import Dashboard from "./components/Dashboard";


//http://localhost:3000/loginPage
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
                path:"/dashboard",
                element:<Dashboard/>,
            }
        ]
    },
    
])
export default customRoute;