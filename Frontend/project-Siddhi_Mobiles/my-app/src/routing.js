import { createBrowserRouter } from "react-router-dom";
import Mobiles from "./components/Mobiles";
import Accessories from "./components/Accessories";
import Tablets from "./components/Tablets";
import Orders from "./components/Orders";

import App from "./App";
import Home from "./components/Home";


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
                element:<Accessories/>,
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