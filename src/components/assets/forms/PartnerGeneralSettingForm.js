import React from "react";
import { useForm } from "react-hook-form";

import Card from "../../UI/Card";
import Button from "../button/Button";
import TimezoneSelector from "../dropdown/TimezoneSelector";

export default function PartnerGeneralSettingForm() {
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
    <Card className="shadow-profileCard p-12 max-w-[24.75rem] rounded-[1.25rem] mt-8">
      <form onSubmit={handleSubmit(submitHandler)}>
        <TimezoneSelector register={register} errors={errors} />
        <div className="mt-2">
          <span className="text-grayBlue text-sm">
            We will display dates in this timezone.
          </span>
        </div>
        <Button className="bg-primary text-buttonPrimary text-base leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg mt-8">
          Save Changes
        </Button>
      </form>
    </Card>
  );
}
