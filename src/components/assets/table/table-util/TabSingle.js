import React from "react";

export default function TabSingle({ title, isActive, onClick }) {
  return (
    <div
      className={`${
        isActive ? "bg-gridBg" : "bg-white"
      } w-[10.375rem] text-center rounded-t-lg pt-[0.875rem] pb-[1.313rem]`}
      onClick={onClick}
    >
      <span className="text-title text-base font-medium">{title}</span>
    </div>
  );
}
