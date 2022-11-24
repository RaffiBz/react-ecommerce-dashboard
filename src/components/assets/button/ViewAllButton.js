import React from "react";
import Icon from "../../../Icon";

import Button from "./Button";

export default function ViewAllButton() {
  return (
    <Button className="flex gap-[0.188rem] items-center">
      <span className="text-grayBlue text-base leading-5">view all</span>
      <Icon icon="Arrow Right" className="w-[17px] h-[16px] text-grayBlue" />
    </Button>
  );
}
