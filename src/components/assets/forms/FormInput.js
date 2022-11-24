import React from "react";
import Icon from "../../../Icon";

export default function FormInput({
  label,
  type,
  placeholder,
  defaultValue,
  inputId,
  errors,
  register,
  minLength,
  message,
  isRequired,
  show,
  source,
  onHover,
  onLeave,
  hover,
  infoMessage,
  errorMessage,
  value,
  disabled,
}) {
  return (
    <div className="block w-full">
      <div className="flex relative justify-between">
        <label
          className="text-xs md:text-sm text-title lg:leading-[1.25rem] "
          htmlFor={inputId}
        >
          {label}
        </label>
        <div className="flex gap-2">
          {!isRequired && (
            <span className="text-xs leading-5 text-mediumGray">Optional</span>
          )}
          {onHover && (
            <Icon
              icon="Info"
              size={12}
              className="text-[#868FA0] cursor-pointer"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            />
          )}
        </div>
        {hover && (
          <div className="p-4 absolute w-full max-w-[15.625rem] -top-[80px] right-[7px] rounded-lg shadow-infoPopup bg-white after:border-solid after:border-t-white after:border-t-8 after:border-x-transparent after:border-x-8 after:border-b-0 after:absolute after:-bottom-[8px] after:right-2">
            <span className="text-xs text-title">{infoMessage}</span>
          </div>
        )}
      </div>
      <div className="flex relative text-left rounded-[0.313rem] outline-none border border-secondaryLightGray bg-white py-2 px-3 mt-[0.375rem] border-solid active:border-checkboxBg">
        <input
          className="w-full text-subtitle outline-none placeholder:text-lightGray placeholder:text-xs"
          type={type}
          placeholder={placeholder}
          id={inputId}
          defaultValue={defaultValue}
          value={value}
          disabled={disabled}
          {...register(inputId, {
            required: isRequired && errorMessage,
            minLength: {
              value: minLength,
              message: message,
            },
          })}
        />
        {show && (
          <img src={source} alt="eye" width={16} height={16} onClick={show} />
        )}
      </div>
      {errors[inputId] && (
        <span className="text-xs leading-5 text-errorRed">
          {errors[inputId].message}
        </span>
      )}
    </div>
  );
}
