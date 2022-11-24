import React, { useState } from "react";
import { useForm } from "react-hook-form";
//from input imports
import FirstNameInput from "../input/FirstNameInput";
import LastNameInput from "../input/LastNameInput";
import UsernameInput from "../input/UsernameInput";
import EmailInput from "../input/EmailInput";
import PhoneNumberInput from "../input/PhoneNumberInput";
//button import
import Button from "../button/Button";
import ChangePasswordPopup from "./ChangePasswordPopup";

export default function ProfileForm({ userName }) {
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
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <FirstNameInput errors={errors} register={register} />
        <LastNameInput errors={errors} register={register} />
        {userName && <UsernameInput errors={errors} register={register} />}
        <EmailInput label="Email address" errors={errors} register={register} />
        <PhoneNumberInput errors={errors} register={register} />
      </div>
      <div className="mt-8 flex justify-between">
        <Button className="text-base text-primary" onClick={showPopupHandler}>
          Change Password
        </Button>
        <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg">
          Save Changes
        </Button>
      </div>
      {isShown && <ChangePasswordPopup onClose={hidePopupHandler} />}
    </form>
  );
}
