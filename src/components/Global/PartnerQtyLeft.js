import React from "react";

export default function PartnerQtyLeft({ partnersRemaining }) {
  return (
    <div className="flex gap-2 justify-end px-8 my-9 items-center">
      <span className="text-title text-sm leading-5">Partner QTY</span>
      <div className="bg-redOpacity px-3 py-1 rounded-[1.125rem]">
        <span className="text-barOrange text-sm leading-5">
          {partnersRemaining}
        </span>
      </div>
    </div>
  );
}
