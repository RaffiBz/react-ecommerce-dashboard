import React, { useState } from "react";

import { AdminPartnersColumns } from "../data/PartnersList";
import { PartnersList } from "../data/PartnersList";
import PartnersTable from "../components/assets/table/partners-table/PartnersTable";
import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";

export default function Partners() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openTab, setOpenTab] = useState(1);
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar path="Partners"></Navbar>
      <PartnersTable
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        Columns={AdminPartnersColumns}
        TableData={PartnersList}
        superAdmin={true}
        tabs={true}
        searchRow={true}
        actions={true}
        checkbox={true}
        openTab={openTab}
        setOpenTab={setOpenTab}
      />
    </GlobalLayout>
  );
}
