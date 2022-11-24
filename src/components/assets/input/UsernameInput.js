import React from "react";
import FormInput from "../forms/FormInput";

export default function UsernameInput({ errors, register }) {
  return (
    <FormInput
      label="Username"
      type="text"
      placeholder="write your username"
      inputId="username"
      minLength={8}
      errors={errors}
      register={register}
      message="Username should be more than 8 characters"
      isRequired={true}
      errorMessage="Please enter username"
    />
  );
}
