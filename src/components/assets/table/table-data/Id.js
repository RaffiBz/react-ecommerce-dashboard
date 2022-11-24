import React from "react";

export default function Id({ id }) {
  return (
    <td className="px-6 py-3 w-[2.25rem]">
      <span className="text-activePage text-sm leading-5 font-secondaryFont font-medium">
        {id}
      </span>
    </td>
  );
}
