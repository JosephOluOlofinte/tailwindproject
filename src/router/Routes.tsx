import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout.tsx";
import HomeComp from "../pages/homepage/HomeComp.tsx";

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
    }
])