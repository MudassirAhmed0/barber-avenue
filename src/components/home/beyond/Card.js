import React from "react";
import Image from "next/image";
import ChevronBtn from "@/components/common/link-buttons/ChevronBtn";

const Card = ({ logo, desc }) => {
  return (
    <div
      data-aos="fade"
      style={{ boxShadow: "0 2px 10px 0 rgba(36, 38, 43, 0.50)" }}
      className="lg:w-[35.4166666667vw] sm:w-[48%] w-full lg:rounded-vw20 rounded-[20px] bg-white flex flex-col items-center text-center lg:gap-y-vw26 gap-y-4 lg:p-vw40 px-5 py-6"
    >
      <div className="relative lg:w-[17.3611111111vw] lg:h-vw83 w-[185px] h-[61px]">
        <Image fill alt="logo" src={logo} />
      </div>
      <p className="text16 font-inter ls016 mb-auto">{desc}</p>
      <ChevronBtn text={"Learn more"} link={"/"} />
    </div>
  );
};

export default Card;
