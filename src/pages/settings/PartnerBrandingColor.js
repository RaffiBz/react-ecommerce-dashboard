import React from "react";
import SetBrandingColorForm from "../../components/assets/forms/SetBrandingColorForm";

import GlobalLayout from "../../components/layout/GlobalLayout";
import Navbar from "../../components/layout/Navbar";

export default function PartnerBrandingColor() {
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar></Navbar>
      <div className="px-8 pb-[4.688rem]">
        <SetBrandingColorForm />
      </div>
    </GlobalLayout>
  );
}
