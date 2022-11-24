import React, { useState } from "react";
import Icon from "../../../Icon";

import Button from "../../assets/button/Button";
import DeletePopup from "../../assets/popup/DeletePopup";

export default function ProductPlatformSingle({
  contentInfo,
  deleteButton,
  downloadButton,
  onClick,
}) {
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
      <div
        className="w-full flex bg-white justify-between p-4 items-center border border-transparent border-b border-b-thinGray hover:border hover:border-checkboxBg hover:border-b-checkboxBg hover:rounded-[0.313rem]"
        onClick={onClick}
      >
        <span className="text-base text-title leading-5">{contentInfo}</span>
        {deleteButton && (
          <Button onClick={showPopupHandler} type="button">
            <Icon icon="Delete" className="w-[11px] h-[12px] text-errorRed" />
          </Button>
        )}
        {downloadButton && (
          <Button type="button">
            <Icon
              icon="Download"
              className="text-secondary w-[19px] h-[18px]"
            />
          </Button>
        )}
      </div>
      {isShown && (
        <DeletePopup
          onClose={hidePopupHandler}
          subText={`You are about to delete ${contentInfo} content`}
        />
      )}
    </>
  );
}
