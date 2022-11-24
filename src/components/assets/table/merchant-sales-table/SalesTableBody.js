import React from "react";

import TableRow from "../TableRow";
import Name from "../table-data/Name";
import Id from "../table-data/Id";
import Commission from "../table-data/Commission";
import RegisteredDate from "../table-data/RegisteredDate";
import TextNormal from "../table-data/TextNormal";
import TextMedium from "../table-data/TextMedium";
import Graph from "../table-data/Graph";

export default function SalesTableBody({ isCheck, search, slice, partners }) {
  return (
    <tbody>
      {slice
        .filter((data) =>
          search === ""
            ? data
            : data.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((data) => {
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
              <Name
                text={data.productName}
                code="order ID:"
                number={data.orderId}
              />
              <TextNormal text={data.offer} />
              {partners && <TextMedium text={data.partner} />}
              <Commission amount={data.price} unit="USD" />
              <Commission amount={data.commission} />
              <Commission amount={data.commissionAmount} unit="USD" />
              <RegisteredDate date={data.date} />
              {partners && <Graph />}
            </TableRow>
          );
        })}
    </tbody>
  );
}
