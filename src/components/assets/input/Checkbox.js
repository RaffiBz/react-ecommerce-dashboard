import React from "react";

export default function Checkbox({ onChange, checked, id }) {
  return (
    <input
      type="checkbox"
      id={id}
      name={id}
      onChange={onChange}
      checked={checked}
      className="appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox"
    />
  );
}
