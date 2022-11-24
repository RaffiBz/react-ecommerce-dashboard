import React from "react";
import Card from "../../UI/Card";

export default function TierCommissionCard({
  title,
  target,
  percentageOff,
  commission,
}) {
  return (
    <Card className="bg-lightGrayBg box-border border active:border-secondary active:bg-white w-full max-w-[15.75rem] rounded-[2rem] shadow-smallCard px-[2.688rem] py-[2.125rem]">
      <div className="items-center flex gap-4">
        <div className="flex justify-center">
          <img
            src="/images/icons/tier-large/tier-large.svg"
            width={57}
            height={56}
            alt="tier"
          />
        </div>
        <div className="block py-[5px]">
          <span className="text-titleBlack text-sm leading-[1.063rem]">
            {title}
          </span>
          <span className="block text-title text-lg leading-[1.375rem] pt-[6px] font-medium">
            {target}
          </span>
        </div>
      </div>
      <div className="block mt-6">
        <span className="text-titleBlack text-lg leading-[1.375rem] font-semibold">
          {percentageOff}
        </span>
        <span className="block text-titleBlack text-lg leading-[1.375rem] font-semibold pt-2">
          {commission}
        </span>
      </div>
    </Card>
  );
}
