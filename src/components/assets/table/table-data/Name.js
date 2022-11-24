import React from "react";

export default function Name({ text, number, code, icon }) {
  return (
    <td className={`${icon ? "flex" : ""} px-6 py-3`}>
      {icon && <img src={icon} width={40} height={38} alt="icon" />}
      <div className={`${icon ? "pl-3" : ""} block`}>
        <span className="text-title text-sm leading-5 font-secondaryFont font-medium">
          {text}
        </span>
        <span className="block text-mediumGray text-xs leading-[1.125rem]">
          {code}
          {number}
        </span>
      </div>
    </td>
  );
}
