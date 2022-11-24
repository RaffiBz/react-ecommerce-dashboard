import React from "react";

import FormInput from "../forms/FormInput";

export default function CookieDaysInput({ register, errors }) {
  return (
    <FormInput
      inputId="cookieDays"
      label="Cookie days"
      type="number"
      isRequired="required"
      defaultValue="30"
      register={register}
      errors={errors}
      errorMessage="Please enter a value"
    />
  );
}
