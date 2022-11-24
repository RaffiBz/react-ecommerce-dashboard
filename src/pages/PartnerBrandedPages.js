import React from "react";

import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import IntroDescription from "../components/Global/IntroDescription";
import GridSection from "../components/assets/branded-pages/GridSection";
import { AllBrandedPages } from "../data/BrandedPagesData";
import SearchCreateNew from "../components/assets/content-library/SearchCreateNew";

export default function PartnerBrandedPages() {
  return (
    <GlobalLayout>
      <Navbar path="branded pages"></Navbar>
      <div className="px-8">
        <IntroDescription
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ac maecenas placerat cursus dui in integer natoque facilisis. 
                Commodo id rutrum eros, aenean dolor netus elementum eu. Tempor magna faucibus interdum enim imperdiet consequat id lectus sit. 
                Odio dictum tristique posuere."
        />
        <div className="mt-[1.688rem]">
          <SearchCreateNew createNew={false} />
        </div>
        <GridSection
          className="mt-6 pb-[9.563rem]"
          items={AllBrandedPages}
          cardStyle="block w-full max-w-[15.938rem] bg-white shadow-brandCard rounded-[0.938rem] px-4 pt-4 pb-5"
          imgSize="w-[13.938rem] h-[12.313rem]"
          lineClamp="line-clamp-4"
          columns="grid-cols-3 xl:grid-cols-4"
        />
      </div>
    </GlobalLayout>
  );
}
