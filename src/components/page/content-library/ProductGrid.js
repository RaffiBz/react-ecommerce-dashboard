import React from "react";

import ProductSingle from "./ProductSingle";

export default function ProductGrid({
  products,
  deleteProduct,
  onOpen,
  onClose,
  isDownloadShown,
}) {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
      {products.map((product) => (
        <ProductSingle
          key={product.id}
          productImg={product.productImg}
          productName={product.productName}
          deleteProduct={deleteProduct}
          onOpen={onOpen}
          onClose={onClose}
          isDownloadShown={isDownloadShown}
        />
      ))}
    </div>
  );
}
