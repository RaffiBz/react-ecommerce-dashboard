import React from "react";
import { TiersColumns, TiersList } from "../data/TiersList";
import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";
import TiersTable from "../components/assets/table/tiers-table/TiersTable";

export default function Tiers() {
  return (
    <GlobalLayout className="h-screen w-full">
      <Navbar path="Tiers"></Navbar>
      <TiersTable
        rowsPerPage={4}
        Columns={TiersColumns}
        TableData={TiersList}
      />
    </GlobalLayout>
  );
}
