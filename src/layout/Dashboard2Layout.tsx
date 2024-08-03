import {DashHeader} from "../components";
// import DashHome from "../pages/dashboard/DashHome.tsx";
import Dash2Menu from "../components/block/Dash2Menu.tsx";
import MtnDash from "../pages/dashboard2/MtnDash.tsx";


const Dashboard2Layout = () => {
    return (
        <>
            <DashHeader />
            {/*<DashHome />*/}
            <MtnDash />
            <Dash2Menu />
        </>
    )
}

export default Dashboard2Layout;