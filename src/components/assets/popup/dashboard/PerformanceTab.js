import React from "react";

import DoughnutChart from "../../charts/DoughnutChart";
import BoxBorderLeft from "../../../Global/BoxBorderLeft";
import LegendBlockSingle from "../../../Global/LegendBlockSingle";

export default function PerformanceTab({ data }) {
  return (
    <>
      {/* doughnut chart + legends */}
      <DoughnutChart className="w-[11.5rem] h-[11.5rem] mx-auto" data={data} />
      <div className="flex gap-12 mt-8 items-center justify-center">
        <LegendBlockSingle
          bgFill="bg-[#FB896B]"
          percentage="10%"
          title="Abandoned Carts"
          textSize="text-2xl"
          display="flex gap-2 max-w-[10.375rem]"
        />
        <LegendBlockSingle
          bgFill="bg-[#4318FF] max-w-[10.375rem]"
          percentage="20%"
          title="Total Sales"
          textSize="text-2xl"
          display="flex gap-2 max-w-[10.375rem]"
        />
        <LegendBlockSingle
          bgFill="bg-[#6AD2FF] max-w-[10.375rem]"
          percentage="40%"
          title="Returned Products"
          textSize="text-2xl"
          display="flex gap-2 max-w-[10.375rem]"
        />
      </div>
      <div className="w-full max-w-[20.688rem] mx-auto flex mt-12">
        <BoxBorderLeft title="Total products" amount="125" />
      </div>
    </>
  );
}
