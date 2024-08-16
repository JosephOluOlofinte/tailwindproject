import {NavLink} from "react-router-dom";


const Dash2Menu = () => {
    return (
        <section className="
        {/* MENU AREA*/}
        h-[70px] w-full
        flex justify-center items-center
        bg-gray-800
        fixed bottom-0
        ">
            <div className="
            {/*MENU AREA CONTAINER*/}
            h-full w-[90%]
            flex justify-between items-center
            ">
                <div className="font-witt text-amber-400"><NavLink to="/dashboard2">Home </NavLink></div>
                <div className="font-witt text-amber-400"><NavLink to="/dashboard2/play">Play</NavLink></div>
                <div className="font-witt text-amber-400"><NavLink to="/dashboard2/help">Help</NavLink></div>
                <div className="font-witt text-amber-400"><NavLink to="/dashboard2/more">More</NavLink></div>
            </div>
        </section>
    )
}

export default Dash2Menu;