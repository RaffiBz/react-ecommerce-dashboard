import React from "react";

export default function Tier({ src, title }) {
  return (
    <td className="px-6 py-3">
      <div className="flex items-center">
        <img width={21.54} height={21.15} src={src} alt="tier" />
        <span className="text-sm text-subtitle leading-5 font-normal font-secondaryFont pr-[0.375rem]">
          {title}
        </span>
      </div>
    </td>
  );
}
