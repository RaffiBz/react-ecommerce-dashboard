import React from "react";

import GlobalLayout from "../../components/layout/GlobalLayout";
import Navbar from "../../components/layout/Navbar";
import MerchantProfileCard from "../../components/assets/profile/MerchantProfileCard";

export default function Profile() {
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar></Navbar>
      <div className="px-8">
        <MerchantProfileCard />
      </div>
    </GlobalLayout>
  );
}
