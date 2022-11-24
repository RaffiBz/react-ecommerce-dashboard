import React from "react";

export default function DescriptionPopup({ descriptionFull }) {
  return (
    <div className="p-4 absolute w-full max-w-[25.313rem] -top-[50px] rounded-lg shadow-infoPopup bg-white after:border-solid after:border-t-white after:border-t-8 after:border-x-transparent after:border-x-8 after:border-b-0 after:absolute after:-bottom-[8px] after:left-3">
      <span className="text-sm text-subtitle">{descriptionFull}</span>
    </div>
  );
}
