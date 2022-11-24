import React from "react";
import FormInput from "../forms/FormInput";

export default function ProductNameInput({ errors, register }) {
  return (
    <FormInput
      label="Product name"
      type="text"
      placeholder="write the Product name"
      inputId="productName"
      errors={errors}
      register={register}
      isRequired={true}
      errorMessage="Please enter the product name"
    />
  );
}
