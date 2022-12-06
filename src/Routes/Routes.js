import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Appoinment from "../Pages/Appoinment/Appoinment/Appoinment";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";
import ManageDoctors from "../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppoinment from "../Pages/DashBoard/MyAppoinment/MyAppoinment";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Login/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "home",
                element: <Home></Home>
            },
            {
                path: "/appoinment",
                element: <Appoinment></Appoinment>
            },
            {
                path: "sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "sign-in",
                element: <SignIn></SignIn>
            }

        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashBoardLayout></DashBoardLayout>
        </PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: "/dashboard/my-appoinment",
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: "/dashboard/all-user",
                element: <AdminRoute>
                    <AllUser></AllUser>
                </AdminRoute>
            },
            {
                path: "/dashboard/add-doctor",
                element: <AdminRoute>
                    <AddDoctor></AddDoctor>
                </AdminRoute>
            },
            {
                path: "/dashboard/manage-doctors",
                element: <AdminRoute>
                    <ManageDoctors></ManageDoctors>
                </AdminRoute>
            }
        ]
    }
])
export default router;