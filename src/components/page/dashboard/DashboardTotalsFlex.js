import React from "react";

export default function DashboardTotalsFlex({
  colorTop,
  colorBottom,
  number,
  text,
}) {
  return (
    <div className="flex gap-3 justify-center items-center">
      <span className={`${colorTop} text-3xl font-medium`}>{number}</span>
      <span className={`${colorBottom} text-base leading-[1.375rem] uppercase`}>
        {text}
      </span>
    </div>
  );
}
