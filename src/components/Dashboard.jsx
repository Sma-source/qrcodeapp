import React from "react";
import LayoutDash from "./LayoutDash";
import QrCard from "./QrCard";
import QrCardBlur from "./QrCardBlur";

const Dashboard = () => {
  const qrCode = false;
  return (
    <LayoutDash>
      <QrCard />
      <QrCard />
      {!qrCode && <QrCardBlur />}
    </LayoutDash>
  );
};

export default Dashboard;
