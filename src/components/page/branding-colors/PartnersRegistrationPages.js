import React from "react";
import BoxArrowLink from "../../Global/BoxArrowLink";

export default function PartnersRegistrationPages() {
  return (
    <div className="pt-8 mt-8 border-t border-t-lightGrayBgOpacity">
      <div className="flex gap-[12.625rem]">
        <span className="text-grayBlue text-lg leading-[1.375rem] font-semibold">
          Partners Registration Pages
        </span>
      </div>
      <div className="flex justify-between mt-6 gap-4">
        <BoxArrowLink text="Partner sign up page" link="/edit-signup" />
        <BoxArrowLink text="Partner sign in page" link="/edit-signin" />
      </div>
    </div>
  );
}
