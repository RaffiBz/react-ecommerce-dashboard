import React from "react";

export default function SwitchButton({ className, checked, id, onChange }) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id={id}
          name={id}
          onChange={onChange}
          checked={checked}
          className="sr-only peer"
        />
        <div className="w-[3.188rem] h-[1.938rem] bg-bgGray peer-focus:outline-none rounded-full peer-checked:after:translate-x-[80%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.688rem] after:w-[1.688rem] after:transition-all peer-checked:bg-primary"></div>
      </label>
    </div>
  );
}
