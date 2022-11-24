import React from "react";
import MerchantGeneralSettingForm from "../../components/assets/forms/MerchantGeneralSettingForm";
import GlobalLayout from "../../components/layout/GlobalLayout";
import Navbar from "../../components/layout/Navbar";

export default function GeneralSettings() {
  return (
    <GlobalLayout>
      <Navbar></Navbar>
      <div className="px-8">
        <MerchantGeneralSettingForm />
      </div>
    </GlobalLayout>
  );
}
