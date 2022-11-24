import React from "react";

import GridSection from "./GridSection";
import {
  AllBrandedPages,
  DashboardItems,
  LeftMenuItems,
} from "../../../data/BrandedPagesData";

export default function PublishedBrands() {
  return (
    <div className="bg-white">
      <GridSection
        className="mt-8 px-8 bg-white"
        title="Left Menu Items"
        items={LeftMenuItems}
        nullNotification="You don’t have left item branded page yet choose from all “branded
            pages list”"
        cardStyle="block w-full max-w-[15.938rem] bg-white shadow-brandCard rounded-[0.938rem] px-4 pt-4 pb-5"
        imgSize="w-[13.938rem] h-[12.313rem]"
        lineClamp="line-clamp-2"
        displayCheckbox={true}
        columns="grid-cols-3 xl:grid-cols-4"
      />
      <GridSection
        className="mt-8 px-8 bg-white"
        title="Dashboard Items"
        items={DashboardItems}
        nullNotification="You don’t have dashboard items yet choose from all “branded
            pages list”"
        cardStyle="block w-full max-w-[15.938rem] bg-white shadow-brandCard rounded-[0.938rem] px-4 pt-4 pb-5"
        imgSize="w-[13.938rem] h-[12.313rem]"
        lineClamp="line-clamp-2"
        displayCheckbox={true}
        columns="grid-cols-3 xl:grid-cols-4"
      />
      <GridSection
        className="mt-12 pt-12 px-8 pb-[9.563rem] bg-lightGrayBg"
        title="All Branded Pages"
        items={AllBrandedPages}
        cardStyle="block w-full max-w-[15.938rem] bg-white shadow-brandCard rounded-[0.938rem] px-4 pt-4 pb-5"
        imgSize="w-[13.938rem] h-[12.313rem]"
        lineClamp="line-clamp-2"
        displayCheckbox={true}
        columns="grid-cols-3 xl:grid-cols-4"
      />
    </div>
  );
}
