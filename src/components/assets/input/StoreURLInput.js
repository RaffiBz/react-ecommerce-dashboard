import React, { useState } from "react";
import FormInput from "../forms/FormInput";

export default function StoreURLInput({ errors, register }) {
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
      label="Your store’s URL"
      type="text"
      placeholder="ex. storedomain.com"
      inputId="storeUrl"
      errors={errors}
      register={register}
      onHover={onHover}
      onLeave={onLeave}
      hover={hover}
      infoMessage="Pariatur occaecat velit nulla culpa sint eu velit mollit duis."
    />
  );
}
