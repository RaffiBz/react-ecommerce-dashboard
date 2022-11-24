import React from "react";
import DoughnutChart from "../../assets/charts/DoughnutChart";
import LegendBlockSingle from "../../Global/LegendBlockSingle";

export default function ChartRow({ data }) {
  return (
    <div className="flex justify-between items-center bg-white pt-6">
      <div className="flex gap-9 items-center w-[35%]">
        <span className="text-title text-lg leading-[1.375rem] font-medium whitespace-pre-line w-[3.25rem]">
          3 Top Offers
        </span>
        <DoughnutChart className="w-[6.5rem] h-[6.5rem]" data={data} />
      </div>
      {/* doughnut legends */}
      <div className="flex gap-7 justify-between w-[55%]">
        <LegendBlockSingle
          bgFill="bg-[#FB896B]"
          percentage="10%"
          title="Offer Name"
          textSize="text-2xl"
          amount="$200"
          display="block max-w-[5.188rem]"
        />
        <LegendBlockSingle
          bgFill="bg-[#4318FF]"
          percentage="20%"
          title="Offer Name"
          textSize="text-2xl"
          amount="$500"
          display="block max-w-[5.188rem]"
        />
        <LegendBlockSingle
          bgFill="bg-[#6AD2FF]"
          percentage="40%"
          title="Offer Name"
          textSize="text-2xl"
          amount="$800"
          display="block max-w-[5.188rem]"
        />
      </div>
    </div>
  );
}
