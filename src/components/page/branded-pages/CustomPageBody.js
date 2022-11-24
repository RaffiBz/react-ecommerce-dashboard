import React from "react";
import CreatorFunctionsColumn from "./CreatorFunctionsColumn";
import PageBuilderBoard from "./PageBuilderBoard";

export default function CustomPageBody() {
  return (
    <div className="flex gap-4 pt-2">
      <CreatorFunctionsColumn />
      <PageBuilderBoard />
    </div>
  );
}
