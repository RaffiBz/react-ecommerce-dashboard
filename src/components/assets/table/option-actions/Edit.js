import React from "react";
import Icon from "../../../../Icon";

import Button from "../../button/Button";

export default function Edit() {
  return (
    <Button className="flex justify-between items-center w-full pt-[0.563rem]">
      <span className="text-sm text-primary font-medium">Edit</span>
      <Icon icon="Edit" size={16} className="text-primary" />
    </Button>
  );
}
