import React from "react";

export default function ConversionRate({ rate }) {
  return (
    <td className="px-6 py-3">
      <span className="text-subtitle text-sm leading-5 font-secondaryFont font-medium">
        {rate}%
      </span>
    </td>
  );
}
