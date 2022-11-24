import React from "react";
import Card from "../../UI/Card";

export default function SubscriptionPlanCard({ planType, cost, amount }) {
  return (
    <Card className="flex bg-white box-border border-b-[10px] border-b-primary px-4 py-[2.25rem] justify-between shadow-infoPopup rounded-[0.938rem]">
      <div className="block">
        <span className="text-title text-lg leading-[1.375rem] font-bold">
          {planType}
        </span>
        <span className="block text-title text-base leading-[1.375rem] font-normal pt-[6px]">
          {cost} per month
        </span>
      </div>
      <div className="block text-center">
        <span className="text-secondary text-[1.75rem] leading-[2.125rem] font-bold">
          {amount}
        </span>
        <span className="block text-primary text-sm leading-[1.063rem] font-normal pt-1">
          sold
        </span>
      </div>
    </Card>
  );
}
