import React from "react";
import QrCard from "./QrCard";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen block md:flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <section className="pb-10 lg:pb-20">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <QrCard />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
