import React from "react";

import ProductPlatformSingle from "./ProductPlatformSingle";

export default function ProductPlatformGrid({
  deleteButton,
  downloadButton,
  onClickHandler,
  setImageSrc,
}) {
  return (
    <div className="block w-full max-w-[28rem]">
      <ProductPlatformSingle
        contentInfo="Facebook Post (1200x1200)"
        deleteButton={deleteButton}
        downloadButton={downloadButton}
        onClick={() => setImageSrc("/images/product.png")}
      />
      <ProductPlatformSingle
        contentInfo="Instagram Post (1200x1200)"
        deleteButton={deleteButton}
        downloadButton={downloadButton}
        onClick={() => setImageSrc("/images/product2.png")}
      />
      <ProductPlatformSingle
        contentInfo="Linkedin Post (1200x1200)"
        deleteButton={deleteButton}
        downloadButton={downloadButton}
        onClick={() => setImageSrc("/images/product.png")}
      />
    </div>
  );
}
