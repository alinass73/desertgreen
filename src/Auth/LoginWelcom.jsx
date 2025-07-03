import React from "react";
import { Link } from "react-router-dom";

export default function LoginWelcom() {
  return (
    <div className="bg-[url(/images/login-welcome.jpg)] w-full h-[874px] ">
      <div className="absolute bottom-15 flex flex-col right-1/2 translate-x-1/2">
        <button className="cursor-pointer px-36 py-5.5 font-medium text-ngreen text-xl bg-white rounded-[51px] ">
          <Link to="/signin">Sign Up</Link>
        </button>
        <button className="cursor-pointer px-36 py-5.5 font-medium text-white text-xl rounded-[51px] border-2 mt-4">
          <Link to="/login">Log In</Link>
        </button>
      </div>
    </div>
  );
}
