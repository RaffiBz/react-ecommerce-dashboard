import React from "react";
import Icon from "../../../../Icon";

export default function ProductPopupDetails({
  productImg,
  productName,
  shopName,
  registeredDate,
}) {
  return (
    <div className="flex gap-6">
      {/* profile img */}
      <img
        src={productImg}
        width={94}
        height={94}
        className="h-[94px] w-[94px] rounded-[0.938rem] object-cover"
        alt="icon"
      />
      {/* user description */}
      <div className="block">
        <div className="flex items-center gap-3">
          <span className="text-2xl text-title leading-[2.063rem] font-bold">
            {productName}
          </span>
        </div>
        <span className="block text-base text-secondary text-left leading-[1.375rem] pt-1 font-normal">
          {shopName}
        </span>
        <div className="flex items-center gap-2 mt-4">
          <Icon icon="Calendar" size={16} className="text-mediumGray" />

          <span className="text-sm text-mediumGray leading-[1.063rem]">
            {registeredDate}
          </span>
        </div>
      </div>
    </div>
  );
}
