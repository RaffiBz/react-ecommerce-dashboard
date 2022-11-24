import React from "react";
import Button from "../button/Button";

export default function AccountActions() {
  return (
    <div className="flex justify-between py-[1.313rem] bg-lightGrayOpacity items-center mt-8 px-12">
      <Button className="text-secondary text-base">Sign out</Button>
      <Button className="text-errorRedtext-base">Delete</Button>
    </div>
  );
}
