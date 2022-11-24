import React from "react";
import Board from "../../components/assets/branded-pages/Board";
import SingleCard from "../../components/assets/branded-pages/SingleCard";

export default function BlankPage() {
  return (
    <div>
      <Board
        id="board-1"
        className="flex flex-col max-w-[300px] w-full bg-gray-500 p-[15px]"
      >
        <SingleCard
          id="card-1"
          className="py-[15px] px-[25px] bg-white cursor-pointer"
          draggable="true"
        >
          <span>Card one</span>
        </SingleCard>
      </Board>

      <Board id="board-2" className="board">
        <SingleCard id="card-2" className="card" draggable="true">
          <span>Card two</span>
        </SingleCard>
      </Board>
    </div>
  );
}
