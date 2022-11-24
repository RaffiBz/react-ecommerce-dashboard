import React from "react";
import Button from "../../button/Button";
import DatePicker from "./DatePicker";
import FilterOptions from "./FilterOptions";

export default function FilterInput() {
  return (
    <div className="absolute top-[56px] w-full max-w-[41rem] bg-white rounded-[1.25rem] px-8 py-6 shadow-profileCard">
      <span className="text-lg font-bold">Filter</span>
      <div className="flex justify-between">
        <FilterOptions />
        <DatePicker />
      </div>
      <div className="flex gap-4 justify-end mt-6">
        <Button className="bg-buttonGray text-title text-base leading-7 text-center w-full max-w-[7.188rem] py-[0.563rem] rounded-lg">
          Reset Filter
        </Button>
        <Button className="bg-primary text-buttonPrimary text-base leading-7 text-center w-full max-w-[7.188rem] py-[0.563rem] rounded-lg">
          Search
        </Button>
      </div>
    </div>
  );
}
