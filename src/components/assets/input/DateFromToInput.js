import React from "react";

export default function DateFromToInput() {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="relative block w-full">
        <div className="flex justify-between">
          <label
            className="text-xs md:text-sm text-title lg:leading-[1.25rem] "
            htmlFor="start"
          >
            Offer Start Date
          </label>
          <span className="text-xs leading-5 text-mediumGray">Optional</span>
        </div>
        <input
          name="start"
          type="date"
          className="focus:outline-none bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-[10.688rem] px-[0.75rem] py-2 placeholder:text-lightGray"
          placeholder="Offer start date"
        />
      </div>
      <div className="relative">
        <div className="flex justify-between">
          <label
            className="text-xs md:text-sm text-title lg:leading-[1.25rem] "
            htmlFor="start"
          >
            Offer Expire Date
          </label>
          <span className="text-xs leading-5 text-mediumGray">Optional</span>
        </div>
        <input
          name="start"
          type="date"
          className="focus:outline-none bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-[10.688rem] px-[0.75rem] py-2 placeholder:text-lightGray"
          placeholder="Offer expire date"
        />
      </div>
    </div>
  );
}
