import React from "react";
import BoxTitleCheckbox from "../../Global/BoxTitleCheckbox";

export default function ManageDashboard() {
  return (
    <div className="mt-[3.75rem]">
      <span className="text-grayBlue text-lg leading-[1.375rem] font-semibold">
        Manage Partners Dashboard
      </span>
      <div className="flex mt-6 gap-4">
        <BoxTitleCheckbox text="Branded pages" />
        <BoxTitleCheckbox text="Top Selling Products" />
      </div>
    </div>
  );
}
