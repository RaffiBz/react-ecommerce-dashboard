import React from "react";
import StatSingle from "./StatSingle";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-6 py-6 border-b-[0.5px] border-b-lightGray">
      <StatSingle
        background="bg-secondaryFirstColor bg-opacity-[0.08]"
        number="256"
        text="Partners Joined"
      />
      <StatSingle
        background="bg-primary bg-opacity-[0.08]"
        number="14"
        text="Products Sold"
      />
      <StatSingle
        background="bg-whiteGray"
        number="$500"
        text="Total Revenue"
      />
      <StatSingle
        background="bg-secondary bg-opacity-[0.08]"
        number="$14"
        text="Commission Paid"
      />
    </div>
  );
}
