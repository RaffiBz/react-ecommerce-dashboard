import React from "react";

import Card from "../../UI/Card";
import DoughnutChart from "../charts/DoughnutChart";
import LegendBlockSingle from "../general/LegendBlockSingle";

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Statistics",
      data: [10, 20, 40],
      backgroundColor: ["#FB896B", "#4318FF", "#6AD2FF"],
    },
  ],
};

export default function PartnerPerformanceCard() {
  return (
    <Card className="bg-white w-full shadow-mediumCard rounded-[1.25rem] p-6">
      <span className="text-title text-lg leading-5 font-medium">
        Performance
      </span>
      <div className="flex mt-5 gap-[1.875rem]">
        <DoughnutChart className="w-[8.625rem] h-[8.625rem]" data={data} />
        <div className="flex gap-[3.438rem]">
          <div className="block">
            <LegendBlockSingle
              bgFill="bg-[#FB896B]"
              percentage="10%"
              title="Total Sales"
              textSize="text-2xl"
              display="flex gap-2 max-w-[5.188rem]"
            />
            <LegendBlockSingle
              bgFill="bg-[#4318FF]"
              percentage="20%"
              textSize="text-2xl"
              title="Returned Products"
              display="flex gap-2 mt-[2.063rem] max-w-[5.188rem]"
            />
          </div>
          <div>
            <LegendBlockSingle
              bgFill="bg-[#6AD2FF]"
              percentage="40%"
              textSize="text-2xl"
              title="Abandoned Carts"
              display="flex gap-2 max-w-[5.188rem]"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
