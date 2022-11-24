import React from "react";
import Icon from "../../Icon";

export default function NoResult({ height }) {
  return (
    <div className={`${height} w-full flex items-center justify-center`}>
      <div className="block w-full max-w-[20.375rem] mx-auto text-center">
        <Icon icon="Search" size={61} className="text-[#868FA0]" />
        <span className="block pt-[1.125rem] text-subtitle text-2xl leading-6">
          No Result Found
        </span>
        <div className="block pt-4 w-full max-w-[16.375rem] mx-auto">
          <span className="text-grayBlue text-base leading-6">
            Sorry we couldn't find any result please try again
          </span>
        </div>
      </div>
    </div>
  );
}
