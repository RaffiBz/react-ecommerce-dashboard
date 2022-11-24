import React from "react";

export default function CheckboxInput({
  register,
  errors,
  text,
  terms,
  disabled,
}) {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        disabled={disabled}
        {...register("checkbox", { required: true })}
        className={`${
          errors.checkbox ? "border border-red-800" : ""
        } appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox disabled:bg-white disabled:cursor-not-allowed`}
      />
      <label className="text-grayBlue md:text-sm text-xs">
        {text}{" "}
        {terms && (
          <a href="." className="text-primary font-bold">
            terms and conditions.
          </a>
        )}
      </label>
    </div>
  );
}
