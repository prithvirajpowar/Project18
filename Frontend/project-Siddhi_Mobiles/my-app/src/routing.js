import { createBrowserRouter } from "react-router-dom";
import Mobiles from "./components/Mobiles";
import Accessories from "./components/Accessories";
import Tablets from "./components/Tablets";
import Orders from "./components/Orders";

import App from "./App";
import Home from "./components/Home";
import Account from "./components/Account";


//http://localhost:3000/loginPage
const customRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
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
            }
        ]
    },
    
])
export default customRoute;