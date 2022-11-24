import React from "react";

import Button from "../../button/Button";

export default function Graph() {
  return (
    <td className="relative px-6 py-3">
      <div>
        <Button>
          <img
            width={16}
            height={16}
            src="/images/icons/grid-table/graph.svg"
            alt="graph"
          />
        </Button>
        {/* {isOpen && (
          <div className="bg-white absolute w-[13.938rem] top-[1.25rem] right-[5rem] shadow-actionsShadow rounded-md px-4 pt-[0.188rem] pb-3 z-10">
            {children}
          </div>
        )} */}
      </div>
    </td>
  );
}
