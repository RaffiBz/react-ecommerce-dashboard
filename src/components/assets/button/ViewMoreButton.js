import React from "react";
import Icon from "../../../Icon";

import Button from "./Button";

export default function ViewMoreButton({ onClick }) {
  return (
    <Button className="flex gap-[0.188rem] items-center" onClick={onClick}>
      <span className="text-primary text-sm leading-[1.063rem]">View more</span>
      <Icon icon="Arrow Right" className="w-[17px] h-[16px] text-primary" />
    </Button>
  );
}
