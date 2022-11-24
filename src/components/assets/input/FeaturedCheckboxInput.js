import React from "react";

import InfoPopup from "../info-popup/InfoPopup";

export default function FeaturedCheckboxInput({ register, text, color }) {
  return (
    <div className="relative flex gap-2 items-center">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox"
        {...register("checkbox")}
      />
      <label className="text-subtitle text-base">{text}</label>
      {color && <InfoPopup color={color} text="Default Offer Setup" />}
    </div>
  );
}
