import React from "react";
import DropdownSelect from "./DropdownSelect";
import InfoPopup from "../info-popup/InfoPopup";

const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
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
    };
  },
};

export default function PaypalPayoutsSelect({ className, control }) {
  return (
    <div className={`${className} relative`}>
      <div className="flex justify-between">
        <span className="text-sm text-title leading-5">
          Enable PayPal Payouts
        </span>
        <InfoPopup color="text-errorRed" text="info" />
      </div>
      <DropdownSelect
        className="w-full mt-[0.375rem]"
        options={options}
        customStyles={customStyles}
        control={control}
        // placeholder="Select Measurement type..."
        // defaultValue="yes"
        errorMessage="Please select one measurement type"
      />
    </div>
  );
}
