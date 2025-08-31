import ImageComponent from "@/components/common/ImageComponent";
import Layout from "@/components/layout/Index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  const arabic = "";
  return (
    <Layout from404 blackHeader>
      <div className="relative w-full fullVh fullSvh pt-[47vw] flex justify-center items-end pb-[25vh] lg:py-[25vh] bg-[#F7F3E9]">
        <img
          src="/images/404/pattern.png"
          alt="pattern"
          className="flipped atwh_Full lrf1"
        />
        <div className="relative z-[3] myContainer lg:w-[30.5208333333vw] flex flex-col items-center">
          <div className="flex flex-col lg:gap-y-[1.85185185185vh] gap-y-[16px] items-center text-center">
            <div className="relative lg:w-[36.8518518519vh] sm:w-[64%] w-[70%] lg:h-[12.5925925926vh] sm:h-[13.29vw] h-[21.8604651163vw]">
              <ImageComponent src={"/images/404/404.png"} alt={"404"} />
            </div>

            <h1 className="text50 normal-case !tracking-[unset] lg:leading-[3.125vw] text-[#6B634B]">
              Oops! Page not found
            </h1>
            <span className="lg:text25 lg:leading-[2.08333333333vw] mtext18 text-[#343631]">
              Sorry! We couldn’t find the page you were looking for.
            </span>
          </div>
          <div className="lg:mt-[5.55555555556vh] sm:mt-[40px] mt-[32px]">
            <Link href={"/"}> Go Back to Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
