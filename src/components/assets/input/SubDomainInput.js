import React, { useState } from "react";
import FormInput from "../forms/FormInput";

export default function SubDomainInput({ errors, register }) {
  //hover info display
  const [hover, setHover] = useState(false);
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
      label="Ecommerce app subdomain"
      type="subdomain"
      value="ecommerce-123"
      inputId="subdomain"
      errors={errors}
      register={register}
      isRequired={true}
      errorMessage="Please enter a valid subdomain"
      onHover={onHover}
      onLeave={onLeave}
      hover={hover}
      infoMessage="Pariatur occaecat velit nulla culpa sint eu velit mollit duis."
    />
  );
}
