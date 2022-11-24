import React from "react";
import { useForm } from "react-hook-form";

import Card from "../../UI/Card";
import Button from "../button/Button";
import TimezoneSelector from "../dropdown/TimezoneSelector";
import CookieDaysInput from "../input/CookieDaysInput";
import PaymentPeriodDaysInput from "../input/PaymentPeriodDaysInput";
import StoreURLInput from "../input/StoreURLInput";
import SubDomainInput from "../input/SubDomainInput";

export default function MerchantGeneralSettingForm() {
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
    <Card className="shadow-profileCard p-12 max-w-[45rem] rounded-[1.25rem] mt-8">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <SubDomainInput errors={errors} register={register} />
          </div>
          <div className="col-span-2">
            <StoreURLInput errors={errors} register={register} />
          </div>
          <TimezoneSelector />
          <CookieDaysInput errors={errors} register={register} />
        </div>
        <div className="mt-6">
          <PaymentPeriodDaysInput errors={errors} register={register} />
        </div>
        <div className="flex justify-between mt-8 items-center">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox"
              {...register("checkbox")}
            />
            <label className="text-grayBlue md:text-sm text-xs">
              Autoconfirm new partners
            </label>
          </div>
          <Button className="bg-primary text-buttonPrimary text-sm leading-5 md:text-base md:leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg">
            Save Changes
          </Button>
        </div>
      </form>
    </Card>
  );
}
