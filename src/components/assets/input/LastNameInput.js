import React from "react";
import FormInput from "../forms/FormInput";

export default function LastNameInput({ errors, register, disabled }) {
  return (
    <FormInput
      label="Last name"
      type="text"
      placeholder="write your last name"
      inputId="lastName"
      errors={errors}
      register={register}
      isRequired={true}
      disabled={disabled}
      errorMessage="Please enter your last name"
    />
  );
}
