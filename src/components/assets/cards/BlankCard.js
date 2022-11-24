import React from "react";
import Icon from "../../../Icon";

export default function BlankCard() {
  return (
    <div className="block w-full max-w-[15.938rem] h-full text-center items-center my-auto bg-whiteGray shadow-brandCard rounded-[0.938rem] cursor-pointer mt-6 mb-8 pt-[7.5rem]">
      <Icon icon="Add" size={44} className="text-[#E4E4E4]" />
      <span className="block pt-4 text-subtitle text-sm leading-[1.063rem]">
        Start from blank page
      </span>
    </div>
  );
}
