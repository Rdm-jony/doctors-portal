import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appoinment from "../Pages/Appoinment/Appoinment/Appoinment";
import Home from "../Pages/Home/Home/Home";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"home",
                element:<Home></Home>
            },
            {
                path:"/appoinment",
                element:<Appoinment></Appoinment>
            }
        ]
    }
])
export default router;