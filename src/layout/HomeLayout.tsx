// import React from 'react';

import {Footer, Header} from "../components";
import HomeComp from "../pages/homepage/HomeComp.tsx";

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <HomeComp />
            <Footer />
        </div>
    );
};

export default HomeLayout;