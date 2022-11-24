import React from "react";
import Icon from "../../../Icon";

import Button from "../../assets/button/Button";

export default function AlertNotification({ message }) {
  return (
    <div className="fixed top-0 flex justify-between items-center px-8 h-[3.25rem] bg-darkBlue w-full z-10">
      <div className="flex gap-2">
        <Icon icon="Warning" size={24} className="text-primary" />
        <span className="text-white text-lg">{message}</span>
      </div>
      <Button className="bg-primary text-buttonPrimary text-base text-center w-full max-w-[10.75rem] py-[0.438rem] rounded-lg">
        Manage Plans
      </Button>
    </div>
  );
}
