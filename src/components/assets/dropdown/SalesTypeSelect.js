import React from "react";
import StatsFilterSelector from "./StatsFilterSelector";

const options = [
  { value: "All products", label: "All products" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
];

const customStyles = {
  indicatorSeparator: (styles) => ({
    ...styles,
    width: 0,
    padding: 0,
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "#1B2767",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    border: 0,
    fontSize: 16,
    color: "#1B2767",
  }),
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
        ? "#1B2767"
        : isSelected
        ? "#1B2767"
        : isFocused
        ? "#1B2767"
        : "#1B2767",
      "#FFFFF": "#C1D4E2",
      border: null,
    };
  },
};

export default function SalesTypeSelect() {
  return (
    <div className="flex max-w-[10rem]">
      <StatsFilterSelector
        className="w-full mt-[0.375rem]"
        options={options}
        customStyles={customStyles}
        defaultValue={options[0].label}
      />
    </div>
  );
}
