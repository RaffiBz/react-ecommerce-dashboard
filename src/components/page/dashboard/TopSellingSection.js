import React from "react";
import TopProductsDescription from "../../Global/TopProductsDescription";
import TopSellingGrid from "./TopSellingGrid";

export default function TopSellingSection() {
  return (
    <div className="relative pt-[14.438rem] pb-[19.5rem]">
      <div className="flex items-center gap-[2.5rem]">
        <div className="bg-primary bg-opacity-30 w-[65%] h-[21.438rem] rounded-[1.25rem]"></div>
        <TopSellingGrid />
        <TopProductsDescription />
      </div>
    </div>
  );
}
