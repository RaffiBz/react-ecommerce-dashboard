import React from "react";
import DropdownSelect from "../../assets/dropdown/DropdownSelect";

const options = [
  { value: "all shop", label: "All Shop" },
  { value: "collection", label: "Collection" },
  { value: "product", label: "Product" },
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

export default function ListofProducts({ className, control }) {
  return (
    <div className={className}>
      <span className="text-sm text-title leading-5">List of Products</span>
      <DropdownSelect
        className="w-full mt-[0.375rem]"
        options={options}
        customStyles={customStyles}
        control={control}
        placeholder="Choose collection set"
        errorMessage="Please select one"
      />
    </div>
  );
}
