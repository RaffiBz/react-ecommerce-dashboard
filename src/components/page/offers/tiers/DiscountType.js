import React from "react";
import DropdownSelect from "../../../assets/dropdown/DropdownSelect";

const options = [
  { value: "percentage", label: "Percentage" },
  { value: "fixedAmount", label: "Fixed amount" },
];

const customStyles = {
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
    };
  },
};

export default function DiscountType({ className, placeholder, control }) {
  return (
    <div className={className}>
      <DropdownSelect
        className="w-full"
        options={options}
        customStyles={customStyles}
        placeholder={placeholder}
        control={control}
        errorMessage="Please enter discount type"
      />
    </div>
  );
}
