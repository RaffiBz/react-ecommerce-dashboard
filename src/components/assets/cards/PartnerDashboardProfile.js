import React from "react";

import Card from "../../UI/Card";
import CopyCouponButton from "../button/CopyCouponButton";
import CopyLinkButton from "../button/CopyLinkButton";
import DashboardTotalsBlock from "../general/DashboardTotalsBlock";

export default function PartnerDashboardProfile({
  profileImg,
  tierImg,
  partnerName,
  remaining,
  tier,
  num1,
  num2,
  num3,
}) {
  return (
    <Card className="w-full block max-w-[28.063rem] pt-6 shadow-profileCard rounded-[1.25rem]">
      {/* profile pic */}
      <div className="flex px-8">
        <img
          src={profileImg}
          width={102}
          height={102}
          className="h-[102px] w-[102px] rounded-full object-cover"
          alt="icon"
        />
        {/* profile info */}
        <div className="block ml-4">
          <img src={tierImg} width={38} height={38} alt="icon" />
          <span className="block text-xl text-title leading-5 font-medium pt-3">
            {partnerName}
          </span>
          <span className="block text-base text-grayBlue leading-5 font-normal pt-2">
            Only {remaining} left from verified {tier}
          </span>
        </div>
      </div>
      {/* todays status */}
      <div className="flex justify-center text-center gap-12 mt-8 px-[6.563rem]">
        <DashboardTotalsBlock
          colorTop="text-secondary"
          colorBottom="grayBlue"
          number={num1}
          text="Total Commission"
        />
        <DashboardTotalsBlock
          colorTop="text-title"
          width="w-full "
          colorBottom="grayBlue"
          number={num2}
          text="This Month's Commission"
        />
        <DashboardTotalsBlock
          colorTop="text-title"
          width="w-full "
          colorBottom="grayBlue"
          number={num3}
          text="Today's Commission"
        />
      </div>
      {/* copy buttons */}
      <div className="flex justify-center text-center items-center bg-primary bg-opacity-[0.15] py-6 gap-6 mt-[2.375rem] px-5 rounded-b-[1.25rem]">
        <CopyLinkButton />
        <CopyCouponButton />
      </div>
    </Card>
  );
}
