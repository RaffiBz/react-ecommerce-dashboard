import React from "react";

export default function StatSingle({ background, number, text }) {
  return (
    <div
      className={`${background} block w-full text-center py-[1.563rem] px-1 1xl:px-4 rounded-xl`}
    >
      <span className="text-2xl text-title leading-5 font-medium">
        {number}
      </span>
      <span className="block text-grayBlue text-base leading-[1.375rem] pt-2 capitalize whitespace-pre-line">
        {text}
      </span>
    </div>
  );
}
