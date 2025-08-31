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
      title: "Master The Fade",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2070&auto=format&fit=crop", // urban street
    },
    {
      title: "Master The Fade2",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop", // building / community block
    },
    {
      title: "Master The Fade3",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.unsplash.com/photo-1505731132164-cca5eeb1d8a2?q=80&w=2070&auto=format&fit=crop", // street art / graffiti wall
    },
    {
      title: "Master The Fade4",
      subtitle: "Street Born. Blade Razed.",
      image:
        "https://images.unsplash.com/photo-1600132806370-bd93cfca9a9c?q=80&w=2070&auto=format&fit=crop", // street sign focus
    },
    {
      title: "Master The Fade5",
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
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
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
              <Image
                fill
                alt={heroSlide.subtitle}
                src={heroSlide.image}
                unoptimized
                className="object-cover"
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
