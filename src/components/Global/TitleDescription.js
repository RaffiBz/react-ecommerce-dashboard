import React from "react";
import Button from "../assets/button/Button";

export default function TitleDescription() {
  return (
    <div className="block w-full max-w-[15.5rem]">
      {/* prettier-ignore */}
      <span className="inline-block text-3xl text-title leading-[2.375rem] font-bold whitespace-pre-line">
        Merchant
        Recommended
        Brand Contents
      </span>
      <span className="inline-block text-base text-grayBlue leading-[1.375rem] pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor turpis
        lorem rhoncus, eleifend nec dictum. Duis pellentesque nunc diam placerat
        pellentesque cras elementum, elementum.
      </span>
      <Button className="w-full max-w-[14.5rem] bg-primary text-center py-2 rounded-lg mt-8">
        <span className="text-base text-buttonPrimary leading-7">
          Add New Offer
        </span>
      </Button>
    </div>
  );
}
