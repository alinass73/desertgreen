import React from "react";
import NextButton from "../components/common/NextButton";
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
      <div className="pt-10.5 flex space-x-3 pb-17">
        <div className="w-3 h-3 rounded-4xl bg-nlgrey"></div>
        <div className="w-3 h-3 rounded-4xl bg-nlgrey"></div>
        <div className="w-3 h-3 rounded-4xl bg-nlgrey"></div>
        <div className="w-3 h-3 rounded-4xl bg-ngreen"></div>
      </div>
      <NextButton ref={"/login"} text={"Get Started"}/>
    </>
  );
}
