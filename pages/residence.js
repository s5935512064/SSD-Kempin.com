import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scroller } from 'react-scroll'


const residence = () => {

    const [color, setColor] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
    const [color4, setColor4] = useState("");

    const [floor, setFloor] = useState(0);

    useEffect(() => {
        if (floor == 1) {
            setColor("#B5A191")
        }
        else {
            setColor("transparent")
        }

        if (floor == 2) {
            setColor2("#B5A191")
        }
        else {
            setColor2("transparent")
        }

        if (floor == 3) {
            setColor3("#B5A191")
        }
        else {
            setColor3("transparent")
        }

        if (floor == 4) {
            setColor4("#B5A191")
        }
        else {
            setColor4("transparent")
        }

    }, [floor])


    useEffect(() => {
        document.body.style.backgroundImage = "url('/assets/background.jpg')";
    }, [])

    return (
        <Layout>


            <div className="h-full w-full relative overflow-hidden">

                <section id="residencehero" className="w-full h-[80vh] relative flex justify-center  ">
                    <div className="w-full h-[150vh]  absolute">
                        <div className="w-1/3 h-full bg-[url('/assets/Artwork8-r.png')] bg-left bg-cover bg-no-repeat absolute  translate-y-16 right-0  " />
                    </div>
                    <div className="absolute w-full h-screen bg-gradient-to-b from-[#010F2A]/10 " />

                    <div className="absolute h-screen w-full max-w-7xl  flex flex-col  items-center pt-28  px-5 md:px-10">

                        <div className="mt-20 flex  top-0 relative ">
                            <div className="w-36 h-36 relative">
                                <Image
                                    src="/assets/logo.svg"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>

                        <div className="max-w-[750px] w-full max-h-[200px] h-full relative my-5">
                            <Image
                                src="/assets/residence/titleresidence.png"
                                alt="titleresidence"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                    </div>



                </section>

                <section className="w-full h-[500px] flex justify-center relative ">

                    <div className="max-w-7xl w-full h-full grid grid-cols-2 gap-2">
                        <div className="h-96 bg-white">

                        </div>
                        <div className="h-96 bg-white">

                        </div>

                    </div>

                </section>

            </div>

            <section id="residenceContent" className="h-full w-full sticky top-0 flex justify-center !z-50 ">

                <div className="max-w-7xl h-[750px] w-full  flex justify-end ">
                    <div className="h-full w-2/3 items-center text-white flex flex-col justify-center">
                        <Link
                            activeClass="active"
                            to="edit-polygon-B1162"
                            spy={true}
                            offset={-300}
                            smooth={true}
                            duration={1000}
                        >
                            <button onClick={e => {
                                e.preventDefault();
                                setFloor(1);
                            }} className="bg-black  !z-50">FLOOR1</button>
                        </Link>

                        <Link
                            activeClass="active"
                            to="edit-polygon-B1163"
                            spy={true}
                            offset={-300}
                            smooth={true}
                            duration={1000}
                        >
                            <button onClick={e => {
                                e.preventDefault();
                                setFloor(2);
                            }} className="bg-black  !z-50">FLOOR2</button>
                        </Link>
                        <Link
                            activeClass="active"
                            to="edit-polygon-B1164"
                            spy={true}
                            offset={-300}
                            smooth={true}
                            duration={1000}
                        >
                            <button onClick={e => {
                                e.preventDefault();
                                setFloor(3);
                            }} className="bg-black  !z-50">FLOOR3</button>
                        </Link>

                        <Link
                            activeClass="active"
                            to="edit-polygon-B1165"
                            spy={true}
                            offset={-300}
                            smooth={true}
                            duration={1000}
                        >
                            <button onClick={e => {
                                e.preventDefault();
                                setFloor(4);
                            }} className="bg-black  !z-50">FLOOR4</button>
                        </Link>

                    </div>

                </div>

            </section>

            <section id="residenceContent2" className="-mt-[750px] h-[1500px] w-full relative flex justify-center overflow-hidden  ">

                <div className="absolute scale-105 md:scale-150 xl:scale-[2] translate-y-96 translate-x-10 md:-translate-x-10 xl-translate-x-60">

                    <svg id="mysvg" version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1500" height="750"
                        style={{ backgroundImage: "url(http://192.168.3.99/rms-app/public/images/floorplan/F0099-floorplan-1655814479.png)", backgroundPosition: "center center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                        className="relative"

                    >
                        <defs>
                            <circle id="point-handle" r="3" x="0" y="0" strokeWidth="0" fill-opacity="1" stroke="#FF0000"></circle>
                        </defs>



                        <polygon id="edit-polygon-B1162" stroke="1" strokeWidth="0" className="element_select" data-id="B1162" data-boothtitle="Test-SDK-[Level 3rd - 12th]" strokeLinejoin="round" fill={color} fillOpacity="0.7" points="554,462 752,463 753,631 554,631"></polygon>




                        <polygon id="edit-polygon-B1163" stroke="1" strokeWidth="0" className="element_select" data-id="B1163" data-boothtitle="Test-SDK-[Level 14th - 26th]" strokeLinejoin="round" fill={color2} fillOpacity="0.7" points="553,245 751,244 752,463 554,462"></polygon>


                        <polygon id="edit-polygon-B1164" stroke="1" strokeWidth="0" className="element_select" data-id="B1164" data-boothtitle="Test-SDK-[Level 27th - 29th]" strokeLinejoin="round" fill={color3} fillOpacity="0.7" points="553,209 648,209 648,186 752,187 752,244 553,245"></polygon>


                        <polygon id="edit-polygon-B1165" stroke="1" strokeWidth="0" className="element_select" data-id="B1165" data-boothtitle="Test-SDK-[Level 31th - 33th]" strokeLinejoin="round" fill={color4} fillOpacity="0.7" points="619,101 750,101 751,159 618,159"></polygon>

                        <polygon id="edit-polygon-B1166" stroke="1" strokeWidth="0" className="element_select" data-id="B1166" data-boothtitle="Test-SDK-[Level 34th]" strokeLinejoin="round" fill={color} fillOpacity="0.7" points="619,78 750,78 750,101 618,101"></polygon>

                    </svg>
                </div>
                {/* <div className=" h-[500px] scale-[2]  xl:-translate-x-80 translate-y-[500px] ">
                </div> */}



            </section>



        </Layout>
    );
}

export default residence;