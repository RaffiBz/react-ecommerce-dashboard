import React from "react";
import { useForm } from "react-hook-form";
import TextCheckbox from "../../Global/TextCheckbox";

import TextArea from "../../assets/text-field/TextArea";
import UploadProductImage from "../../assets/upload-image/UploadProductImage";
import AllElements from "./AllElements";

export default function CreatorFunctionsColumn() {
  //useForm custom hook
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-[17.5%] border border-lightGray rounded-[1.25rem]">
      <div className="bg-lightGray bg-opacity-10 items-center text-center py-4 px-4">
        <UploadProductImage
          dimensions="w-full max-w-[9.875rem] h-[7.063rem]"
          btnPosition="bottom-[0.875rem] left-[3.625rem]"
          product={true}
        />
        <TextArea
          dimensions="w-full mt-2"
          rows={2}
          textId="title"
          placeholder="Write title here"
          className="w-full border-dashed outline-none bg-transparent border border-lightGray focus:border-primary p-2 placeholder:text-lightGray text-title text-xs leading-[0.875rem] resize-none rounded-lg"
          register={register}
        />
        <TextArea
          dimensions="w-full mt-2"
          rows={4}
          textId="description"
          placeholder="Write short description"
          className="w-full border-dashed outline-none bg-transparent border border-lightGray focus:border-primary p-2 placeholder:text-lightGray text-title text-xs leading-[0.875rem] resize-none rounded-lg"
          register={register}
        />
        <div className="text-left pt-2">
          <TextCheckbox
            direction="flex-row-reverse"
            title="Display on left menu"
          />
          <TextCheckbox
            direction="flex-row-reverse mt-4"
            title="Display on dashboard"
          />
        </div>
        <div className="border-y border-y-lightGrayOpacity text-left py-4 mt-4">
          <TextCheckbox
            direction="flex-row-reverse"
            title="Convert to template"
          />
        </div>
        <UploadProductImage
          dimensions="w-full max-w-[3.688rem] h-[3.688rem] mt-4"
          btnPosition="bottom-[0] left-[0.625rem]"
          product={true}
        />
      </div>
      <div className="bg-primary bg-opacity-[0.15] py-6 px-4 rounded-b-[1.25rem]">
        <AllElements />
      </div>
    </div>
  );
}
