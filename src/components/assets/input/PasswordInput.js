import React, { useState } from "react";
import FormInput from "../forms/FormInput";

export default function PasswordInput({
  errors,
  register,
  label,
  placeholder,
  disabled,
}) {
  // password visibility
  const [passwordShown, setPasswordShown] = useState(false);
  //hover info display
  const [hover, setHover] = useState(false);

  // show password handler
  const showPassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  //on mouse enter function
  const onHover = () => {
    setHover(true);
  };
  //on mouse leave function
  const onLeave = () => {
    setHover(false);
  };
  return (
    <FormInput
      label={label}
      type={passwordShown ? "text" : "password"}
      placeholder={placeholder}
      inputId="password"
      minLength={8}
      errors={errors}
      register={register}
      message="Password should be more than 8 characters"
      isRequired={true}
      show={showPassword}
      disabled={disabled}
      source={
        passwordShown
          ? "/images/icons/form/eye-default.svg"
          : "/images/icons/form/eye-hidden.svg"
      }
      onHover={onHover}
      onLeave={onLeave}
      hover={hover}
      infoMessage="Passwords must have at least 8 characters, and at least 1 symbol."
      errorMessage="Please enter the password"
    />
  );
}
