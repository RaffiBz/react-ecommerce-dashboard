import React from "react";
import PartnerGeneralSettingForm from "../../components/assets/forms/PartnerGeneralSettingForm";
import GlobalLayout from "../../components/layout/GlobalLayout";
import Navbar from "../../components/layout/Navbar";

export default function PartnerGeneralSettings() {
  return (
    <GlobalLayout>
      <Navbar></Navbar>
      <div className="px-8">
        <PartnerGeneralSettingForm />
      </div>
    </GlobalLayout>
  );
}
