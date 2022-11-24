import React from "react";

export default function Checkbox({ data, handleClick, isCheck }) {
  return (
    <td className="w-4 p-4">
      <input
        type="checkbox"
        name={data.id}
        id={data.id}
        onChange={handleClick}
        checked={isCheck}
        className="appearance-none h-4 w-4 bg-white checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center bg-cover focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox"
      />
    </td>
  );
}
