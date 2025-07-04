import React from "react";
import NextButton from "../components/common/NextButton";
import Points from "../components/common/Points";
// import imsg from "../../../assets/images/Mask-trees";
export default function Onboarding2() {
  return (
    <>
      <img src="/images/onboarding2.jpg" className="w-full " alt="" />
      <div className="px-14 pt-13">
        <h1 className=" text-nnight w-[214px] mx-auto text-2xl font-medium text-center ">
          Smarter Gardens Start Here
        </h1>
        <h2 className="text-[14px] font-light text-neblack pt-3 text-center">
          Design and visualize your perfect garden with AI. Plan layouts, pick
          the right plants, and preview your dream space — all before planting a
          single seed.
        </h2>
      </div>
      <Points length={4} active={2} />
      <NextButton ref={"/onboarding3"} />
    </>
  );
}
