import React, { useState } from "react";
import Button from "../../button/Button";
import GetLinkPopup from "../table-util/GetLinkPopup";

export default function GetSharableLink() {
  //popup state
  const [isShown, setIsShown] = useState(false);
  //popup handler functions
  const showPopupHandler = () => {
    setIsShown(true);
  };

  const hidePopupHandler = () => {
    setIsShown(false);
  };
  return (
    <>
      <Button
        className="flex justify-between w-full pt-[0.563rem]"
        onClick={showPopupHandler}
      >
        <span className="text-sm text-title font-medium">
          Get shareable link&code
        </span>
        <img
          src="/images/icons/grid-table/get-link.svg"
          width={16}
          height={16}
          alt="action"
        />
      </Button>
      {isShown && <GetLinkPopup onClose={hidePopupHandler} />}
    </>
  );
}
