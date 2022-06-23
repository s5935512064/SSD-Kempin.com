import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

export default function Home() {
  var settings = {
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  useEffect(() => {
    document.body.style.background = "#f5f1ea";
  }, [])

  return (
    <Layout>
      <div className="min-h-screen h-full w-full relative overflow-hidden ">

        <section id="hero" className="w-full h-[120vh] relative flex justify-center">
          <div className="absolute w-full h-screen bg-gradient-to-b from-[#010F2A]/50 z-10" />
          <div className="absolute h-screen w-full max-w-7xl  flex flex-col items-center justify-center z-10 px-5 md:px-10">
            <div className="w-32 h-32 sm:w-44 sm:h-44 relative">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="max-w-[620px] w-full max-h-[137px] h-full relative my-5">
              <Image
                src="/assets/home/classy.png"
                alt="classy"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <p className="text-white text-lg md:text-xl font-kingsCaslon ">
              is luxury but humble
            </p>

            <p className="font-kingsCaslon text-center text-white text-xl md:text-3xl  p-5 w-full max-w-3xl mt-10">
              The Residences at Sindhorn Kempinski Hotel Bangkok <br />
              <span className="text-base md:text-xl ">
                Creates a new benchmark for unique cosmopolitan living in the heart of Bangkok.harmonizes environmental-friendliness, peacefulness and verdant green surroundings with exceptional amenities.
              </span>
            </p>

          </div>

          <Slider {...settings} className="!absolute !w-full !h-full !z-0 ">
            <div className="w-full h-[120vh] relative">

              <Image
                src="/assets/home/homehero1.jpg"
                alt="homehero1"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="w-full h-[120vh] relative">

              <Image
                src="/assets/home/homehero2.jpg"
                alt="homehero2"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="w-full h-[120vh] relative">

              <Image
                src="/assets/home/homehero3.jpg"
                alt="homehero3"
                layout="fill"
                objectFit="cover"
              />
            </div>

          </Slider>

        </section>

        <section id="content" className="h-full w-full relative pt-20 flex flex-col items-center">

          <div className="max-w-7xl w-full min-h-[666px] h-full px-5 md:px-10 bg-[url('/assets/background.jpg')] bg-top bg-no-repeat bg-cover mb-4 grid grid-cols-1 md:grid-cols-2">
            <div className="md:pr-16 flex flex-col justify-center items-center text-white py-5">
              <p className="md:w-full text-4xl font-bold mb-5 md:mb-10 text-center md:text-left">Residence</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure molestias repellendus odit error voluptatum veniam aliquam nemo autem atque. Earum ratione nesciunt aliquid sed laboriosam similique vel consectetur repellat.</p>
              <div className="w-full mt-5 md:mt-10 ">

                <button className="uppercase">discover more</button>
              </div>
            </div>
            <div className="h-full flex justify-center items-center py-5">

              <div className="w-full h-[350px] md:h-[440px] bg-white">

              </div>
            </div>

          </div>

          <div className="max-w-7xl w-full min-h-[666px] h-full px-5 md:px-10 bg-[url('/assets/gallery/gallery.jpg')] bg-top bg-no-repeat bg-cover mb-4 grid grid-cols-1 md:grid-cols-2 relative ">
            <div className="absolute w-full h-full bg-gradient-to-b from-[#010F2A]/50 " />
            <div className="md:pr-16 flex flex-col justify-center items-center text-white py-5 z-10">
              <p className="md:w-full text-4xl font-bold mb-5 md:mb-10 text-center md:text-left">Gallery</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure molestias repellendus odit error voluptatum veniam aliquam nemo autem atque. Earum ratione nesciunt aliquid sed laboriosam similique vel consectetur repellat.</p>
              <div className="w-full mt-5 md:mt-10 ">

                <button className="uppercase">discover more</button>
              </div>
            </div>
            <div className="h-full flex justify-center items-center py-5 z-10">

              <div className="w-full h-[350px] md:h-[440px] bg-white">

              </div>
            </div>

          </div>
          <div className="max-w-7xl w-full min-h-[666px] h-full px-5 md:px-10  bg-[url('/assets/service/service1.jpg')] bg-center bg-no-repeat bg-cover mb-4 grid grid-cols-1 md:grid-cols-2 relative">
            <div className="absolute w-full h-full bg-gradient-to-b from-[#010F2A]/50 " />
            <div className="md:pr-16 flex flex-col justify-center items-center text-white py-5 z-10">
              <p className="md:w-full text-4xl font-bold mb-5 md:mb-10 text-center md:text-left">Service</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure molestias repellendus odit error voluptatum veniam aliquam nemo autem atque. Earum ratione nesciunt aliquid sed laboriosam similique vel consectetur repellat.</p>
              <div className="w-full mt-5 md:mt-10 ">

                <button className="uppercase">discover more</button>
              </div>
            </div>
            <div className="h-full flex justify-center items-center py-5 z-10">

              <div className="w-full h-[350px] md:h-[440px] bg-white">

              </div>
            </div>

          </div>


        </section>


      </div>
    </Layout>
  )
}
