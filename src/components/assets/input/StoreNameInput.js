import React, { useState } from "react";
import FormInput from "../forms/FormInput";

export default function StoreNameInput({ errors, register }) {
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
      label="Store name"
      type="text"
      placeholder="write your store name"
      inputId="storeName"
      errors={errors}
      register={register}
      onHover={onHover}
      onLeave={onLeave}
      hover={hover}
      infoMessage="Pariatur occaecat velit nulla culpa sint eu velit mollit duis."
    />
  );
}
