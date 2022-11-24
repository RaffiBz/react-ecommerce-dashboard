import React from "react";

export default function Plan({ plan, description }) {
  return (
    <td className="px-6 py-3">
      {/* <span className="text-subtitle text-sm leading-5 font-secondaryFont font-semibold">
        {plan}:
      </span> */}
      <span className="text-subtitle text-sm leading-5 font-secondaryFont font-regular">
        {description}
      </span>
    </td>
  );
}
