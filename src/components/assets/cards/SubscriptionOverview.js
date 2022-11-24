import React from "react";
import SubscriptionOverviewLineChart from "../admin-dashboard/SubscriptionOverviewLineChart";
import LegendOverview from "../general/LegendOverview";

export default function SubscriptionOverview() {
  return (
    <div className="bg-white w-[50%] shadow-profileCard px-8 pt-6 pb-[0.813rem] gap-4 flex justify-between rounded-[0.938rem]">
      <LegendOverview
        title="Subscription
                overview"
        primaryLegend="paid
            subscription"
        secondaryLegend="Free
            subscription"
        totalPrimary="$25"
        totalSecondary="$25"
        primaryColor="text-secondary"
        secondaryColor="text-primary"
      />
      <div className="w-[60%] pt-[0.625rem]">
        <SubscriptionOverviewLineChart />
      </div>
    </div>
  );
}
