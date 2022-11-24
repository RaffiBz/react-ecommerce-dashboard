import React from "react";
import { useForm } from "react-hook-form";

import GoalMeasurementType from "../dropdown/GoalMeasurementType";
import TitleInput from "../input/TitleInput";
import ValueInput from "../input/ValueInput";
import TextField from "../text-field/TextField";
import UploadImage from "../upload-image/UploadImage";
import Button from "../button/Button";
import Icon from "../../../Icon";

export default function AddNewTierForm() {
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

  // console.log(errors);
  return (
    <form
      className="p-12 rounded-[1.25rem] shadow-profileCard max-w-[48.75rem] mx-4 lg:mx-8"
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="max-w-[17.813rem]">
        <TitleInput
          register={register}
          errors={errors}
          placeholder="Tier Name"
          inputId="tierName"
          errorMessage="Please enter the tier name"
        />
      </div>
      <div className="flex justify-between mt-5">
        <UploadImage
          register={register}
          errors={errors}
          fileId="image"
          errorMessage="Please upload an image"
        />
        <div className="block w-full max-w-[22.875rem]">
          <TextField
            title="Description"
            placeholder="write about the tier"
            maxLength={150}
            // minLength={3}
            inputId="textId"
            register={register}
            errors={errors}
            errorMessage="Please enter the description"
            message="Please enter at least 3 characters"
          />
          <GoalMeasurementType
            className="w-full mt-6"
            control={control}
            errors={errors}
          />
          <div className="mt-[1.375rem]">
            <ValueInput
              id="valueInput"
              label="Value"
              infoMessage="Minimum value number"
              placeholder="$"
              minLength="1"
              message="please enter a value"
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 items-center">
        <a href="/tier-goal-measurement">
          <Button
            className="flex  items-center w-full max-w-[3.375rem] justify-between"
            type="button"
          >
            <Icon icon="Arrow Left" size={16} className="text-primary" />
            <span className="text-primary text-sm leading-5">Back</span>
          </Button>
        </a>
        <Button
          className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[22.875rem] rounded-lg"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
