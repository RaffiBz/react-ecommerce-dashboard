import React from "react";

export default function LinkInput({
  className,
  type,
  placeholder,
  value,
  ref,
}) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      ref={ref}
    />
  );
}
