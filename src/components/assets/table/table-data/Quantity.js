import React from "react";

export default function Quantity({ amount }) {
  return (
    <td className="px-6 py-3">
      <span className="text-subtitle text-sm leading-5 font-secondaryFont font-medium">
        {amount}
      </span>
    </td>
  );
}
