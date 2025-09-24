"use client";
import React from "react";
import PairedButtons from "./PairedButtons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import StandardBtn from "./link-buttons/StandardBtn";
const Hero = () => {
  const heroSlides = [
    {
      title: "Street Born.Barber Raised",
      subtitle: "Street Born. Barber Raised.",
      image: "/images/home/hero/1.jpg",
    },
    {
      title: "Street Born.Barber Raised",
      subtitle: "Street Born. Barber Raised.",
      image: "/images/home/hero/2.jpg",
    },
    {
      title: "Street Born.Barber Raised",
      subtitle: "Street Born. Barber Raised.",
      image: "/images/home/hero/3.jpg",
    },
    {
      title: "Street Born.Barber Raised",
      subtitle: "Street Born. Barber Raised.",
      image: "/images/home/hero/4.jpg",
    },
    {
      title: "Street Born.Barber Raised",
      subtitle: "Street Born. Barber Raised.",
      image: "/images/home/hero/5.jpg",
    },
  ];

  return (
    <section className="fullVh fullSvh relative lg:pt-[19vh] lg:pb-[10.5555555556vh] pt-36 sm:pt-[200px] pb-[60px] sm:pb-[120px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        className="atlwh_Full !absolute z-[2] w-full"
      >
        {heroSlides.map((heroSlide, index) => (
          <SwiperSlide
            key={index}
            className="atlwh_Full !flex items-center !justify-center relative"
          >
            <div className="atlwh_Full">
              <img
                fill
                alt={heroSlide.subtitle}
                src={heroSlide.image}
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            </div>
            <span className="atlwh_Full bg-black/50"></span>

            <div className="relative z-[2] flex flex-col lg:gap-y-vw20 gap-y-4 items-center text-center myContainer">
              <h1 className="lg:text-vw80 lg:leading-vw90 text55 text-white">
                {heroSlide.title}
              </h1>
              <StandardBtn link={"/"} text={"shop now"} greenVersion />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
