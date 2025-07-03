import React from "react";
import { Link } from "react-router-dom";

export default function NextButton({ ref, text }) {
  return (
    <>
      <Link to={ref} className="flex justify-center pb-7">
        <button className="cursor-pointer w-80 py-5.5 font-medium text-white text-xl bg-ngreen rounded-[51px]">
          <p className="font-medium text-xl">{text ? text : "Next"}</p>
        </button>
      </Link>
    </>
  );
}
