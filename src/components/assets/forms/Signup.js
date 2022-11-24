import React from "react";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
//redux imports
// import { useDispatch, useSelector } from "react-redux";
// import { userSignUp } from "../../../store/features/userSignup";
//socket import
// import io from "socket.io-client";
//input imports
import PasswordInput from "../input/PasswordInput";
import EmailInput from "../input/EmailInput";
import UsernameInput from "../input/UsernameInput";
import LastNameInput from "../input/LastNameInput";
import FirstNameInput from "../input/FirstNameInput";
import PhoneNumberInput from "../input/PhoneNumberInput";
import CheckboxInput from "../input/CheckboxInput";

export default function Signup({ inactive }) {
  // const dispatch = useDispatch();
  // const socket = useSelector((state) => state.socket.value);

  // console.log(socket.socketConnect);
  // const socket = io("");
  //useForm custom hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit handler function
  const onSubmit = (data) => {
    console.log(data);
    // socket.socketConnect.emit("registerPartner", (sendData) => {
    // dispatch(
    //   userSignUp({
    //     checkbox: data.checkbox,
    //     email: data.email,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     password: data.password,
    //     phoneNumber: data.phoneNumber,
    //     username: data.username,
    //   })
    // );
    // });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between">
        {/* first name input and validation */}
        <FirstNameInput
          errors={errors}
          register={register}
          disabled={inactive}
        />

        {/* last name input and validation */}
        <LastNameInput
          errors={errors}
          register={register}
          disabled={inactive}
        />

        {/* username input and validation */}
        <UsernameInput
          errors={errors}
          register={register}
          disabled={inactive}
        />

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

        {/* phone number */}
        <PhoneNumberInput
          errors={errors}
          register={register}
          disabled={inactive}
        />
      </div>
      {/* checkbox & submit button */}
      <div className="block lg:flex justify-between mt-[1.875rem] items-center md:mt-[3.125em]">
        {/* terms checkbox */}
        <CheckboxInput
          errors={errors}
          register={register}
          text="I agree with"
          terms={true}
          disabled={inactive}
        />
        <Button
          className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg"
          disabled={inactive}
        >
          Register
        </Button>
      </div>
    </form>
  );
}
