import React from "react";

export default function LegendOverview({
  title,
  primaryLegend,
  secondaryLegend,
  totalPrimary,
  totalSecondary,
  primaryColor,
  secondaryColor,
}) {
  return (
    <div className="w-[30%]">
      {/* prettier-ignore */}
      <span className="text-title text-xl leading-[1.563rem] font-medium whitespace-pre-line">
          {title}
        </span>
      <div className="block mt-6">
        <span className={`${primaryColor} text-2xl leading-5`}>
          {totalPrimary}
        </span>
        {/* prettier-ignore */}
        <span className="block text-grayBlue text-base leading-[1.125rem] pt-3 whitespace-pre-line capitalize">
            {primaryLegend}
          </span>
      </div>
      <div className="block mt-6">
        <span className={`${secondaryColor} text-2xl leading-5`}>
          {totalSecondary}
        </span>
        {/* prettier-ignore */}
        <span className="block text-grayBlue text-base leading-[1.125rem] pt-3 whitespace-pre-line">
            {secondaryLegend}
          </span>
      </div>
    </div>
  );
}
