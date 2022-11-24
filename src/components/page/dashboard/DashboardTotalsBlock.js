import React from "react";

export default function DashboardTotalsBlock({
  colorTop,
  colorBottom,
  number,
  text,
  width,
}) {
  return (
    <div className={`${width} block`}>
      <span className={`${colorTop} text-3xl leading-5 font-medium`}>
        {number}
      </span>
      <span
        className={`${colorBottom} block text-base leading-[1.375rem] pt-3 uppercase`}
      >
        {text}
      </span>
    </div>
  );
}
