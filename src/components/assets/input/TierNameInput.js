import React from "react";

export default function TierNameInput({
  register,
  inputId,
  minLength,
  message,
  placeholder,
}) {
  return (
    <div>
      <input
        className="w-full text-sm text-subtitle outline-none placeholder:text-subtitle placeholder:text-sm"
        type="text"
        placeholder={placeholder}
        id={inputId}
        {...register(inputId, {
          required: "Please enter the tier name",
          pattern: {
            minLength: {
              value: minLength,
              message: message,
            },
          },
        })}
      />
    </div>
  );
}
