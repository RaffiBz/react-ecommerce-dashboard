import React from "react";
import Icon from "../../../../Icon";

import Button from "../../button/Button";

export default function View() {
  return (
    <Button className="flex justify-between items-center w-full pt-[0.563rem]">
      <span className="text-sm text-primary font-medium">View</span>
      <Icon icon="Info" size={16} className="text-primary" />
    </Button>
  );
}
