import React from "react";

const Input = ({
  id,
  type,
  name,
  handleClick,
  isChecked,
  className,
  placeholder,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
