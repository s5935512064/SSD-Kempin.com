import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";


const enquiry = () => {

    const [openTab, setOpenTab] = useState(1);

    useEffect(() => {
        document.body.style.backgroundImage = "url('/assets/background.jpg')";
    }, [])
    return (
        <Layout>
            <div className="min-h-screen h-full w-full relative overflow-y-visible">

                <section id="enquiryhero" className="w-full h-[120vh] relative flex justify-center  bg-[url('/assets/enquiry/register.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="absolute w-full h-screen bg-gradient-to-b from-[#010F2A]/50 " />

                    <div className="absolute h-screen w-full max-w-7xl  flex flex-col  items-center  px-5 md:px-10">

                        <div className="mt-20 flex w-full top-0 relative ">
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
                                src="/assets/enquiry/title.png"
                                alt="title"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                    </div>
                </section>

                <section id="register" className=" h-full w-full  relative">

                    <div className="w-full h-[122vh]  absolute">
                        <div className="w-1/3 h-full bg-[url('/assets/Artwork8.png')] bg-right bg-cover bg-no-repeat absolute opacity-80 translate-y-16 " />
                    </div>

                    <div className="w-full h-full  relative  flex flex-col  items-center ">
                        <div className="px-4 md:px-10 max-w-7xl w-full min-h-screen h-full flex flex-col justify-center items-center  text-[#B5A191] gap-2 ">

                            <p className="text-2xl text-center md:text-3xl font-bold">
                                ENQUIRY / FOR BROCHURE
                            </p>
                            <p className="text-center text-sm md:text-base">
                                Please enter your registration details in the corresponding fields.
                                Click submit button to download the brochure.
                            </p>

                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-center text-sm md:text-base"> I dont have a permanent address in Thailand.</label>
                            </div>

                            <form action="" className="w-full max-w-lg">
                                <div className='px-8 pt-6 grid grid-cols-1  gap-2'>
                                    <div className="mb-2">
                                        {/* <label className="block text-[#B6A694] text-sm font-bold mb-2" htmlFor="name">
                        First Name
                    </label> */}
                                        <input className="shadow appearance-none border border-[#F5F1EA] w-full py-2 px-3 text-[#B6A694]  placeholder:text-[#B6A694] leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="name" type="text" placeholder="First Name" required />
                                    </div>
                                    <div className="mb-2">
                                        {/* <label className="block text-[#B6A694] text-sm font-bold mb-2" htmlFor="Lname">
                        Last Name
                    </label> */}
                                        <input className="shadow appearance-none border border-[#F5F1EA] w-full py-2 px-3 text-[#B6A694]  placeholder:text-[#B6A694] leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="Lname" type="text" placeholder="Last Name" required />
                                    </div>

                                    <div className="mb-2">
                                        {/* <label className="block text-[#B6A694] text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label> */}
                                        <input className="shadow appearance-none border border-[#F5F1EA] w-full py-2 px-3 text-[#B6A694]  placeholder:text-[#B6A694] leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="email" type="email" placeholder="Email" required />
                                    </div>
                                    <div className="mb-2">
                                        {/* <label className="block text-[#B6A694] text-sm font-bold mb-2" htmlFor="phone">
                        Phone Number
                    </label> */}
                                        <input className="shadow appearance-none border border-[#F5F1EA] w-full py-2 px-3 text-[#B6A694]  placeholder:text-[#B6A694] leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="phone" type="tel" placeholder="Phone number" />
                                    </div>
                                    <div className="mb-2">
                                        {/* <label className="block text-[#B6A694] text-sm font-bold mb-2" htmlFor="typeUnit">
                        Unit Type
                    </label> */}
                                        <div className="relative">
                                            <select className="shadow appearance-none border border-[#F5F1EA] w-full py-2 px-3 text-[#B6A694]  placeholder:text-[#B6A694] leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="typeUnit"
                                                defaultValue="">
                                                <option value="" disabled > Unit Type </option>
                                                <option value="1 Bedroom" className="text-black" >1 Bedroom</option>
                                                <option value="2 Bedroom" className="text-black">2 Bedroom</option>
                                                <option value="3 Bedroom" className="text-black">3 Bedroom</option>
                                                <option value="Penthouse" className="text-black">Penthouse</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#B6A694]">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        {/* <label className="block text-[#B6A694] text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label> */}
                                        <div className="relative">
                                            <select className="shadow appearance-none border border-[#F5F1EA] w-full py-2 px-3 text-[#B6A694]  placeholder:text-[#B6A694] leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="price"
                                                defaultValue="">
                                                <option value="" disabled > Price </option>
                                                <option value="less than 20 Million Baht" className="text-black">Less than 20 Million Baht</option>
                                                <option value="21-30 Million Baht" className="text-black">21-30 Million Baht</option>
                                                <option value="31-40 Million Baht" className="text-black">31-40 Million Baht</option>
                                                <option value="41-50 Million Baht" className="text-black">41-50 Million Baht</option>
                                                <option value="more than 50 Million Baht" className="text-black">More than 50 Million Baht</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#B6A694]">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        {/* <label className="block text-[#B6A694] text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label> */}
                                        <textarea className="shadow appearance-none border border-[#F5F1EA] w-full py-2 px-3 text-[#B6A694]  placeholder:text-[#B6A694] leading-tight focus:outline-none focus:shadow-outline bg-transparent h-28" id="message" type="text" placeholder="Tell us what you're thinking about..." />
                                    </div>

                                </div>

                            </form>

                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-center text-sm md:text-base">Sindhorn Village Members Card click here for special privilege</label>
                            </div>



                            <div>
                                <button className="text-white w-fit px-4 py-2 bg-[#97233F]">SUBMIT</button>
                            </div>
                        </div>

                    </div>

                </section>




            </div>
        </Layout>
    );
}

export default enquiry;