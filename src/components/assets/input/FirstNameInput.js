import React from "react";
import FormInput from "../forms/FormInput";

export default function FirstNameInput({ errors, register, disabled }) {
  return (
    <FormInput
      label="First name"
      type="text"
      placeholder="write your first name"
      inputId="firstName"
      errors={errors}
      register={register}
      isRequired={true}
      disabled={disabled}
      errorMessage="Please enter your first name"
    />
  );
}
