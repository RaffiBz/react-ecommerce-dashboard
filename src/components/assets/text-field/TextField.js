import React, { useState } from "react";

export default function TextField({
  title,
  placeholder,
  maxLength,
  minLength,
  className,
  inputId,
  register,
  errorMessage,
  message,
  errors,
}) {
  const [count, setCount] = useState(0);

  const remaining = maxLength - count;

  return (
    <div className={className}>
      <div className="flex justify-between">
        <span className="text-sm text-title leading-5">{title}</span>
        <div className="text-sm text-subtitleLightGray leading-5">
          <span>{remaining} </span>
          <span>characters</span>
        </div>
      </div>
      <textarea
        typeof="text"
        rows={5}
        className="w-full mt-[0.375rem] outline-none bg-white border border-secondaryLightGray focus:border-primary p-3 placeholder:text-lightGray text-sm leading-5 rounded-[0.313rem]"
        placeholder={placeholder}
        maxLength={maxLength}
        // minLength={minLength}
        id={inputId}
        {...register(inputId, {
          required: errorMessage,
          minLength: {
            value: minLength,
            message: message,
          },
        })}
        onChange={(e) => setCount(e.target.value.length)}
      />
      {errors[inputId] && (
        <span className="text-xs leading-5 text-errorRed">
          {errors[inputId].message}
        </span>
      )}
    </div>
  );
}
