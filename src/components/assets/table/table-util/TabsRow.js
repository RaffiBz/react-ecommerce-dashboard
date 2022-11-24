import React from "react";

export default function TabsRow({ openTab, setOpenTab }) {
  return (
    <div className="flex -mb-[4px]">
      <ul
        className="flex list-none justify-between flex-wrap flex-row"
        role="tablist"
      >
        <li
          className={`${
            openTab === 1 ? "bg-gridBg" : "bg-white"
          } w-[10.375rem] text-title text-base font-medium text-center rounded-t-lg pt-[0.875rem] pb-[1.313rem]`}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            data-target="#trait"
            href="#trait"
            role="tablist"
          >
            Active partners
          </a>
        </li>
        <li
          className={`${
            openTab === 2 ? "bg-gridBg" : "bg-white"
          } w-[10.375rem] text-title text-base font-medium text-center rounded-t-lg pt-[0.875rem] pb-[1.313rem]`}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            data-target="#trait"
            href="#trait"
            role="tablist"
          >
            New requests
          </a>
        </li>
        <li
          className={`${
            openTab === 3 ? "bg-gridBg" : "bg-white"
          } w-[10.375rem] text-title text-base font-medium text-center rounded-t-lg pt-[0.875rem] pb-[1.313rem]`}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            data-target="#trait"
            href="#trait"
            role="tablist"
          >
            Rejected
          </a>
        </li>
      </ul>
    </div>
  );
}
