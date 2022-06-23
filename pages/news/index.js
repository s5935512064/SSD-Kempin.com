import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import React, { useState, useEffect } from "react";



const news = () => {

    const [openTab, setOpenTab] = useState(1);

    useEffect(() => {
        document.body.style.background = "#F5F1EA"
    }, [])

    return (
        <Layout>
            <div className="min-h-screen h-full w-full relative overflow-hidden">

                <section id="newshero" className="w-full h-[120vh] relative flex justify-center  bg-[url('/assets/news/news.jpg')] bg-no-repeat bg-cover bg-center">
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
                                src="/assets/news/newstitle.png"
                                alt="newstitle"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                    </div>
                </section>

                <section id="newscontent" className="min-h-screen h-full w-full flex justify-center px-2 md:px-10">
                    <div className="max-w-7xl w-full h-full py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">

                            <div className="h-80 grid grid-cols-1  relative drop-shadow overflow-hidden">
                                <div className="w-full h-80 relative">
                                    <Image
                                        src="/assets/service/service5.jpg"
                                        alt="logo"
                                        layout="fill"
                                        objectFit="cover"
                                    />

                                </div>
                                <div className="bottom-0 w-full h-fit translate-y-24 hover:translate-y-0 cursor-pointer absolute bg-gradient-to-t hover:h-full from-[#010F2A] text-white duration-500  p-4 flex flex-col justify-start hover:justify-center overflow-hidden">
                                    <p className="text-xl font-bold mb-2">Topic 1</p>
                                    <p className="font-light mb-4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quasi nostrum facere cum corporis facilis, ea molestias qui tempora modi!</p>
                                    <p className="font-light mb-2">12 06 2022</p>
                                    <button className="w-full px-2 py-1 border">Read more..</button>

                                </div>


                            </div>

                            <div className="h-80 grid grid-cols-1  relative drop-shadow overflow-hidden">
                                <div className="w-full h-80 relative">
                                    <Image
                                        src="/assets/news/1.png"
                                        alt="news"
                                        layout="fill"
                                        objectFit="cover"
                                    />

                                </div>
                                <div className="bottom-0 w-full h-fit translate-y-24 hover:translate-y-0 cursor-pointer absolute bg-gradient-to-t hover:h-full from-[#010F2A] text-white duration-500  p-4 flex flex-col justify-start hover:justify-center overflow-hidden">
                                    <p className="text-xl font-bold mb-2">Topic 1</p>
                                    <p className="font-light mb-4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quasi nostrum facere cum corporis facilis, ea molestias qui tempora modi!</p>
                                    <p className="font-light mb-2">12 06 2022</p>
                                    <button className="w-full px-2 py-1 border">Read more..</button>

                                </div>


                            </div>

                            <div className="h-80 grid grid-cols-1  relative drop-shadow overflow-hidden">
                                <div className="w-full h-80 relative">
                                    <Image
                                        src="/assets/news/2.png"
                                        alt="logo"
                                        layout="fill"
                                        objectFit="cover"
                                    />

                                </div>
                                <div className="bottom-0 w-full h-fit translate-y-24 hover:translate-y-0 cursor-pointer absolute bg-gradient-to-t hover:h-full from-[#010F2A] text-white duration-500  p-4 flex flex-col justify-start hover:justify-center overflow-hidden">
                                    <p className="text-xl font-bold mb-2">Topic 1</p>
                                    <p className="font-light mb-4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quasi nostrum facere cum corporis facilis, ea molestias qui tempora modi!</p>
                                    <p className="font-light mb-2">12 06 2022</p>
                                    <button className="w-full px-2 py-1 border">Read more..</button>

                                </div>


                            </div>

                            <div className="h-80 grid grid-cols-1  relative drop-shadow overflow-hidden">
                                <div className="w-full h-80 relative">
                                    <Image
                                        src="/assets/news/1.png"
                                        alt="logo"
                                        layout="fill"
                                        objectFit="cover"
                                    />

                                </div>
                                <div className="bottom-0 w-full h-fit translate-y-24 hover:translate-y-0 cursor-pointer absolute bg-gradient-to-t hover:h-full from-[#010F2A] text-white duration-500  p-4 flex flex-col justify-start hover:justify-center overflow-hidden">
                                    <p className="text-xl font-bold mb-2">Topic 1</p>
                                    <p className="font-light mb-4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quasi nostrum facere cum corporis facilis, ea molestias qui tempora modi!</p>
                                    <p className="font-light mb-2">12 06 2022</p>
                                    <button className="w-full px-2 py-1 border">Read more..</button>

                                </div>


                            </div>


                        </div>

                    </div>

                </section>



            </div>
        </Layout>
    );
}

export default news;