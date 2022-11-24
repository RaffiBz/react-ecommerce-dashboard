import React, { useState } from "react";

import FormInput from "../forms/FormInput";

export default function PaymentPeriodDaysInput({ register, errors }) {
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
      inputId="cookieDays"
      label="Payment period days"
      type="number"
      isRequired="required"
      defaultValue="30"
      register={register}
      errors={errors}
      errorMessage="Please enter the payment period"
      onHover={onHover}
      onLeave={onLeave}
      hover={hover}
      infoMessage="Pariatur occaecat velit nulla culpa sint eu velit mollit duis."
    />
  );
}
