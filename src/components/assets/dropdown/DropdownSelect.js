import React from "react";

import Select, { components } from "react-select";
import { Controller } from "react-hook-form";
import Icon from "../../../Icon";

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

export default function DropdownSelect({
  className,
  options,
  customStyles,
  placeholder,
  control,
  errorMessage,
  defaultValue,
}) {
  return (
    <div className={className}>
      <Controller
        name="sel"
        control={control}
        rules={{ required: errorMessage }}
        render={({ field, fieldState }) => (
          <div>
            <Select
              {...field}
              label="213"
              components={{ DropdownIndicator }}
              placeholder={placeholder}
              options={options}
              styles={customStyles}
              defaultInputValue={defaultValue}
            />
            {fieldState?.error && (
              <span className="text-xs leading-5 text-errorRed">
                {fieldState?.error?.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
}
