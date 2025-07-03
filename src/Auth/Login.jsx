import React from "react";
import { Input } from "@/components/ui/input";
import NextButton from "../components/common/NextButton";
export default function Login() {
  return (
    <>
      <div className="flex w-full px-8 items-center pb-10">
        <img src="/images/back.svg" className="" alt="" />
        <p className="text-xs mx-auto">Log In</p>
      </div>
      <div className="px-11">
        <label className="text-left" htmlFor="email">Email Address</label>
        <input type="email" className="w-[316px] border-4 rounded-[8px]" placeholder="Enter Your Email Address" />
        <label className="text-left" htmlFor="passward">Password</label>
        <input type="email" className="w-[316px] border-4" placeholder="Enter Your Password" />
        <p className="text-nmain">Forgot Password Link</p>
       <p className="text-left">Don’t Have an Account? <span className="text-nmain">Sign Up</span> </p>
      </div>
       <NextButton ref={"/login"} text={"Log In"}/>
    </>
  );
}
