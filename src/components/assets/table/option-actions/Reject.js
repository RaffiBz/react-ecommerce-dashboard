import React from "react";
import Icon from "../../../../Icon";

import Button from "../../button/Button";

export default function Reject() {
  return (
    <Button className="flex justify-between items-center w-full pt-[0.563rem]">
      <span className="text-sm text-errorRed font-medium">Reject</span>
      <Icon icon="Close" size={16} className="text-errorRed" />
    </Button>
  );
}
