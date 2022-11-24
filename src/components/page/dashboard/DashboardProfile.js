import React from "react";

import Card from "../../UI/Card";
import DashboardTotalsBlock from "./DashboardTotalsBlock";
import DashboardTotalsFlex from "./DashboardTotalsFlex";
import Icon from "../../../Icon";

export default function DashboardProfile({
  profileImg,
  merchantName,
  shopName,
  registeredDate,
  todayRevenue,
  todaySold,
  existingPartner,
  remainingPartner,
}) {
  return (
    <Card className="relative w-[42%] block pt-8 shadow-profileCard rounded-[1.25rem]">
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
          <span className="text-xl text-title leading-5 font-medium">
            {merchantName}
          </span>
          <span className="block text-base text-primary leading-5 font-normal pt-2">
            {shopName}
          </span>
          {/* registeredDate */}
          <div className="flex gap-2 mt-3 items-center">
            <Icon icon="Calendar" size={16} className="text-grayBlue" />
            <span className="text-grayBlue text-sm leading-5">
              {registeredDate}
            </span>
          </div>
        </div>
      </div>
      {/* todays status */}
      <div className="flex justify-center text-center gap-12 mt-8 px-[6.563rem]">
        <DashboardTotalsBlock
          colorTop="text-secondary"
          colorBottom="grayBlue"
          number={todayRevenue}
          text="Today's Revenue"
        />
        <DashboardTotalsBlock
          colorTop="text-secondary"
          width="w-full max-w-[7.875rem]"
          colorBottom="grayBlue"
          number={todaySold}
          text="Today's Products Sold"
        />
      </div>
      {/* partners status */}
      <div className="w-full flex absolute bottom-0 justify-center text-center items-center bg-primary bg-opacity-[0.15] pt-[1.625rem] pb-8 gap-[3.438rem] mt-[2.375rem] px-12 rounded-b-[1.25rem]">
        <DashboardTotalsFlex
          colorTop="darkBlue"
          colorBottom="grayBlue"
          number={existingPartner}
          text="Existing partner"
        />
        <DashboardTotalsFlex
          colorTop="darkBlue"
          colorBottom="grayBlue"
          number={remainingPartner}
          text="partner remaining"
        />
      </div>
    </Card>
  );
}
