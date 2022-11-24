import React from "react";

import { AllBrandedPages } from "../../../data/BrandedPagesData";
import GridSection from "./GridSection";

export default function UnpublishedBrands() {
  return (
    <div>
      <GridSection
        className="mt-8 px-8 pb-[3.375rem] bg-white"
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
