import React from "react";

import SideBar from "./SideBar/SideBar";
// import Navbar from "./Navbar";

export default function GlobalLayout(props) {
  return (
    <div className={`${props.className} flex relative w-full min-h-screen`}>
      {/* SideBar */}
      <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
        <SideBar />
      </div>
      {/* Navbar position */}
      <div className="md:ml-72 bg-main-bg min-h-screen w-full">
        {/* <div className="fixed md:static  navbar w-full">
          <Navbar />
        </div> */}
        {/* main children */}
        <div>
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
}
