import React from "react";
import Icon from "../../../Icon";

import Button from "./Button";

export default function CopyCouponButton({ onClick }) {
  return (
    <Button
      className="flex w-full max-w-[14.813rem] bg-secondary py-4 px rounded-[3.25rem] text-buttonPrimary justify-center"
      onClick={onClick}
    >
      <span className="text-lg leading-4 font-bold pr-[2px]">
        Copy Coupon Code
      </span>
      <Icon icon="Copy" size={16} className="text-buttonPrimary" />
    </Button>
  );
}
