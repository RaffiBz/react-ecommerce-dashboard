import React from "react";

import { template } from "../../../../data/PaymentStatusList";
import TableRow from "../TableRow";
import CheckboxSingle from "../table-data/CheckboxSingle";
import Options from "../Options";
import TransactionId from "../table-data/TransactionId";
import Name from "../table-data/Name";
import Id from "../table-data/Id";
import Commission from "../table-data/Commission";
import RegisteredDate from "../table-data/RegisteredDate";
import Approve from "../option-actions/Approve";
import Reject from "../option-actions/Reject";
import Period from "../table-data/Period";
import StatusRenderer from "../table-data/StatusRenderer";

export default function MerchantPaymentTableBody({
  isCheck,
  setIsCheck,
  search,
  slice,
}) {
  //check click handler
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
    console.log(isCheck);
  };
  //payment status list
  const { pending, paid, archived, due, rejected } = template;

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
              <CheckboxSingle
                id={data.id}
                onChange={handleClick}
                checked={isCheck.includes(data.id)}
              />
              <Id id={data.id} />
              <Name text={data.name} number={data.id} />
              <TransactionId amount={data.transactionId} />
              <Period dateBegin={data.periodFrom} dateEnd={data.periodTo} />
              <StatusRenderer data={paid} />
              <Commission amount={data.earned} unit="USD" />
              <RegisteredDate date={data.date} />
              <Options>
                <Approve />
                <Reject />
              </Options>
            </TableRow>
          );
        })}
    </tbody>
  );
}
