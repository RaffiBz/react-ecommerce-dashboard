import React from "react";

export default function Commission({ amount, unit }) {
  return (
    <td className="px-6 py-3">
      <span className="text-subtitle text-sm leading-5 font-secondaryFont font-medium">
        {amount}
      </span>
      <span className="block text-mediumGray text-xs leading-[1.125rem]">
        {unit}
      </span>
    </td>
  );
}
