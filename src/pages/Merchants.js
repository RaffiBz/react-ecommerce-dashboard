import React, { useState } from "react";
import MerchantTable from "../components/assets/table/merchant-table/MerchantTable";

import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import { MerchantColumns, MerchantsList } from "../data/MerchantsList";

export default function Merchants() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar path="Merchants"></Navbar>
      <MerchantTable
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        Columns={MerchantColumns}
        TableData={MerchantsList}
      />
    </GlobalLayout>
  );
}
