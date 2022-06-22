import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import React, { useState, useEffect } from "react";



const news = () => {

    const [openTab, setOpenTab] = useState(1);

    useEffect(() => {
        document.body.style.background = "white"
    }, [])

    return (
        <Layout>
            <div className="min-h-screen h-full w-full relative overflow-hidden">

                <section id="galleryhero" className="w-full h-[120vh] relative flex justify-center  bg-[url('/assets/news/news.jpg')] bg-no-repeat bg-cover bg-center">
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



            </div>
        </Layout>
    );
}

export default news;