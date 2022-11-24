import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import EmailInput from "../input/EmailInput";
import PasswordInput from "../input/PasswordInput";
import ForgotPasswordPopup from "./ForgotPasswordPopup";

export default function Login({ inactive }) {
  //popup state
  const [isShown, setIsShown] = useState(false);
  //popup handler functions
  const showPopupHandler = () => {
    setIsShown(true);
  };

  const hidePopupHandler = () => {
    setIsShown(false);
  };

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
    <form onSubmit={handleSubmit(loginHandler)}>
      <div className="block lg:flex gap-6 justify-between">
        {/* email input and validation */}
        <EmailInput
          label="Email address"
          errors={errors}
          register={register}
          disabled={inactive}
        />
        {/* password input and validation */}
        <PasswordInput
          errors={errors}
          register={register}
          label="Password"
          placeholder="minimum of 8 characters"
          disabled={inactive}
        />
      </div>
      <div className="flex justify-end mt-6">
        <Button
          className="text-primary text-xs leading-3 md:text-sm md:leading-4 cursor-pointer disabled:cursor-auto"
          onClick={showPopupHandler}
          disabled={inactive}
          type="button"
        >
          Forgot your Password?
        </Button>
      </div>
      <div className="block lg:flex justify-between mt-[1.375rem] items-center md:mt-[2.438rem]">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            disabled={inactive}
            className="appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox disabled:cursor-auto disabled:hover:bg-none"
            {...register("checkbox")}
          />
          <label className="text-grayBlue md:text-sm text-xs">
            Remember me
          </label>
        </div>
        <Button
          className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg"
          disabled={inactive}
        >
          Log in
        </Button>
      </div>
      {isShown && <ForgotPasswordPopup onClose={hidePopupHandler} />}
    </form>
  );
}
