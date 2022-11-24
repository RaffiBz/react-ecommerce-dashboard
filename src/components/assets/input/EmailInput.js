import React from "react";
import FormInput from "../forms/FormInput";

export default function EmailInput({ errors, register, label, disabled }) {
  return (
    <FormInput
      label={label}
      type="email"
      placeholder="example: ecommerce@app.com"
      inputId="email"
      minLength={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
      errors={errors}
      register={register}
      message="Email format is invalid"
      isRequired={true}
      errorMessage="Please enter your email"
      disabled={disabled}
    />
  );
}
