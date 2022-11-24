import React, { useState } from "react";

import ProductGrid from "./ProductGrid";

export default function PartnerContentGrid({ products }) {
  //download popup state
  const [downloadPopupShown, setDownloadPopupShown] = useState(false);
  //downloadPopup handler functions
  const showDownloadPopupHandler = () => {
    setDownloadPopupShown(true);
  };
  const hideDownloadPopupHandler = () => {
    setDownloadPopupShown(false);
  };
  return (
    <ProductGrid
      products={products}
      down={false}
      onOpen={showDownloadPopupHandler}
      onClose={hideDownloadPopupHandler}
      isDownloadShown={downloadPopupShown}
    />
  );
}
