import React from "react";
import { useForm } from "react-hook-form";

import GoalMeasurementType from "../dropdown/GoalMeasurementType";
import Button from "../button/Button";
import Icon from "../../../Icon";

export default function TierSettingForm() {
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
    <form className="" onSubmit={handleSubmit(submitHandler)}>
      <div className="text-center mx-auto">
        <span className="uppercase block text-3xl text-title font-medium font-mainFont">
          Tier measure type
        </span>
        <div className="flex mt-4 justify-center">
          <Icon icon="Warning" size={24} className="text-errorRed" />
          <span className="text-grayBlue text-base leading-7 pl-2">
            Editing tier measurment type will result in the full tier reset.
          </span>
        </div>
      </div>
      <div className="w-full max-w-[39.375rem] mx-auto bg-white shadow-profileCard pt-[2.625rem] pb-[4.75rem] rounded-[1.25rem] mt-[5.375rem]">
        <div className="block w-full max-w-[22.875rem] mx-auto">
          <GoalMeasurementType
            className="w-full"
            register={register}
            control={control}
            errors={errors}
          />
          <Button
            className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[22.875rem] mt-[2.875rem] rounded-lg"
            type="submit"
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
