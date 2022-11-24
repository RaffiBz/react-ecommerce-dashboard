import React from "react";
import GlobalLayout from "../../components/layout/GlobalLayout";
import RouthPathname from "../../components/Global/RouthPathname";
import CustomPageBody from "../../components/page/branded-pages/CustomPageBody";

export default function CustomBrandedPage() {
  return (
    <GlobalLayout>
      <div className="px-8 pt-12 pb-6">
        <RouthPathname
          link="/branded-pages"
          firstPath="branded pages"
          secondPath="create custom branded page"
        />
        <CustomPageBody />
      </div>
    </GlobalLayout>
  );
}
