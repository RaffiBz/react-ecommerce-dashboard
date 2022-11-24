import React from "react";

import { DashboardColorData } from "../../../data/ColorPickerData";
import ColorPickerInput from "../../assets/input/ColorPickerInput";

export default function SetDashboardColors({ register, errors }) {
  return (
    <div className="pt-8 mt-8 border-t border-t-lightGrayBgOpacity">
      <div className="flex gap-[12.625rem]">
        <span className="text-grayBlue text-lg leading-[1.375rem] font-semibold">
          Set Dashboard Colors
        </span>
      </div>
      {/* color pickers */}
      <div className="grid grid-cols-2 gap-4 mt-6 max-w-[46rem]">
        {DashboardColorData.map((color) => (
          <ColorPickerInput
            key={color.id}
            title={color.title}
            inputId={color.id}
            opacity={color.opacity || false}
            defaultValue={color.defaultValue}
            errors={errors}
            register={register}
            isRequired={true}
            errorMessage="Please choose a color"
          />
        ))}
      </div>
    </div>
  );
}
