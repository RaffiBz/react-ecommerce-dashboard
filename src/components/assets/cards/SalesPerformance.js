import React from "react";

import LegendOverview from "../general/LegendOverview";
import SalesPerformanceBarChart from "../admin-dashboard/SalesPerformanceBarChart";

export default function SalesPerformance() {
  return (
    <div className="bg-white w-[50%] shadow-profileCard px-8 pt-6 pb-[0.813rem] gap-4 flex justify-between rounded-[0.938rem]">
      <LegendOverview
        title="Sales
        Performance"
        primaryLegend="Total
            Sales"
        secondaryLegend="Refunds"
        totalPrimary="$25"
        totalSecondary="$25"
        primaryColor="text-secondary"
        secondaryColor="text-barOrange"
      />
      <div className="w-[60%] h-[228px] min-h-[228px] pt-[0.625rem]">
        <SalesPerformanceBarChart />
      </div>
    </div>
  );
}
