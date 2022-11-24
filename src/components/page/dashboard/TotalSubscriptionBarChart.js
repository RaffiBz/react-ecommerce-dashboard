import React from "react";
import { useSelector } from "react-redux";

import BarChart from "../../assets/charts/BarChart";

// prettier-ignore
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function TotalSubscriptionBarChart() {
  const primaryBrandColor = useSelector(
    (state) => state.brandColors.value.primaryColor
  );

  const data = {
    labels,
    datasets: [
      {
        data: [
          25000, 40000, 30000, 22000, 50900, 20000, 13000, 60000, 20500, 51000,
          12000, 10000,
        ],
        backgroundColor: primaryBrandColor,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };
  return (
    <div className="w-[66%]">
      <BarChart className="w-[612px] h-[261px] text-primary" data={data} />
    </div>
  );
}
