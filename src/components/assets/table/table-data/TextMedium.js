import React from "react";

export default function TextMedium({ text }) {
  return (
    <td className="px-6 py-3">
      <span className="w-full max-w-[6.25rem] text-subtitle text-sm leading-5 font-secondaryFont font-medium">
        {text}
      </span>
    </td>
  );
}
