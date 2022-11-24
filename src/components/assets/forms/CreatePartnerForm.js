import React from "react";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
//form input imports
import EmailInput from "../input/EmailInput";
import FirstNameInput from "../input/FirstNameInput";
import LastNameInput from "../input/LastNameInput";
import PasswordInput from "../input/PasswordInput";
import PhoneNumberInput from "../input/PhoneNumberInput";
import UsernameInput from "../input/UsernameInput";

export default function CreatePartnerForm({ userName }) {
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
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <FirstNameInput errors={errors} register={register} />
        <LastNameInput errors={errors} register={register} />
        {userName && <UsernameInput errors={errors} register={register} />}
        <EmailInput label="Email address" errors={errors} register={register} />
        <PhoneNumberInput errors={errors} register={register} />
        <PasswordInput
          errors={errors}
          register={register}
          label="Password"
          placeholder="minimum of 8 characters"
        />
      </div>
      <div className="flex justify-end mt-8">
        <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg">
          Create
        </Button>
      </div>
    </form>
  );
}
