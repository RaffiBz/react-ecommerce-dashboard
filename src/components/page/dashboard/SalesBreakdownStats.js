import React from "react";

export default function SalesBreakdownStats({ number, text }) {
  return (
    <div className="block w-full border-b-[0.3px] border-b-grayBlue px-2">
      <span className="text-title font-bold text-base md:text-2xl leading-5 md:leading-7 capitalize">
        Sales Breakdown
      </span>
      <div className="w-full bg-primary bg-opacity-[0.08] flex rounded-xl my-6 py-[1.625rem] justify-center items-center gap-2">
        <span className="text-lg text-primary leading-[1.375rem] font-medium">
          {number}
        </span>
        <span>{text}</span>
      </div>
    </div>
  );
}
