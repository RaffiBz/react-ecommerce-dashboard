import React from "react";

import PublishedBrands from "./PublishedBrands";
import UnpublishedBrands from "./UnpublishedBrands";

export default function BrandedTabGrid({ openTab }) {
  return (
    <div>
      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
        <PublishedBrands />
      </div>
      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
        <UnpublishedBrands />
      </div>
    </div>
  );
}
