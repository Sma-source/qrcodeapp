import React from "react";
import Sidebar from "./Sidebar";

function LayoutDash({ children }) {
  return (
    <div className="relative min-h-screen block md:flex">
      <Sidebar />
      <section className="flex-1 p-10">
        <section className="pb-10 lg:pb-20">
          <div className="container">
            <div className="flex flex-wrap mx-4">{children}</div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default LayoutDash;
