import React from "react";

import Button from "../../assets/button/Button";

export default function SuccessNotification({ message }) {
  return (
    <div className="fixed top-0 flex justify-between items-center px-8 h-[3.25rem] bg-notificationGreenBg w-full z-10">
      <div className="flex gap-2">
        <img
          src="/images/icons/notifications/success.svg"
          width={24}
          height={24}
          alt="icon"
        />
        <span className="text-subtitle text-lg">{message}</span>
      </div>
      <Button className="bg-buttonGreenBg text-white text-base text-center w-full max-w-[10.75rem] py-[0.438rem] rounded-lg">
        Manage Plans
      </Button>
    </div>
  );
}
