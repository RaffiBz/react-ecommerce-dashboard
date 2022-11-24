import React from "react";

export default function CheckboxSingle({ id, onChange, checked, disabled }) {
  return (
    <td className="w-4 p-4">
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        className="appearance-none h-4 w-4 bg-white hover:bg-checked-bg-hover checked:bg-checked-bg checked:bg-secondary bg-no-repeat bg-center focus:outline-none cursor-pointer drop-shadow-checkbox rounded-[0.25rem] shadow-checkbox disabled:bg-white disabled:cursor-not-allowed"
      />
    </td>
  );
}
