import React from "react";

export default function DatePicker() {
  return (
    <div className="flex items-center">
      <div className="relative">
        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img
            src="/images/icons/grid-table/calendar.svg"
            width={20}
            height={20}
            alt="calender"
          />
        </div> */}
        <input
          name="start"
          type="date"
          className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-[10.688rem] pl-[0.75rem] p-2.5 placeholder:text-lightGray"
          placeholder="Select date start"
        />
      </div>
      <span className="mx-4 text-gray-500">to</span>
      <div className="relative">
        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img
            src="/images/icons/grid-table/calendar.svg"
            width={20}
            height={20}
            alt="calender"
          />
        </div> */}
        <input
          name="start"
          type="date"
          className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-[10.688rem] pl-[0.75rem] p-2.5 placeholder:text-lightGray"
          placeholder="Select date start"
        />
      </div>
    </div>
  );
}
