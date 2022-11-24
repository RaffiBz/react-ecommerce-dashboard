import React, { useState } from "react";
import useTable from "../../../util/useTable";

import TableHead from "../TableHead";
import SearchRow from "../table-util/SearchRow";
import TableFooter from "../TableFooter";
import SalesTableBody from "./SalesTableBody";

export default function SalesTable({
  rowsPerPage,
  setRowsPerPage,
  Columns,
  TableData,
  partners,
}) {
  const [isCheck, setIsCheck] = useState([]);
  const [tableData, setTableData] = useState(TableData);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(tableData, page, rowsPerPage);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="w-auto mx-4 md:mx-8 mt-1 mb-6">
        <div className="relative overflow-x-auto shadow-md rounded-md">
          <SearchRow handleSearch={handleSearch} />
          <table className="w-full text-xs md:text-sm text-left text-gray-500 ">
            <TableHead
              columns={Columns}
              handleSorting={handleSorting}
              data={TableData}
              setIsCheck={setIsCheck}
            />
            <SalesTableBody
              isCheck={isCheck}
              search={search}
              slice={slice}
              partners={partners}
            />
          </table>
          <TableFooter
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            range={range}
            slice={slice}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </>
  );
}
