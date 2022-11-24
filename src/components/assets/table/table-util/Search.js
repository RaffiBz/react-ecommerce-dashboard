import React from "react";
import Icon from "../../../../Icon";

export default function Search({ handleSearch }) {
  return (
    <div className="flex gap-[0.875rem] bg-white h-8 items-center rounded-md shadow-searchBoxShadow pl-[0.875rem] py-[0.563rem]">
      {/* search svg */}

      <Icon icon="Search" size="14" className="text-[#868FA0] " />

      {/* search input */}
      <input
        type="text"
        id="table-search"
        className="outline-none my-[0.375rem]"
        placeholder="Search for items"
        onChange={handleSearch}
      />
    </div>
  );
}
