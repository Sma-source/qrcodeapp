import React, { useState } from "react";
import LayoutDash from "./LayoutDash";
import AddQrcode from "./AddQrcode";
import QrCardTemplate from "./QrCardTemplate";

function CreateQr() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <LayoutDash>
      {open ? (
        <AddQrcode close={handleOpen} />
      ) : (
        <QrCardTemplate test={handleOpen} />
      )}
    </LayoutDash>
  );
}

export default CreateQr;
