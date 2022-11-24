import React from "react";
import FormInput from "../forms/FormInput";

export default function PaypalIdInput({
  errors,
  register,
  label,
  id,
  message,
}) {
  return (
    <FormInput
      label={label}
      type="text"
      inputId={id}
      errors={errors}
      register={register}
      isRequired={true}
      errorMessage={message}
    />
  );
}
