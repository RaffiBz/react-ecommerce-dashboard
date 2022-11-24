import React from "react";

export default function IntroDescription({ text }) {
  return (
    <div className="w-full max-w-[40.188rem]">
      <span className="text-sm text-mediumGray font-secondaryFont leading-[1.063rem]">
        {text}
      </span>
    </div>
  );
}
