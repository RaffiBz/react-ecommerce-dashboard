import React from "react";
import ApproveButton from "../../button/ApproveButton";
import RejectButton from "../../button/RejectButton";
import AutoconfirmPartnerCheckbox from "../../input/AutoconfirmPartnerCheckbox";

import FilterIcon from "./FilterIcon";
import Search from "./Search";

export default function SearchRow({ handleSearch, actions, autoconfirm }) {
  return (
    <div className="flex w-full bg-gridBg backdrop-blur px-5 pt-4 pb-7 justify-between">
      <div className="flex gap-4">
        <FilterIcon />
        <Search handleSearch={handleSearch} />
      </div>
      {actions && (
        <div className="flex gap-4">
          <RejectButton />
          <ApproveButton />
        </div>
      )}
      {autoconfirm && <AutoconfirmPartnerCheckbox />}
    </div>
  );
}
