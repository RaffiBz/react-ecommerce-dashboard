import React from "react";

export default function AutoconfirmPartnerCheckbox({ register }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox"
        // {...register("checkbox")}
      />
      <label className="text-grayBlue md:text-sm text-xs">
        Autoconfirm new partners
      </label>
    </div>
  );
}
