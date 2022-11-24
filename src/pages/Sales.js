import React, { useState } from "react";

import { SalesColumns, SalesList } from "../data/SalesData";
import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import SalesTable from "../components/assets/table/merchant-sales-table/SalesTable";

export default function Sales() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar path="Sales"></Navbar>
      <SalesTable
        setRowsPerPage={setRowsPerPage}
        rowsPerPage={rowsPerPage}
        Columns={SalesColumns}
        TableData={SalesList}
        partners={true}
      />
    </GlobalLayout>
  );
}
