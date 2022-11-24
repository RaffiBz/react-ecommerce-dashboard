import React from "react";
import Icon from "../../../Icon";

import Button from "./Button";

export default function RejectButton() {
  return (
    <Button className="flex bg-transparent text-center w-full max-w-[7.5rem] rounded-lg gap-2 px-[1.25rem] border border-errorRed items-center">
      <Icon icon="Close" size={16} className="text-errorRed" />
      <span className="text-errorRed text-base leading-7">Reject</span>
    </Button>
  );
}
