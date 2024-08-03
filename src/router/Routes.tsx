import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout.tsx";
import HomeComp from "../pages/homepage/HomeComp.tsx";
import RegisterLayout from "../layout/authLayout/RegisterLayout.tsx";
import Register from "../pages/authPages/Register.tsx";
import SigninLayout from "../layout/authLayout/SigninLayout.tsx";
import Login from "../pages/authPages/Login.tsx";
import DashboardLayout from "../layout/DashboardLayout.tsx";
import DashHome from "../pages/dashboard/DashHome.tsx";
import Transactions from "../pages/dashboard/Transactions.tsx";
import FundWallet from "../pages/dashboard/FundWallet.tsx";
import Settings from "../pages/dashboard/Settings.tsx";

export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <HomeComp/>
            }
        ]
    },
    {
        path: "/register",
        element: <RegisterLayout/>,
        children: [
            {
                index: true,
                element: <Register/>
            }
        ]
    },
    {
        path: "/signin",
        element: <SigninLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <DashHome/>
            },
            {
                path:"/dashboard/transactions",
                element: <Transactions />
            },
            {
                path:"/dashboard/fundwallet",
                element: <FundWallet />
            },
            {
                path:"/dashboard/settings",
                element: <Settings />
            },
        ]
    },
])