import React from "react";

import GlobalLayout from "../../components/layout/GlobalLayout";
import Navbar from "../../components/layout/Navbar";
import TierSettingForm from "../../components/assets/forms/TierSettingForm";

export default function TierMeasurement() {
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar></Navbar>
      <div className="px-8">
        <TierSettingForm />
      </div>
    </GlobalLayout>
  );
}
