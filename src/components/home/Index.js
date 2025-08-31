import React from "react";
import Hero from "../common/Hero";
import About from "./about/About";
import Products from "./products/Products";
import Testimonials from "./testimonials/Testimonials";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Testimonials />
    </>
  );
};

export default Index;
