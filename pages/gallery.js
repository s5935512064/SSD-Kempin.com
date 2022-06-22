import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import Fancybox2 from "../components/Fancybox";

const image = [
    { id: 1, src: "/assets/gallery/service2.jpg", alt: "gallet" },
    { id: 2, src: "/assets/gallery/service4.jpg", alt: "gallet" },
    { id: 3, src: "/assets/gallery/service6.jpg", alt: "gallet" },
    { id: 4, src: "/assets/gallery/service7.jpg", alt: "gallet" },
    { id: 5, src: "/assets/gallery/service11.jpg", alt: "gallet" },
    { id: 6, src: "/assets/gallery/service15.jpg", alt: "gallet" },
    { id: 7, src: "/assets/gallery/swimming3.jpg", alt: "gallet" },
    { id: 8, src: "/assets/gallery/swimming4.jpg", alt: "gallet" }

]

const gallery = () => {

    const [openTab, setOpenTab] = useState(1);

    useEffect(() => {
        document.body.style.background = "white"
    }, [])

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Carousel: {
                on: {
                    change: (that) => {
                        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                            friction: 0,
                        });
                    },
                },
            },
        });

        const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
            Dots: false,
            friction: 0.96,
            center: true,
            slidesPerPage: 1,
        });

        const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
            Sync: {
                target: mainCarousel,
                friction: 0.96,
            },
            Dots: false,
            Navigation: false,
            center: true,
            slidesPerPage: 1,
            infinite: false,
        });
    })

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery2"]', {
            Carousel: {
                on: {
                    change: (that) => {
                        mainCarousel2.slideTo(mainCarousel2.findPageForSlide(that.page), {
                            friction: 0,
                        });
                    },
                },
            },
        });

        const mainCarousel2 = new Carousel(document.querySelector("#mainCarousel2"), {
            Dots: false,
            friction: 0.96,
            center: true,
            slidesPerPage: 1,
        });

        const thumbCarousel2 = new Carousel(document.querySelector("#thumbCarousel2"), {
            Sync: {
                target: mainCarousel2,
                friction: 0.96,
            },
            Dots: false,
            Navigation: false,
            center: true,
            slidesPerPage: 1,
            infinite: false,
        });
    })

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery3"]', {
            Carousel: {
                on: {
                    change: (that) => {
                        mainCarousel3.slideTo(mainCarousel3.findPageForSlide(that.page), {
                            friction: 0,
                        });
                    },
                },
            },
        });

        const mainCarousel3 = new Carousel(document.querySelector("#mainCarousel3"), {
            Dots: false,
            friction: 0.96,
            center: true,
            slidesPerPage: 1,
        });

        const thumbCarousel3 = new Carousel(document.querySelector("#thumbCarousel3"), {
            Sync: {
                target: mainCarousel3,
                friction: 0.96,
            },
            Dots: false,
            Navigation: false,
            center: true,
            slidesPerPage: 1,
            infinite: false,
        });
    })

    return (
        <Layout>
            <div className="min-h-screen h-full w-full relative overflow-hidden">

                <section id="galleryhero" className="w-full h-[120vh] relative flex justify-center  bg-[url('/assets/gallery/gallery.jpg')] bg-no-repeat bg-cover bg-center">
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
                                src="/assets/gallery/gallerytitle.png"
                                alt="gallerytitle"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>

                    </div>
                </section>

                <section id="gallerycontent" className="w-full h-full relative flex justify-center mt-20 px-5 md:px-10">
                    <div className="max-w-7xl w-full relative h-full">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="flex mb-0 list-none flex-wrap flex-row w-fulljustify-center"
                                    role="tablist"
                                    aria-owns="tab-1 tab-2"
                                >
                                    <li id="tab-1" role="tab" className="-mb-px last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-sm px-5 py-3  block leading-normal " +
                                                (openTab === 1
                                                    ? "text-white bg-[#82603f] border border-[#82603f]"
                                                    : "text-gray-500 border border-[#82603f] ")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                            data-toggle="tab"
                                            href="#link1"

                                        >
                                            INTERIOR
                                        </a>
                                    </li>
                                    <li id="tab-2" role="tab" className="-mb-px  last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-sm px-5 py-3  block leading-normal " +
                                                (openTab === 2
                                                    ? "text-white bg-[#82603f] border border-[#82603f]"
                                                    : "text-gray-500 border border-[#82603f] ")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                            data-toggle="tab"
                                            href="#link2"

                                        >
                                            EXTERIOR
                                        </a>
                                    </li>

                                    <li id="tab-3" role="tab" className="-mb-px last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-sm px-5 py-3  block leading-normal " +
                                                (openTab === 3
                                                    ? "text-white bg-[#82603f] border border-[#82603f]"
                                                    : "text-gray-500 hover:text-[#82603f] border border-[#82603f]")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(3);
                                            }}
                                            data-toggle="tab"
                                            href="#link3"

                                        >
                                            VIDEO
                                        </a>
                                    </li>
                                </ul>


                                <div className="relative flex flex-col min-w-0 break-words w-full mt-2">
                                    <div className="md:py-5 flex-auto overflow-hidden">
                                        <div className="tab-content tab-space  h-full">
                                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                <div id="mainCarousel" className="carousel  w-full h-[750px] ">


                                                    {image.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="carousel__slide w-full h-[750px]  "
                                                            data-src={item.src}
                                                            data-fancybox

                                                        >
                                                            <img src={item.src}
                                                                className="object-cover h-full w-full object-center " />
                                                        </div>
                                                    ))

                                                    }



                                                </div>

                                                <div id="thumbCarousel" className="carousel flex !flex-col">
                                                    {image.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="carousel__slide">
                                                            <img className="panzoom__content object-cover" src={item.src} />
                                                        </div>
                                                    ))

                                                    }

                                                </div>
                                            </div>
                                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                <div id="mainCarousel2" className="carousel  w-full h-[750px] ">


                                                    {image.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="carousel__slide w-full h-[750px]  "
                                                            data-src={item.src}
                                                            data-fancybox="gallery2"

                                                        >
                                                            <img src={item.src}
                                                                className="object-cover h-full w-full object-center " />
                                                        </div>
                                                    ))

                                                    }



                                                </div>

                                                <div id="thumbCarousel2" className="carousel flex !flex-col">
                                                    {image.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="carousel__slide">
                                                            <img className="panzoom__content object-cover" src={item.src} />
                                                        </div>
                                                    ))

                                                    }

                                                </div>
                                            </div>
                                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                                <div id="mainCarousel3" className="carousel  w-full h-[750px] ">


                                                    {image.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="carousel__slide w-full h-[750px]  "
                                                            data-src={item.src}
                                                            data-fancybox="gallery3"

                                                        >
                                                            <img src={item.src}
                                                                className="object-cover h-full w-full object-center " />
                                                        </div>
                                                    ))

                                                    }



                                                </div>

                                                <div id="thumbCarousel3" className="carousel flex !flex-col">
                                                    {image.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="carousel__slide">
                                                            <img className="panzoom__content object-cover" src={item.src} />
                                                        </div>
                                                    ))

                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </section>




            </div>
        </Layout>
    );
}

export default gallery;