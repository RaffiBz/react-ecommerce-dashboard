import React from "react";
import { useForm } from "react-hook-form";
//redux imports
import { useDispatch } from "react-redux";
import { setBrandColor, reset } from "../../../store/features/setBrandColor";

import StoreNameInput from "../input/StoreNameInput";
import Button from "../button/Button";
import UploadProductImage from "../upload-image/UploadProductImage";
import Icon from "../../../Icon";
import ManageDashboard from "../../page/branding-colors/ManageDashboard";
import SetBrandingColors from "../../page/branding-colors/SetBrandingColors";
import SetDashboardColors from "../../page/branding-colors/SetDashboardColors";
import PartnersRegistrationPages from "../../page/branding-colors/PartnersRegistrationPages";

export default function SetBrandingColorForm() {
  const dispatch = useDispatch();

  //useForm custom hook
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({ mode: "onChange" });

  //form submit handler function
  const submitHandler = (data) => {
    // console.log(data);
    dispatch(
      setBrandColor({
        primaryColor: data.primaryColor,
        secondaryColor: data.secondaryColor,
        buttonTextPrimaryColor: data.buttonTextPrimaryColor,
        buttonTextSecondaryColor: data.buttonTextSecondaryColor,
        titleColor: data.titleColor,
        secondaryFirstColor: data.secondaryFirstColor,
        secondarySecondColor: data.secondarySecondColor,
        secondaryThirdColor: data.secondaryThirdColor,
        secondaryFourthColor: data.secondaryFourthColor,
      })
    );
  };

  const resetHandler = () => {
    dispatch(reset());
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="max-w-[46rem]">
      <div className="flex items-center justify-between">
        <span className="text-grayBlue text-lg leading-[1.375rem] font-semibold">
          Add Your Logo
        </span>
      </div>
      {/* logo image */}
      <div className="mt-4 flex gap-8 max-w-[27.563rem] items-end">
        <UploadProductImage
          dimensions="max-w-[6.813rem] max-h-[6.813rem]"
          btnPosition="bottom-[0.8rem] left-[2rem]"
          product={true}
        />
        <StoreNameInput errors={errors} register={register} />
      </div>
      {/* manage dashboard */}
      <ManageDashboard />
      {/* set branding colors */}
      <SetBrandingColors register={register} errors={errors} />
      {/* set dashboard colors */}
      <SetDashboardColors register={register} errors={errors} />
      {/* partners registration pages */}
      <PartnersRegistrationPages />
      {/* action buttons */}
      <div className="flex justify-end mt-12 gap-8">
        <Button
          className="flex gap-1 w-full items-center max-w-[8.625rem] "
          type="button"
          onClick={resetHandler}
        >
          <span className="text-grayBlue text-base leading-5">
            Reset all changes
          </span>
          <Icon
            icon="Reset"
            title="Reset"
            size={12}
            className="text-grayBlue"
          />
        </Button>
        <Button
          className="bg-primary text-buttonPrimary text-base leading-7 py-[0.625rem] text-center w-full max-w-[14.5rem] rounded-lg disabled:bg-lightGray disabled:cursor-not-allowed"
          disabled={!isDirty}
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
}
