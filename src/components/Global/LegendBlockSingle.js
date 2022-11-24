import React from "react";

export default function LegendBlockSingle({
  percentage,
  bgFill,
  title,
  amount,
  display,
  textSize,
}) {
  return (
    <div className={`${display} w-full`}>
      <div className="flex gap-2 items-center mb-2">
        <div className={`${bgFill} w-[6.15px] h-[6.15px] rounded-full`}></div>
        <span className={`${textSize} text-title font-medium leading-5`}>
          {percentage}
        </span>
      </div>
      <span className="text-grayBlue text-base leading-5">{title}</span>
      {amount && (
        <span className="inline-block text-primary text-base leading-5 pt-[2px]">
          {amount}
        </span>
      )}
    </div>
  );
}
