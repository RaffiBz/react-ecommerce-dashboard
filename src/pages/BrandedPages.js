import React, { useState } from "react";

import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import IntroDescription from "../components/Global/IntroDescription";
import SearchCreateNew from "../components/page/content-library/SearchCreateNew";
import BrandedTabGrid from "../components/page/branded-pages/BrandedTabGrid";
import BrandTabTitles from "../components/page/branded-pages/BrandTabTitles";

export default function BrandedPages() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <GlobalLayout>
      <div className="bg-lightGrayBg shadow-infoPopup">
        <Navbar path="branded pages"></Navbar>
        <div className="px-8">
          <IntroDescription
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ac maecenas placerat cursus dui in integer natoque facilisis. 
                Commodo id rutrum eros, aenean dolor netus elementum eu. Tempor magna faucibus interdum enim imperdiet consequat id lectus sit. 
                Odio dictum tristique posuere."
          />
          {/* tab titles */}
          <BrandTabTitles openTab={openTab} setOpenTab={setOpenTab} />
        </div>
        {/* search row */}
      </div>
      <div className="mt-8 px-8">
        <SearchCreateNew
          createNew={true}
          link="/branded-pages/create-new-content"
        />
      </div>
      {/* tab details */}
      <BrandedTabGrid openTab={openTab} />
    </GlobalLayout>
  );
}
