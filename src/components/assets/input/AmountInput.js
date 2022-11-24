import React from "react";

export default function AmountInput({
  inputId,
  register,
  placeholder,
  minLength,
  message,
  unit,
  className,
}) {
  return (
    <div className={className}>
      <input
        className="w-full text-sm text-mediumGray outline-none placeholder:text-subtitle placeholder:text-sm"
        type="text"
        placeholder={placeholder}
        id={inputId}
        {...register(inputId, {
          required: "This field is required",
          pattern: {
            minLength: {
              value: minLength,
              message: message,
            },
          },
        })}
      />
      <span className="text-sm text-mediumGray text-right">{unit}</span>
    </div>
  );
}
