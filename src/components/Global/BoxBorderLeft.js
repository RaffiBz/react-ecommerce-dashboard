import React from "react";

export default function BoxBorderLeft({ unit, amount, title }) {
  return (
    <div className="flex gap-2 bg-bgBlueOpacity w-full box-border border-l-[10px] border-l-primary rounded-lg py-[0.625rem] pl-6">
      <span
        className={`${
          amount < 0 ? "text-darkRed" : "text-primary"
        } text-xl leading-6 font-medium`}
      >
        {unit}
        {amount}
      </span>
      <span className="text-grayBlue text-base leading-[1.188rem] uppercase">
        {title}
      </span>
    </div>
  );
}
