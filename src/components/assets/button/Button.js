import React from "react";

const Button = ({ id, onClick, className, children, type, disabled }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
