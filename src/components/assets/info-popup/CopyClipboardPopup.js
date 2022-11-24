import React from "react";

export default function CopyClipboardPopup({ infoMessage }) {
  return (
    <div className="p-4 absolute -top-[66px] right-[100px] rounded-lg shadow-infoPopup bg-white after:border-solid after:border-t-white after:border-t-8 after:border-x-transparent after:border-x-8 after:border-b-0 after:absolute after:-bottom-[8px] after:right-0">
      <span className="text-sm text-title">{infoMessage}</span>
    </div>
  );
}
