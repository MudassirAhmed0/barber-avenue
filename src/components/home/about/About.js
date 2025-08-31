import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";

const About = () => {
  return (
    <section className="relative lg:py-vw180 py-[60px] sm:py-[120px]">
      <span
        style={{
          background:
            "linear-gradient(180deg, #7FFF6B 3.25%, rgba(173, 255, 160, 0.80) 30.18%, rgba(239, 255, 236, 0.50) 66.1%, rgba(241, 255, 238, 0.10) 96.62%)",
        }}
        className="atlwh_Full pointer-events-none"
      ></span>
      <div className="flex flex-wrap items-center justify-center lg:gap-vw60 gap-4 relative z-[2] myContainer">
        <div className="lg:w-[40%] lg:h-[30vw] w-full h-[300px] relative rounded-2xl overflow-hidden">
          <Image
            fill
            alt="about"
            src={
              "https://images.pexels.com/photos/14073866/pexels-photo-14073866.jpeg"
            }
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="lg:w-[40%] w-full flex flex-col items-start lg:gap-y-vw20 gap-y-4">
          <h2 className="text55">About us</h2>

          <p className="text22">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            porro laudantium optio.
          </p>
          <Link
            target="_blank"
            href={"https://www.instagram.com/barberavenuee/"}
            className="flex items-center gap-2 lg:p-vw12 p-2 lg:rounded-vw12 rounded-[12px] border border-black"
          >
            <div className="lg:bg-green rounded-full lg:p-vw12">
              <IoLogoInstagram className="lg:size-vw20 size-5 lg:text-white" />
            </div>
            <span>BARBERAVENUEE</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
