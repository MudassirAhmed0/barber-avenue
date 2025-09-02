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
      title: "Street Born.Blade Razed",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg", // urban street
    },
    {
      title: "Street Born.Blade Razed",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop", // building / community block
    },
    {
      title: "Street Born.Blade Razed",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg", // street art / graffiti wall
    },
    {
      title: "Street Born.Blade Razed",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg", // street sign focus
    },
    {
      title: "Street Born.Blade Razed",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=2070&auto=format&fit=crop", // avenue / community vibe
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
        pagination={{ clickable: true }}
        className="atlwh_Full !absolute z-[2] w-full"
      >
        {heroSlides.map((heroSlide, index) => (
          <SwiperSlide
            key={index}
            className="atlwh_Full !flex items-center !justify-center relative"
          >
            <span className="hero_gradient atlwh_Full pointer-events-none z-[1]"></span>

            <div className="atlwh_Full">
              <img
                fill
                alt={heroSlide.subtitle}
                src={heroSlide.image}
                
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            </div>
            <div className="relative z-[2] flex flex-col lg:gap-y-vw20 gap-y-4 items-center myContainer">
              <h1 className="lg:text-vw80 lg:leading-vw90 text55">
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
