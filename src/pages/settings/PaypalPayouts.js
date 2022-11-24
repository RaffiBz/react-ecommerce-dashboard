import React from "react";

import GlobalLayout from "../../components/layout/GlobalLayout";
import Navbar from "../../components/layout/Navbar";
import PaypalIntegration from "../../components/assets/paypal/PaypalIntegration";

export default function PaypalPayouts() {
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar></Navbar>
      <div className="px-8">
        <PaypalIntegration />
      </div>
    </GlobalLayout>
  );
}
