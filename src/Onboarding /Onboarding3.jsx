import React from "react";
import NextButton from "../components/common/NextButton";
import Points from "../components/common/Points";
// import imsg from "../../../assets/images/Mask-trees";
export default function Onboarding3() {
  return (
    <>
      <img src="/images/onboarding3.jpg" className="w-full " alt="" />
      <div className="px-14 pt-13">
        <h1 className=" text-nnight w-[214px] mx-auto text-2xl font-medium text-center">
          Save Water, Grow Better
        </h1>
        <h2 className="text-[14px] font-light text-neblack pt-3 text-center">
          Connect smart sensors and let AI optimize your watering schedule —
          saving up to 30% water while keeping plants healthy.
        </h2>
      </div>
      <Points length={4} active={3} />
      <NextButton ref={"/onboarding4"} />
    </>
  );
}
