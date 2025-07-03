import React from "react";
import NextButton from "../components/common/NextButton";
import Points from "../components/common/Points";

export default function Onboarding1() {
  return (
    <>
      <img src="/images/Mask-trees.jpg" className="w-full " alt="" />
      <div className="px-14 pt-13">
        <h1 className=" text-nnight text-2xl text-center font-medium">
          Welcome to the Future of Landscaping
        </h1>
        <h2 className="text-[14px] font-light text-neblack pt-3 px-5.5 text-center">
          Smart, sustainable, and personalized garden care powered by AI
        </h2>
      </div>
     <Points length={4} active={1} />
      <NextButton ref={"/onboarding2"} />
    </>
  );
}
