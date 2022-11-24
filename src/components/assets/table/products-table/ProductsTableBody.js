import React from "react";

import TableRow from "../TableRow";
import Name from "../table-data/Name";
import Id from "../table-data/Id";
import Commission from "../table-data/Commission";
import Quantity from "../table-data/Quantity";

export default function ProductsTableBody({ isCheck, slice }) {
  return (
    <tbody>
      {slice.map((data) => {
        return (
          <TableRow
            key={data.id}
            className={`${data.id % 2 === 0 ? "bg-gridSecondBg" : ""} ${
              isCheck.includes(data.id)
                ? "border-l-activeBlue"
                : "border-l-transparent"
            } bg-white hover:bg-gray-50 border-l-2`}
          >
            <Id id={data.id} />
            <Name icon={data.icon} text={data.name} number={data.code} />
            <Quantity amount={data.quantity} />
            <Quantity amount={data.returned} />
            <Commission amount={data.revenue} unit="USD" />
            <Commission amount={data.revenue} unit="USD" />
            <Quantity amount={data.conversion} />
          </TableRow>
        );
      })}
    </tbody>
  );
}
