import React from "react";
import PairedButtons from "./PairedButtons";

const Content = ({
  wrapperWidth,
  descWidth,
  tag,
  heading,
  desc,
  standardBtn,
  chevronBtn,
}) => {
  return (
    <div
      className={`${
        wrapperWidth ? wrapperWidth : "lg:w-[69.02777777777778vw]"
      } w-[90.699%] mx-auto flex flex-col items-center text-center lg:gap-y-vw20 gap-y-4`}
    >
      {tag && (
        <div
          data-aos="fade"
          className="capitalize bg-white border border-[rgba(34,34,34,0.10)] lg:rounded-vw10 rounded-[10px] lg:px-vw13 lg:py-vw3 px-3 py-1"
        >
          <span className="text-black font-medium lg:text13 mtext12 ls032 inter">
            {tag}
          </span>
        </div>
      )}
      <h2 data-aos="fade-up" className="text54">
        {heading}
      </h2>
      {desc && (
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          dangerouslySetInnerHTML={{ __html: desc }}
          className={`text22 ${
            descWidth ? descWidth : "lg:w-[50.13888888888889vw]"
          }`}
        ></div>
      )}
      {standardBtn && chevronBtn && (
        <PairedButtons standardBtn={standardBtn} chevronBtn={chevronBtn} />
      )}
    </div>
  );
};

export default Content;
