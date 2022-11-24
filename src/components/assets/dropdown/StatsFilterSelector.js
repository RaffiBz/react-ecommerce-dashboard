import React from "react";
import Icon from "../../../Icon";

import Select, { components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon
          icon="Arrow Down"
          size={20}
          className={`${
            props.selectProps.menuIsOpen ? "rotate-180" : ""
          } text-darkBlue`}
        />
      </components.DropdownIndicator>
    )
  );
};

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

export default function StatsFilterSelector({
  className,
  options,
  placeholder,
  defaultValue,
  onChange,
}) {
  return (
    <div className={className}>
      <Select
        label="213"
        components={{ DropdownIndicator }}
        placeholder={placeholder}
        options={options}
        styles={customStyles}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}
