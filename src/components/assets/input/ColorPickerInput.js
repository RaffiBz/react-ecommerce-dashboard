import React from "react";

export default function ColorPickerInput({
  title,
  opacity,
  inputId,
  defaultValue,
  errors,
  register,
  isRequired,
  errorMessage,
}) {
  return (
    <div className="flex justify-between w-full bg-white max-w-[22.5rem] px-6 py-[0.625rem] items-center shadow-profileCard rounded-lg mt-4">
      <div className="flex gap-1">
        {opacity && (
          <div className="flex gap-1 items-center">
            <div className={`${opacity} w-[10px] h-[10px] rounded-full`}></div>
            <div
              className={`${opacity} w-[10px] h-[10px] rounded-full bg-opacity-30`}
            ></div>
            <div
              className={`${opacity} w-[10px] h-[10px] rounded-full bg-opacity-[0.15]`}
            ></div>
          </div>
        )}
        <span className="text-title text-base leading-5 font-bold">
          {title}
        </span>
      </div>
      <input
        type="color"
        id={inputId}
        defaultValue={defaultValue}
        className="appearance-none h-8 w-8 border-none bg-transparent bg-picker-bg bg-no-repeat bg-center cursor-pointer rounded-lg"
        // onChange={setNewColorHandler}
        {...register(inputId, {
          required: isRequired && errorMessage,
        })}
      />
      {errors[inputId] && (
        <span className="text-xs leading-5 text-errorRed">
          {errors[inputId].message}
        </span>
      )}
    </div>
  );
}
