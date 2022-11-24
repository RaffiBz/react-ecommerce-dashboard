import React from "react";
import { useForm } from "react-hook-form";

import PasswordInput from "../input/PasswordInput";
import Button from "../button/Button";

export default function CreateNewPasswordForm() {
  //useForm custom hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit handler function
  const loginHandler = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="pt-[3.5rem] justify-center text-center w-full max-w-[38.875rem] mx-auto h-screen"
    >
      <img
        src="/images/logo.png"
        width={133}
        height={86}
        className="mx-auto"
        alt="logo"
      />

      <div className="block lg:flex gap-20 text-left items-center justify-between mt-5 md:mt-[10rem] ">
        <div className="block text-2xl leading-5 md:text-[3rem] md:leading-[3.469rem] w-[54%]">
          <span className="text-title whitespace-pre-line font-normal">
            Create New
          </span>
          <span className="block text-primary whitespace-nowrap font-bold">
            Password
          </span>
        </div>
        <div>
          <span className="text-title text-xxs leading-3 md:text-base md:leading-6">
            Passwords must have at least 8 chacters, and at least 1 symbol.
          </span>
        </div>
      </div>
      <div className="mt-12">
        <PasswordInput
          errors={errors}
          register={register}
          label="New Password"
          placeholder="write new password"
        />
      </div>
      <div className="flex justify-end mt-8">
        <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[22.875rem] rounded-lg">
          Save
        </Button>
      </div>
    </form>
  );
}
