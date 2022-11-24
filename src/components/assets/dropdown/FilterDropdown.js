import React from "react";

import DropdownSelect from "../dropdown/DropdownSelect";

const options = [
  { value: "today", label: "Today" },
  { value: "7days", label: "7 Days" },
  { value: "weekly", label: "Weekly" },
  { value: "30days", label: "30 Days" },
  { value: "monthly", label: "Monthly" },
];

const customStyles = {
  indicatorSeparator: (styles) => ({
    ...styles,
    width: 0,
  }),
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    //   const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "#43B6FA"
        : isFocused
        ? "#BAE5FF"
        : null,
      "#C1D4E2": "#C1D4E2",
      color: isDisabled
        ? null
        : isSelected
        ? "white"
        : isFocused
        ? "white"
        : null,
      "#FFFFF": "#C1D4E2",
      border: 0,
    };
  },
};

export default function FilterDropdown({ className, control }) {
  return (
    <div className={className}>
      <DropdownSelect
        className="w-full ml-[0.375rem]"
        options={options}
        customStyles={customStyles}
        control={control}
      />
    </div>
  );
}
