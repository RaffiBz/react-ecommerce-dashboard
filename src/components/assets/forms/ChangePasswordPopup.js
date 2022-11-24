import React from "react";
import { useForm } from "react-hook-form";
import Icon from "../../../Icon";
import Modal from "../../UI/Modal";
import Button from "../button/Button";

import PasswordInput from "../input/PasswordInput";

export default function ChangePasswordPopup({ onClose }) {
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
        className="block relative w-full max-w-[48.75rem] bg-white rounded-[1.25rem] py-[6.813rem] px-[5.375rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Button className="absolute top-8 right-8" onClick={onClose}>
          <Icon icon="Close" size={16} className="text-darkBlue" />
        </Button>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="block">
            <span className="block text-3xl text-title font-medium font-mainFont">
              Change Password
            </span>
            <span className="block text-base text-subtitle font-normal font-mainFont pt-2">
              Strong passwords must have at least 8 chacters, and at least 1
              symbol.
            </span>
          </div>

          <div className="block gap-6">
            <PasswordInput
              errors={errors}
              register={register}
              label="New Password"
              placeholder="write new password"
            />
            <div className="mt-6">
              <PasswordInput
                errors={errors}
                register={register}
                label="Confirm Password"
                placeholder="write new password"
              />
            </div>

            <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[22.875rem] rounded-lg mt-8">
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
