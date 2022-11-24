import React from "react";
import Icon from "../../../Icon";
import { useForm } from "react-hook-form";
import Modal from "../../UI/Modal";
import Button from "../button/Button";

import EmailInput from "../input/EmailInput";

export default function ForgotPasswordPopup({ onClose }) {
  //useForm custom hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit handler function
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal
      className="absolute top-[15vh] left-[25%] w-full max-w-[48.75rem] bg-white z-30 text-center rounded-[1.25rem]"
      onClose={onClose}
    >
      <form
        className="block relative w-full max-w-[48.75rem] text-center justify-center items-center bg-white rounded-[1.25rem] py-[6.813rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Button className="absolute top-8 right-8" onClick={onClose}>
          <Icon icon="Close" size={16} className="text-darkBlue" />
        </Button>
        <div className="w-full max-w-[22.875rem] mx-auto">
          <span className="block text-3xl text-title font-medium font-mainFont">
            Forgot your Password?
          </span>
          <span className="block text-base text-subtitle font-normal font-mainFont pt-2">
            Enter your registered e-mail address and we’ll send you a mail to
            reset your password.
          </span>
          <div className="mt-6 mx-auto">
            <EmailInput
              label="Email address"
              errors={errors}
              register={register}
            />
          </div>
          <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[22.875rem] rounded-lg mt-6">
            Reset Password
          </Button>
          <div className="flex mt-6 justify-center">
            <span className="text-grayBlue md:text-sm text-xs pr-[0.938rem]">
              didn't receive an email
            </span>
            <a
              href="/signin"
              className="md:text-sm text-xs text-primary font-bold"
            >
              Try again
            </a>
          </div>
        </div>
      </form>
    </Modal>
  );
}
