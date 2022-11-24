import React, { useState } from "react";
import Checkbox from "../input/Checkbox";

export default function TableHead({
  columns,
  handleSorting,
  data,
  setIsCheck,
  checkAll,
}) {
  //sorting states
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  //checked states
  const [isCheckAll, setIsCheckAll] = useState(false);

  //handle sort function
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
    console.log(accessor);
  };

  //check all handler
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  return (
    <thead className="text-xxs text-subtitle font-secondaryFont font-semibold border-b border-b-borderGray uppercase bg-gridBg ">
      <tr>
        {checkAll && (
          <th scope="col" className="p-4">
            <Checkbox
              id="selectAll"
              onChange={handleSelectAll}
              checked={isCheckAll}
            />
          </th>
        )}
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField && sortField === accessor && order === "asc"
              ? "up"
              : sortField && sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              key={label}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
              className={`${cl} px-6 py-3`}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
