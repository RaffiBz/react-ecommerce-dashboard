import React, { useState } from "react";
import FormInput from "../forms/FormInput";

export default function ValueInput({
  id,
  label,
  infoMessage,
  placeholder,
  minLength,
  message,
  register,
  errors,
}) {
  //info box popup
  const [infoShown, setIsInfoShown] = useState(false);
  //show info box handler
  const showInfo = () => {
    setIsInfoShown(!infoShown);
  };
  return (
    <FormInput
      inputId={id}
      label={label}
      handleInfo={showInfo}
      infoShown={infoShown}
      infoMessage={infoMessage}
      type="number"
      placeholder={placeholder}
      isRequired="required"
      minLength={minLength}
      message={message}
      register={register}
      errors={errors}
      errorMessage="Please enter a value"
    />
  );
}
