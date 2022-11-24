import React, { useEffect } from "react";

import Button from "../button/Button";

export default function TableFooter({
  range,
  setPage,
  page,
  slice,
  total,
  rowsPerPage,
  setRowsPerPage,
}) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  const previousPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPageHandler = () => {
    if (page <= range.length - 1) {
      setPage(page + 1);
    }
  };

  const changeLimitHandler = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div className="flex font-medium text-xxs text-grayPagination md:text-xs leading-[1.125rem] items-center justify-between border-t border-t-borderGray backdrop-blur bg-gridBg px-5 py-[0.813rem] sticky bottom-0">
      <div className="w-[70%] text-left">1-10 of {total}</div>
      <div className="flex justify-end gap-4 md:gap-5">
        <div className="flex">
          <div>Rows per page: </div>
          <div>
            <select onChange={changeLimitHandler} defaultValue={rowsPerPage}>
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 md:gap-[]">
          {/* previous page button */}
          <Button
            className="w-[24px] h-[20px] shadow-pageButton bg-white rounded-md"
            onClick={previousPageHandler}
          >
            <img src="/images/icons/grid-table/left.svg" alt="prev" />
          </Button>
          <div className="flex">
            <span className="text-activePage">{page}</span>
            <span className="">/{range.length}</span>
          </div>
          {/* next page button */}
          <Button
            className="w-[24px] h-[20px] shadow-pageButton bg-white rounded-md"
            onClick={nextPageHandler}
          >
            <img src="/images/icons/grid-table/right.svg" alt="prev" />
          </Button>
        </div>
      </div>
    </div>
  );
}
