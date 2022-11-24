import React from "react";
import DashboardProfile from "./DashboardProfile";
import DashboardStats from "./DashboardStats";

export default function ProfileTopStatistics() {
  return (
    <div className="flex justify-between px-8 gap-[1.313rem]">
      <DashboardProfile
        profileImg="/images/profile/image-holder.png"
        merchantName="Cooper Curtis"
        shopName="Doris Shop"
        registeredDate="May/23/2022"
        todayRevenue="$14"
        todaySold="14"
        existingPartner="256"
        remainingPartner="243"
      />
      <DashboardStats />
    </div>
  );
}
