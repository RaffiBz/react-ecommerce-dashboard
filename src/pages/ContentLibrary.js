import React from "react";

import { ProductList } from "../data/ProductList";
import IntroDescription from "../components/Global/IntroDescription";
import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import SearchCreateNew from "../components/page/content-library/SearchCreateNew";
import PartnerContentGrid from "../components/page/content-library/PartnerContentGrid";

export default function ContentLibrary() {
  return (
    <GlobalLayout>
      <Navbar path="content library"></Navbar>
      <div className="px-8">
        <IntroDescription
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ac maecenas placerat cursus dui in integer natoque facilisis. 
                Commodo id rutrum eros, aenean dolor netus elementum eu. Tempor magna faucibus interdum enim imperdiet consequat id lectus sit. 
                Odio dictum tristique posuere."
        />
        <div className="mt-[1.688rem]">
          <SearchCreateNew createNew={false} />
        </div>
        <PartnerContentGrid products={ProductList} />
      </div>
    </GlobalLayout>
  );
}
