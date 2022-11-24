import React from "react";
import { useForm } from "react-hook-form";

import Button from "../button/Button";
import GoalMeasurementType from "../dropdown/GoalMeasurementType";

export default function TierGoal() {
  //useForm custom hook
  const {
    control,
    // register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="block relative w-full max-w-[48.75rem] text-left justify-center items-center bg-white rounded-[1.25rem] shadow-profileCard py-[10.063rem]">
      <div className="w-full max-w-[25.688rem] mx-auto">
        <span className="block text-3xl text-title font-medium font-mainFont capitalize">
          goal measurement type
        </span>
        <span className="block text-base text-subtitle font-normal font-mainFont pt-4">
          Please select a goal measurement type for your tiers. This is a
          permanent selection. Editing Goal measurement type in the future will
          result in the full tier reset.
        </span>
        <GoalMeasurementType
          className="w-full mt-8"
          control={control}
          errors={errors}
        />
        <div className="mt-8">
          <a href="/tier-goal-measurement/add-new-tier">
            <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-2 text-center w-full max-w-[18.563rem] rounded-lg">
              Continue
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
