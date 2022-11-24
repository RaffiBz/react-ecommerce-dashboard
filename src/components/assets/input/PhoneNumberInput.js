import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// import FormInput from "../forms/FormInput";

export default function PhoneNumberInput({ errors, register, disabled }) {
  const [value, setValue] = useState();
  return (
    <>
      <div className="block w-full max-w-[18.75rem]">
        <div className="flex justify-between">
          <label
            className="text-xs md:text-sm text-title lg:leading-[1.25rem] "
            htmlFor="phone"
          >
            Phone number
          </label>

          <span className="text-xs leading-5 text-mediumGray">Optional</span>
        </div>
        <PhoneInput
          international={false}
          countrySelectProps={{ unicodeFlags: true }}
          // defaultCountry="US"
          value={value}
          onChange={setValue}
          disabled={disabled}
          {...register("phoneNumber")}
          style={{
            height: "fit-content",
            padding: "8px",
            borderRadius: "5px",
            outline: "2px solid transparent",
            outlineOffset: "2px",
            placeholder: "red",
          }}
          className="block relative text-left rounded-[0.313rem] outline-none border border-secondaryLightGray bg-white mt-[0.375rem]"
        />
      </div>
      {/* <FormInput
        label="Phone number"
        type="number"
        placeholder="+1(000) 000-0000"
        inputId="phone"
        errors={errors}
        register={register}
        isRequired={false}
      /> */}
    </>
  );
}
