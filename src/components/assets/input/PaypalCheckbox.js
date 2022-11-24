import React from "react";

export default function PaypalCheckbox({ register, errors }) {
  return (
    <div className="block bg-bgGrayopacity p-6 mt-[2.125rem]">
      <div className="flex gap-2">
        <div className="w-4">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            {...register("checkbox", { required: true })}
            className={`${
              errors.checkbox ? "border border-red-800" : ""
            } appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox`}
          />
        </div>
        <div>
          <span className="text-grayBlue md:text-sm text-xs">
            I allow Ecommerce to store my PayPal API information. Ecommerce will
            store these securely. The eterms of this relationship are governed
            by Ecommerce’s Terms of Service and Privacy Policy
          </span>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="w-4">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            {...register("checkbox", { required: true })}
            className={`${
              errors.checkbox ? "border border-red-800" : ""
            } block appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox`}
          />
        </div>
        <div>
          <span className="text-grayBlue md:text-sm text-xs">
            I understand that Ecommerce will have access to move funds outside
            of my PayPal account using these credentials.
          </span>
        </div>
      </div>
    </div>
  );
}
