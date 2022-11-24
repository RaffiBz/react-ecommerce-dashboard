import React, { useState } from "react";

import TopSellingProduct from "../../assets/cards/TopSellingProduct";
import { TopProducts } from "../../../data/TopProducts";

export default function TopSellingGrid() {
  //product popup state
  const [productPopupShown, setProductPopupShown] = useState(false);
  //product popup handler functions
  const showProductPopupHandler = () => {
    setProductPopupShown(true);
  };
  const hideProductPopupHandler = () => {
    setProductPopupShown(false);
  };
  return (
    <div className="absolute grid grid-cols-2 gap-x-6 left-[10%]">
      {TopProducts.slice(0, 4).map((product) => (
        <TopSellingProduct
          productImg={product.productImg}
          position={product.id % 2 === 0 ? "mt-[3.188rem]" : ""}
          display={product.id > 2 ? "inline-block" : ""}
          key={product.id}
          productName={product.productName}
          topSellers={product.topSellers}
          registeredDate="May.15 2021"
          onClick={showProductPopupHandler}
          onClose={hideProductPopupHandler}
          productPopupShown={productPopupShown}
        />
      ))}
    </div>
  );
}
