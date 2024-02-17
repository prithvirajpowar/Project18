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
                path:"/mobile",
                element:<Mobiles/>
            },
            {
                path:"/accessories",
                element:<Account/>,
            },
            {
                path:"/tablets",
                element:<Tablets/>,
            },
          
            {
                path:"/orders",
                element:<Orders/>,
            }
        ]
    },
    
])
export default customRoute;