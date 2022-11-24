import React from "react";
import { useForm } from "react-hook-form";

import Card from "../../UI/Card";
import EmailInput from "../input/EmailInput";
import Button from "../button/Button";
import CheckboxInput from "../input/CheckboxInput";

export default function PayPalPaymentPartner() {
  //useForm custom hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit handler function
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <Card className="shadow-profileCard p-12 max-w-[45rem] rounded-[1.25rem]">
      <form onSubmit={handleSubmit(submitHandler)}>
        <span className="text-title text-2xl leading-7 font-medium uppercase">
          payment setting
        </span>
        <span className="block text-grayBlue text-sm font-medium leading-[1.563rem] pt-2">
          View our
          <a className="text-primary" href="/settings">
            Terms
          </a>{" "}
          and accept.
        </span>
        <div className="mt-[1.875rem]">
          <span className="text-title text-lg">Paypal Payments</span>
        </div>
        <div className="mt-4">
          <EmailInput
            label="Paypal email"
            register={register}
            errors={errors}
          />
        </div>
        <div className="mt-6">
          <CheckboxInput
            errors={errors}
            register={register}
            text="Use this method to receive payments"
            terms={false}
          />
        </div>
        <div className="flex justify-start mt-8">
          <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg">
            Save Changes
          </Button>
        </div>
      </form>
    </Card>
  );
}
