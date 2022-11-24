import React from "react";

import GridSection from "./GridSection";
import {
  AllBrandedPages,
  DashboardItems,
} from "../../../data/BrandedPagesData";
import BlankGrid from "./BlankGrid";

export default function TemplateGrid() {
  return (
    <div>
      <div className="flex gap-5">
        <BlankGrid />
        <GridSection
          className="mt-8 bg-white"
          title="My Templates"
          items={DashboardItems}
          cardStyle="block w-full max-w-[15.938rem] bg-white shadow-brandCard rounded-[0.938rem] px-4 py-4"
          imgSize="w-[13.938rem] h-[9.25rem]"
          lineClamp="line-clamp-3"
          columns="grid-cols-2 xl:grid-cols-3"
        />
      </div>
      <GridSection
        className="mt-8 pb-[5.25rem] bg-white"
        title="Dashboard Template"
        items={AllBrandedPages}
        cardStyle="block w-full max-w-[15.938rem] bg-white shadow-brandCard rounded-[0.938rem] px-4 py-4"
        imgSize="w-[13.938rem] h-[9.25rem]"
        lineClamp="line-clamp-3"
        columns="grid-cols-3 xl:grid-cols-4"
      />
    </div>
  );
}
