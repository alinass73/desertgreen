import React from "react";
import NextButton from "../components/common/NextButton";

export default function Onboarding() {
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
      <div className="pt-21 flex space-x-3 pb-17">
        <div className="w-3 h-3 rounded-4xl bg-ngreen"></div>
        <div className="w-3 h-3 rounded-4xl bg-nlgrey"></div>
        <div className="w-3 h-3 rounded-4xl bg-nlgrey"></div>
        <div className="w-3 h-3 rounded-4xl bg-nlgrey"></div>
      </div>
      <NextButton ref={"/onboarding2"} />
    </>
  );
}
