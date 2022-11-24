import React from "react";

export default function SalesBreakdownGrid() {
  return (
    <div className="grid grid-cols-2 pt-6 pl-2 gap-x-8 gap-y-6">
      <div className="block">
        <span className="text-2xl text-title leading-5 font-medium">$394</span>
        <span className="block text-grayBlue text-lg leading-[1.375rem] pt-2 uppercase">
          Total Sales
        </span>
      </div>
      <div className="block">
        <span className="text-2xl text-title leading-5 font-medium">-$15</span>
        <span className="block text-grayBlue text-lg leading-[1.375rem] pt-2 uppercase">
          Refunds
        </span>
      </div>
      <div className="block">
        <span className="text-2xl text-title leading-5 font-medium">3</span>
        <span className="inline-block text-grayBlue text-lg leading-[1.375rem] pt-2 uppercase">
          Abandoned Carts
        </span>
      </div>
      <div className="block">
        <span className="text-2xl text-title leading-5 font-medium">9</span>
        <span className="inline-block text-grayBlue text-lg leading-[1.375rem] pt-2 uppercase">
          Returned Products
        </span>
      </div>
    </div>
  );
}
