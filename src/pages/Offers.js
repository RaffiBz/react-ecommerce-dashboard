import React, { useState } from "react";
import { OffersColumns, OffersList } from "../data/OffersList";
import OffersTable from "../components/assets/table/offers-table/OffersTable";
import GlobalLayout from "../components/layout/GlobalLayout";
import Navbar from "../components/layout/Navbar";

export default function Offers() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  return (
    <>
      <GlobalLayout className="h-screen w-full">
        <Navbar path="Offers"></Navbar>
        <OffersTable
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          Columns={OffersColumns}
          TableData={OffersList}
        />
      </GlobalLayout>
    </>
  );
}
