// import React from 'react';
// import tailwindLogo from '../../assets/images/tailwindcsslogo-removebg-preview.png';

const Hero = () => {
    return (
        <section className="
        {/*hero section + homepage header*/}
        h-[calc(100vh-70px)]
        flex justify-center items-center
        ">
            <div className="
            w-[90%]
            flex gap-5 justify-center 
            items-center flex-wrap
            h-full
            ">
                <div className="
                h-[250px] w-[500px]
               bg-getdpBg bg-cover bg-center
               relative 
                ">
                    <div className="
                    // overlay
                    absolute top-0 left-0 right-0 bottom-0
                    w-full h-full bg-[rgba(0,0,0,0.4)]
                    p-2 flex flex-col text-white 
                    ">
                        <div className="
                        text-center
                        ">
                            <h3 className="
                            text-orange-500 font-poppins 
                            font-extrabold tracking-wide
                            ">Pro-Life Conference</h3>
                        </div>

                        <div className="
                        flex h-[90%]
                        ">
                            <div className="
                            flex flex-col gap-2
                            justify-center w-[65%]
                            ">
                                <div className="
                                h-[50%]
                                flex justify-center items-end
                                pb-6
                                ">
                                    <h3 className="text-2xl text-center">
                                        I will be attending...
                                    </h3>
                                </div>
                                <div className="
                                text-xs pb-2
                                flex flex-col gap-[6px]
                                justify-center
                                ">
                                    <p>
                                        <span className="
                                        font-bold text-sm p-1
                                        text-orange-500
                                        ">
                                            Date:
                                        </span>
                                         Saturday, 17th Aug, 2024</p>
                                    <p>
                                    <span className="
                                        font-bold text-sm p-1
                                        text-orange-500
                                        ">
                                            Time: 
                                            </span>
                                            01:00pm</p>
                                    <p>
                                    <span className="
                                        font-bold text-sm p-1
                                        text-orange-500
                                        ">
                                            Venue:
                                            </span>
                                             AB Civic Centre, Adebayo Ado-ekiti</p>
                                </div>
                            </div>

                            <div className="
                            w-[35%] 
                            flex flex-col justify-center gap-3
                            items-center
                            ">
                                <div className="
                                h-[120px] w-[120px]
                                border-[3px] border-orange-500
                                rounded-full flex justify-center
                                items-center
                                bg-[rgb(255,255,255,0.2)]
                                ">
                                    <input type="file" className="w-[90%]"/> </div>
                                <input type="text" placeholder="Your name" 
                                className="w-[90%] text-sm p-2 text-orange-500"
                                />
                            </div>    
                        </div>
                    </div>
                </div>

                <div className="
                h-[250px] w-[500px]
               bg-getdpBg bg-cover bg-center
               relative 
                ">
                    <div className="
                    // overlay
                    absolute top-0 left-0 right-0 bottom-0
                    w-full h-full bg-[rgba(0,0,0,0.4)]
                    p-2 flex flex-col text-white 
                    ">
                        <div className="
                        text-center
                        ">
                            <h3 className="
                            text-orange-500 font-poppins 
                            font-extrabold tracking-wide
                            ">Pro Life Conference</h3>
                        </div>

                        <div className="
                        flex h-[90%]
                        ">
                            <div className="
                            flex flex-col gap-2
                            justify-center w-[320px]
                            ">
                                <div className="
                                h-[50%]
                                flex justify-center items-end
                                pb-6
                                ">
                                    <h3 className="text-2xl text-center">
                                        I will be attending...
                                    </h3>
                                </div>
                                <div className="
                                text-xs pb-2
                                flex flex-col gap-[6px]
                                justify-center
                                ">
                                    <p>
                                        <span className="
                                        font-bold p-1
                                        text-orange-500
                                        ">
                                            Date:
                                        </span>
                                         Saturday, 17th Aug, 2024</p>
                                    <p>
                                    <span className="
                                        font-bold p-1
                                        text-orange-500
                                        ">
                                            Time: 
                                            </span>
                                            01:00pm</p>
                                    <p>
                                    <span className="
                                        font-bold p-1
                                        text-orange-500
                                        ">
                                            Venue:
                                            </span>
                                             AB Civic Centre, Adebayo Ado-ekiti</p>
                                </div>
                            </div>

                            <div className="
                            w-[180px] 
                            flex flex-col justify-center gap-3
                            items-center
                            ">
                                <div className="
                                h-[120px] w-[120px]
                                border-[3px] border-orange-500
                                rounded-full flex justify-center
                                items-center
                                bg-[rgb(255,255,255,0.2)]
                                ">
                                    </div>
                                <p className="w-[90%] text-sm font-bold p-2
                                text-center text-orange-500"> Joseph Olofinte </p>
                            </div>    
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;