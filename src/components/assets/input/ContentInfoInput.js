import React, { useState } from "react";

import FormInput from "../forms/FormInput";

export default function ContentInfoInput({ errors, register }) {
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
      label="Content info"
      type="text"
      placeholder="example:facebook post1200x1200"
      inputId="contentInput"
      minLength={8}
      errors={errors}
      register={register}
      isRequired={true}
      onHover={onHover}
      onLeave={onLeave}
      hover={hover}
      infoMessage="Write more information about the post content like platform name with proportions."
      errorMessage="Please enter the content info"
    />
  );
}
