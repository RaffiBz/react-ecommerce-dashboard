import React from "react";

import { PaymentColumns } from "../data/PaymentList";
import { PartnerPaymentColumns } from "../data/PaymentList";
import { PaymentList } from "../data/PaymentList";
import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import MerchantPaymentTable from "../components/assets/table/merchant-payment-table/MerchantPaymentTable";

export default function Payment() {
  return (
    <GlobalLayout>
      <Navbar path="Payment"></Navbar>
      <MerchantPaymentTable
        rowsPerPage={4}
        Columns={PaymentColumns}
        TableData={PaymentList}
      />
    </GlobalLayout>
  );
}
