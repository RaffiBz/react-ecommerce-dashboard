import React from "react";
import TextCheckbox from "./TextCheckbox";

export default function BoxTitleCheckbox({ text, id, onChange, checked }) {
  return (
    <div className="flex justify-between w-full bg-white max-w-[22.5rem] px-6 py-4 items-center shadow-profileCard rounded-lg">
      <span className="text-title text-base leading-5 font-bold">{text}</span>
      <TextCheckbox
        title="Display dashboard"
        id={id}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
}
