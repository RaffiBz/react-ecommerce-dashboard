import React from "react";
import Icon from "../../../Icon";

import Button from "./Button";

export default function CopyLinkButton({ onClick }) {
  return (
    <Button
      className="flex w-full max-w-[9.25rem] bg-primary py-4 px rounded-[3.25rem] text-buttonPrimary justify-center"
      onClick={onClick}
    >
      <Icon icon="Link" size={16} className="text-buttonPrimary" />
      <span className="text-lg leading-4 font-bold pl-[2px]">Copy Link</span>
    </Button>
  );
}
