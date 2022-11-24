import React from "react";

import Card from "../../UI/Card";

export default function TierReachCard() {
  return (
    <Card className="w-full bg-white rounded-[6.438rem] flex justify-center items-center mt-6 shadow-profileCard pt-4 pb-10 gap-6">
      {/* current tier */}
      <div className="block items-center text-center">
        <div className="flex justify-center">
          <img
            src="/images/icons/tier-large/tier-large.svg"
            width={57}
            height={56}
            alt="tier"
          />
        </div>
        <span className="text-title text-base leading-5 font-bold">
          0-50 Sales
        </span>
      </div>
      {/* progress bar */}
      <div className="block text-center">
        <span className="text-grayBlue text-sm leading-5">37 logged sales</span>
        <div className="w-full max-w-[17.5rem] bg-barGraybg rounded-full h-2.5 my-[0.594rem]">
          <div className="bg-primary h-2.5 rounded-full w-[70%]"></div>
        </div>
        <span className="text-primary text-xs leading-5">
          12 more to achive to the next goal
        </span>
      </div>
      {/* next tier */}
      <div className="block">
        <div className="flex justify-center">
          <img
            src="/images/icons/tier-large/tier-large.svg"
            width={57}
            height={56}
            alt="tier"
          />
        </div>
        <span className="text-grayBlue text-base leading-5">51-100 Sales</span>
      </div>
    </Card>
  );
}
