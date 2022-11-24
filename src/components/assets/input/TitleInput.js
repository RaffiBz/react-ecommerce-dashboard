import React from "react";
import FormInput from "../forms/FormInput";

export default function TitleInput({
  errors,
  register,
  placeholder,
  inputId,
  errorMessage,
  label,
}) {
  return (
    <FormInput
      label={label}
      type="text"
      placeholder={placeholder}
      inputId={inputId}
      errors={errors}
      register={register}
      isRequired={true}
      errorMessage={errorMessage}
    />
  );
}
