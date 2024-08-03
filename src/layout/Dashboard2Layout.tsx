// import {DashHeader} from "../components";
// import DashHome from "../pages/dashboard/DashHome.tsx";
import Dash2Menu from "../components/block/Dash2Menu.tsx";
// import MtnDash from "../pages/dashboard2/MtnDash.tsx";
import {Outlet} from "react-router-dom";
import Dash2Header from "../components/block/Dash2Header.tsx";


const Dashboard2Layout = () => {
    return (
        <>
            <Dash2Header />
            {/*<DashHome />*/}
            <Outlet />
            <Dash2Menu />
        </>
    )
}

export default Dashboard2Layout;