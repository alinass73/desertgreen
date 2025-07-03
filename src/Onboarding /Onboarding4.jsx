import React from "react";
import NextButton from "../components/common/NextButton";
import Points from "../components/common/Points";
// import imsg from "../../../assets/images/Mask-trees";
export default function Onboarding4() {
  const message= "/onboarding2";
  return (
    <>
      <img src="/images/onboarding4.jpg" className="w-full " alt="" />
      <div className="px-14 pt-13">
        <h1 className=" text-nnight w-[214px] mx-auto text-2xl font-medium text-center">
          Know Your Plants, Inside Out
        </h1>
        <h2 className="text-[14px] font-light text-neblack pt-3 text-center">
          Scan your plants to detect diseases early, get personalized care tips,
          and track progress over time.
        </h2>
      </div>
      
      <Points length={4} active={4} />
      <NextButton ref={"/Loginwelcom"} text={"Get Started"}/>
    </>
  );
}
