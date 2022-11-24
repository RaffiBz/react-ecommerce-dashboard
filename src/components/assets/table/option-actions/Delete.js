import React, { useState } from "react";
import Icon from "../../../../Icon";

import Button from "../../button/Button";
import DeletePopup from "../../popup/DeletePopup";

export default function Delete() {
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
        className="flex justify-between items-center w-full pt-[0.563rem]"
        onClick={showPopupHandler}
      >
        <span className="text-sm text-errorRed font-medium">Delete</span>
        <Icon icon="Delete" size={16} className="text-errorRed" />
      </Button>
      {isShown && <DeletePopup onClose={hidePopupHandler} />}
    </>
  );
}
