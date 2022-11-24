import React from "react";

import Card from "../../UI/Card";
import TopSellingProductPopup from "../popup/dashboard/TopSellingProductPopup";

export default function TopSellingProduct({
  position,
  productImg,
  productName,
  display,
  topSellers,
  productPopupShown,
  onClick,
  onClose,
  registeredDate,
}) {
  return (
    <>
      <Card
        className={`${position} ${display} block w-full max-w-[15.75rem] h-[17.25rem] bg-white shadow-brandCard rounded-[0.938rem] px-[0.875rem] py-4 cursor-pointer`}
        onClick={onClick}
      >
        <div className="w-[13.938rem] h-[10.875rem]">
          <img
            src={productImg}
            alt="product"
            className="object-cover w-full h-full rounded-[0.938rem]"
          />
        </div>
        <div className="mt-2">
          <span className="text-title text-lg leading-[1.375rem] font-medium">
            {productName}
          </span>
        </div>
        <div className="mt-2 flex-shrink-0">
          <div className="flex overflow-hidden -space-x-1">
            {topSellers.map((image) => (
              <img
                key={image}
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src={image}
                alt="seller"
              />
            ))}
          </div>
        </div>
      </Card>
      {productPopupShown && (
        <TopSellingProductPopup
          onClose={onClose}
          productImg={productImg}
          productName={productName}
          registeredDate={registeredDate}
        />
      )}
    </>
  );
}
