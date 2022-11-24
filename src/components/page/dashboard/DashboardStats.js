import React from "react";
import { useSelector } from "react-redux";

import Card from "../../UI/Card";
import ChartRow from "./ChartRow";
import StatsFilterSelector from "../../assets/dropdown/StatsFilterSelector";
import Icon from "../../../Icon";
import StatsGrid from "./StatsGrid";

const options = [
  { value: "thisMonth", label: "this month" },
  { value: "thisWeek", label: "this week" },
];

export default function DashboardStats() {
  const primaryBrandColor = useSelector(
    (state) => state.brandColors.value.primaryColor
  );

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Statistics",
        data: [10, 20, 40],
        backgroundColor: ["#FB896B", "#4318FF", primaryBrandColor],
      },
    ],
  };

  return (
    <Card className="w-[56%] bg-white shadow-mediumCard rounded-[1.25rem] px-8 py-[2.125rem]">
      {/* filterDate */}
      <div className="flex gap-[0.375rem] justify-end items-center">
        <Icon icon="Calendar" size={16} className="text-grayBlue" />
        <StatsFilterSelector
          className="arrowPadding flex max-w-[9rem] w-full mt-[0.375rem]"
          options={options}
          defaultValue={options[0]}
        />
      </div>
      <StatsGrid />
      <ChartRow data={data} />
    </Card>
  );
}
