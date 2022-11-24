import React from "react";
import SwitchButton from "../../../assets/button/SwitchButton";
import AmountInput from "../../../assets/input/AmountInput";
// import TierNameInput from "../../input/TierNameInput";
import DiscountType from "./DiscountType";
import TierName from "./TierName";

export default function TierRow({ register, name, className, control, id }) {
  return (
    <div className={className}>
      {/* <TierNameInput
        register={register}
        inputId="tierName"
        minLength={7}
        message="required"
        placeholder="Tier Name 1"
      /> */}
      <TierName name={name} className="w-full max-w-[5rem]" />
      <DiscountType
        className="w-full max-w-[12.375rem] ml-[2.125rem]"
        placeholder="discount type"
        control={control}
      />
      <AmountInput
        register={register}
        inputId="commission"
        minLength="1"
        message="required"
        unit="%"
        className="flex border w-full max-w-[8.313rem] border-lightGray rounded-[0.313rem] p-2 ml-4"
      />
      <AmountInput
        register={register}
        inputId="discount"
        minLength="1"
        message="required"
        unit="%"
        className="flex border w-full max-w-[8.313rem] border-lightGray rounded-[0.313rem] p-2 ml-4"
      />
      <SwitchButton className="ml-[2.25rem] h-[1.938rem]" id={id} />
    </div>
  );
}
