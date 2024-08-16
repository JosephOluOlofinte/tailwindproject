// Header section for dashboard2

import {NavLink} from "react-router-dom";

const Dash2Header = () => {

    return (
        <section className="
        h-[70px] w-full
        bg-gray-800
        flex items-center justify-center
        fixed top-0
        ">
            <div className="
            w-[90%] h-full
            flex items-center
            ">
                <h1 className="text-amber-400"> <NavLink to="/">LOGO</NavLink></h1>
            </div>
        </section>
    )
}

export default Dash2Header;