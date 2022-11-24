import React from "react";

export default function BrandTabTitles({ openTab, setOpenTab }) {
  return (
    <ul className="flex list-none gap-8 flex-wrap mt-6 flex-row" role="tablist">
      <li
        className={`${
          openTab === 1
            ? "text-title border-b-primary"
            : "text-grayBlue border-b-transparent"
        } text-base leading-[1.375rem] pb-[0.625rem] border-b-2`}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          data-toggle="tab"
          href="#link1"
          role="tablist"
        >
          Published Brands
        </a>
      </li>
      <li
        className={`${
          openTab === 2
            ? "text-title border-b-primary"
            : "text-grayBlue border-b-transparent"
        } text-base leading-[1.375rem] pb-[0.625rem] border-b-2`}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          data-toggle="tab"
          href="#link2"
          role="tablist"
        >
          Unpublished Brands
        </a>
      </li>
    </ul>
  );
}
