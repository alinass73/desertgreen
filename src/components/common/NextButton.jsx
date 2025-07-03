import React from "react";
import { Link } from "react-router-dom";

export default function NextButton({ref, text}) {
  return (
    <>
      <button className="cursor-pointer px-36 py-5.5 font-medium text-white text-xl bg-ngreen rounded-[51px]">
        <Link to={ref}>{text ? text : "Next"}</Link>
      </button>
    </>
  );
}
