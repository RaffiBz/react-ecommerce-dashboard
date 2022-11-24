import React from "react";
import RouthPathname from "../../components/Global/RouthPathname";
import GlobalLayout from "../../components/layout/GlobalLayout";
import SearchCreateNew from "../../components/page/content-library/SearchCreateNew";
import TemplateGrid from "../../components/page/branded-pages/TemplateGrid";

export default function CreateNewBrandedPage() {
  return (
    <GlobalLayout>
      <div className="px-8 pt-12">
        <RouthPathname
          link="/branded-pages"
          firstPath="branded pages"
          secondPath="create new content"
        />
        <div className="pt-4">
          <SearchCreateNew createNew={false} />
        </div>
        <TemplateGrid />
      </div>
    </GlobalLayout>
  );
}
