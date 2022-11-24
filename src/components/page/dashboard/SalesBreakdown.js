import React from "react";
import { useSelector } from "react-redux";
import BarChart from "../../assets/charts/BarChart";
import StatsFilterSelector from "../../assets/dropdown/StatsFilterSelector";
import Card from "../../UI/Card";
import SalesBreakdownGrid from "./SalesBreakdownGrid";
import SalesBreakdownStats from "./SalesBreakdownStats";

// prettier-ignore
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const typeOptions = [
  { value: "All products", label: "All products" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
];

const options = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
];

export default function SalesBreakDownCard() {
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
    <div className="px-8">
      <Card className="bg-white flex w-full mt-8 mb-[5rem] shadow-profileCard rounded-[1.875rem] p-8 gap-[4.688rem] 3xl:gap-[12rem]">
        <div className="w-[25%]">
          <SalesBreakdownStats text="Total Products Sold" number="12,254" />
          <SalesBreakdownGrid />
        </div>
        <div>
          <div className="flex justify-between mb-[1.75rem]">
            <StatsFilterSelector
              className="arrowPadding w-full mt-[0.375rem] flex max-w-[10rem]"
              options={typeOptions}
              defaultValue={typeOptions[0]}
            />
            <StatsFilterSelector
              className="arrowPadding flex max-w-[6rem] w-full mt-[0.375rem]"
              options={options}
              defaultValue={options[0]}
            />
          </div>
          <BarChart className="w-[678px] h-[320px]" data={data} />
        </div>
      </Card>
    </div>
  );
}
