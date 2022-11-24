import React from "react";
import Icon from "../../../Icon";

import Card from "../../UI/Card";

export default function FeaturedOfferCard({
  productName,
  dueDate,
  percentageOff,
}) {
  return (
    <Card className="w-full flex bg-white rounded-[0.938rem] p-4 shadow-infoPopup justify-between">
      <div className="flex">
        {/* offer image */}
        <div className="w-full h-full max-w-[90px] max-h-[85px]">
          <img
            src="/images/offer.png"
            width={90}
            height={85}
            alt="offer"
            className="object-cover rounded-[0.938rem]"
          />
        </div>
        {/* offer discription */}
        <div className="block ml-4">
          <span className="text-title text-lg leading-[1.375rem] font-medium">
            {productName}
          </span>
          <span className="block text-grayBlue text-sm leading-[1.125rem] pt-[2px]">
            Due Date:{dueDate}
          </span>
          <div className="flex mt-[0.563rem] items-center gap-1">
            <span className="text-secondary text-2xl leading-[1.875rem] font-bold">
              {percentageOff}
            </span>
            <span className="text-title text-sm leading-4">OFFER</span>
          </div>
        </div>
      </div>
      {/* prize logo */}
      <div className="flex w-[29px] h-[29px]">
        {/* <Icon icon="Gift" size={29} className="gradient"/> */}
        <img
          src="/images/icons/general/featured.svg"
          width={29}
          height={29}
          alt="prize"
        />
      </div>
    </Card>
  );
}
