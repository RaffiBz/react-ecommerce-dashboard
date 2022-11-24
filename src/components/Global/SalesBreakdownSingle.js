import React from "react";

export default function SalesBreakdownSingle({ quantity, title }) {
  return (
    <div className="block">
      <span className="text-2xl text-title leading-5 font-medium">
        {quantity}
      </span>
      <span className="inline-block text-grayBlue text-lg leading-[1.375rem] pt-2 uppercase">
        {title}
      </span>
    </div>
  );
}
