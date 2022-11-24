import React from "react";

export default function RegisteredDate({ date }) {
  return (
    <td className="px-6 py-3">
      <span className="w-full max-w-[6.25rem] text-subtitle text-sm leading-5 font-secondaryFont font-medium">
        {date}
      </span>
    </td>
  );
}
