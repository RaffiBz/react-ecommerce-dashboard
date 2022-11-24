import React from "react";
import { useForm } from "react-hook-form";

import Button from "../button/Button";
import PaypalPayoutsSelect from "../dropdown/PaypalPayoutsSelect";
import PaypalCheckbox from "../input/PaypalCheckbox";
import PaypalIdInput from "../input/PaypalIdInput";

export default function PaypalIntegrationForm() {
  //useForm custom hook
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit handler function
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <span className="text-title text-2xl leading-7 font-medium uppercase">
        paypal payout integration
      </span>
      <span className="block text-grayBlue text-sm font-medium leading-[1.563rem] pt-2">
        in order to enable PayPal API payments for commission payout, you must
        generate and provide us with your PayPal account API keys. Visit our
        <a className="text-primary" href="/settings">
          PayPal Setup Guide
        </a>{" "}
        to see tutorial on where to find these keys.
      </span>
      <div className="flex gap-6 mt-[1.563rem]">
        <PaypalPayoutsSelect
          className="w-full max-w-[18.75rem]"
          control={control}
        />
        <PaypalIdInput
          label="Your Paypal Client ID"
          id="clientId"
          register={register}
          errors={errors}
          message="Please enter your PayPal Client ID"
        />
      </div>
      <div className="flex gap-6 mt-[1.375rem]">
        <PaypalIdInput
          label="Your PayPal Client Secret"
          id="clientSecretId"
          register={register}
          errors={errors}
          message="Please enter your PayPal Client Secret"
        />
        <PaypalIdInput
          label="Your Payout Webhook ID"
          id="webhookId"
          register={register}
          errors={errors}
          message="Please enter your PayPal Webhook ID"
        />
      </div>
      <div className="mt-8">
        <PaypalIdInput
          label="Email/Payment Subject Line"
          id="clientId"
          register={register}
          errors={errors}
          message=" Please enter email/payment subject line"
        />
      </div>
      <span className="block text-grayBlue text-sm font-medium leading-4 pt-9">
        This will be shown to payment recipients. It is a good idea to use
        something descriptive.
      </span>
      <PaypalCheckbox errors={errors} register={register} />
      <div className="flex justify-end mt-8">
        <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg">
          Save Changes
        </Button>
      </div>
    </form>
  );
}
