import React from "react";
import Hero from "../common/Hero";
import FormSection from "../common/form-section/FormSection";

const JoinWaitingListPage = () => {
  return (
    <>
      <Hero />
      <FormSection
        content={{
          tag: "Join the Waiting List",
          heading: "Hold Tight, GreenDash is Coming Soon",
          desc: `We’re preparing for a launch that will make a real impact. <br/> By joining the waiting list, you’ll secure your spot, receive early updates, and be the first to experience our platform`,
          wrapperWidth: "lg:w-[70.625vw]",
          descWidth: "lg:w-[51.3888888889vw]",
        }}
      />
    </>
  );
};

export default JoinWaitingListPage;
