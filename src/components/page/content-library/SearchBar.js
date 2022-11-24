import React from "react";
import Icon from "../../../Icon";

import Button from "../../assets/button/Button";

export default function SearchBar({ handleSearch }) {
  return (
    <div className="relative w-full max-w-[34.25rem]">
      <input
        type="text"
        id="table-search"
        className="w-full outline-none pl-[0.75rem] pr-[3.438rem] py-[0.625rem] text-base leading-[1.375rem] active:border-primaryOpacity hover:border-mediumGray border border-borderGrayOpacity rounded-lg placeholder:text-base placeholder:text-lightGray"
        placeholder="Search products by product name"
      />
      <Button
        className="absolute right-0 inset-y-0 bg-primary p-[0.625rem] rounded-r-lg"
        onClick={handleSearch}
      >
        <Icon icon="Search" size={20} className="text-white" />
      </Button>
    </div>
  );
}
