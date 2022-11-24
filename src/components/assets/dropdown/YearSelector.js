import React from "react";
import StatsFilterSelector from "./StatsFilterSelector";

const options = [
  { value: "2020", label: "2020" },
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
    color: "#6E7CA7",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    border: 0,
    fontSize: 16,
    color: "#6E7CA7",
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
        ? "#6E7CA7"
        : isSelected
        ? "#6E7CA7"
        : isFocused
        ? "#6E7CA7"
        : "#6E7CA7",
      "#FFFFF": "#C1D4E2",
      border: null,
    };
  },
};

export default function YearSelector() {
  return (
    <div className="flex max-w-[6rem]">
      <StatsFilterSelector
        className="w-full mt-[0.375rem]"
        options={options}
        customStyles={customStyles}
        defaultValue={options[0].label}
      />
    </div>
  );
}
