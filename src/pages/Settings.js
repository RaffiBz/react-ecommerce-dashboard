import React from "react";

import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import SettingsGrid from "./settings/SettingsGrid";

export default function Settings() {
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar></Navbar>
      <div className="px-8">
        <SettingsGrid />
      </div>
    </GlobalLayout>
  );
}
