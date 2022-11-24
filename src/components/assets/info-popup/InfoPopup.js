import React, { useState } from "react";
import Icon from "../../../Icon";

export default function InfoPopup({ color, text, className }) {
  //info box popup
  const [infoShown, setIsInfoShown] = useState(false);
  //show info box handler
  const showInfo = () => {
    setIsInfoShown(!infoShown);
  };
  return (
    <>
      <div className={className}>
        <Icon
          icon="Info"
          size={12}
          className={`${color} cursor-pointer`}
          onClick={showInfo}
        />
      </div>
      {infoShown && (
        <div className="p-4 absolute z-10 w-full max-w-[15.625rem] -top-[3.5rem] right-[7px] rounded-lg shadow-infoPopup bg-white after:border-solid after:border-t-white after:border-t-8 after:border-x-transparent after:border-x-8 after:border-b-0 after:absolute after:-bottom-[8px] after:right-0">
          <span className="text-xs text-title">{text}</span>
        </div>
      )}
    </>
  );
}
