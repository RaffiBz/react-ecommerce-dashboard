import React from "react";

import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import AddNewTierForm from "../components/assets/forms/AddNewTierForm";

export default function AddNewTier() {
  return (
    <GlobalLayout clasName="h-screen w-full">
      <Navbar />
      <AddNewTierForm />
    </GlobalLayout>
  );
}
