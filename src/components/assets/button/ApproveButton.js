import React from "react";
import Icon from "../../../Icon";

import Button from "./Button";

export default function ApproveButton() {
  return (
    <Button className="flex bg-primary text-center w-full max-w-[7.5rem] rounded-lg gap-2 px-[1.25rem] items-center">
      <Icon icon="Check" size={16} className="text-buttonPrimary" />
      <span className="text-buttonPrimary text-base leading-7">Approve</span>
    </Button>
  );
}
