import React from "react";
import { quotes } from "../assets";

export default function feedBackCard({ content, name, title, img }) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr:5 mr-5 my-0 feedback-card">
      <img
        src={quotes}
        alt="double__quotes"
        className="w-[27px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px ] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt="image" className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4 ">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">{name}</h4>
          <p className="text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}
