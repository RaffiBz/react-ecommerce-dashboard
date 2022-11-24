import React from "react";

export default function TextCheckbox({
  title,
  id,
  onChange,
  checked,
  direction,
}) {
  return (
    <div className={`${direction} inline-flex gap-2 items-center`}>
      <span className="text-grayBlue text-sm leading-[1.063rem]">{title}</span>
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={onChange}
        checked={checked}
        className="appearance-none h-3 w-3 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox disabled:bg-white disabled:cursor-not-allowed"
      />
    </div>
  );
}
