import React from "react";
import Hero from "../common/Hero";
import About from "./about/About";
import Products from "./products/Products";
import Testimonials from "./testimonials/Testimonials";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <div className="w-full fullVhcm fullSvhcm relative">
        <span className="atlwh_Full bg-darkgreen/70 z-[1]"></span>
        <Image
          fill
          alt="banner"
          src={"/images/home/banner.jpg"}
          className="object-cover"
        ></Image>
      </div>
      <Testimonials />
    </>
  );
};

export default Index;
