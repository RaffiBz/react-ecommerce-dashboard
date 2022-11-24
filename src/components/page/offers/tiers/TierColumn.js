import React from "react";
import InfoPopup from "../../../assets/info-popup/InfoPopup";
import TierColumnItem from "./TierColumnItem";

export default function TierColumn() {
  return (
    <div className="flex relative items-center">
      <TierColumnItem className="w-full max-w-[5rem]" column="Name" />
      <TierColumnItem
        className="w-full max-w-[11.563rem] ml-[2.125rem]"
        column="Discount Type"
      />
      <TierColumnItem
        className="w-full max-w-[8.313rem] ml-4"
        column="Partner Commission"
      />
      <TierColumnItem
        className="w-full max-w-[8.313rem] ml-4"
        column="Customer Discount"
      />
      <InfoPopup
        className="flex justify-end w-[3.188rem] ml-[2.25rem]"
        color="text-[#868FA0]"
        text="This is a permanent selection. 
              Editing this in the future will result 
              in the full tier reset."
      />
    </div>
  );
}
