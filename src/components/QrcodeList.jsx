import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import QrCodeCard from "./QrCodeCard";

function QrcodeList() {
  const [qrcode, setQrcode] = useState([]);
  const staticqrCollectionRef = collection(db, "testqr");

  useEffect(() => {
    const unsub = onSnapshot(staticqrCollectionRef, (snapshot) => {
      setQrcode(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      {qrcode
        ? qrcode.map((item) => {
            return <QrCodeCard item={item} key={item.id} />;
          })
        : ""}
    </>
  );
}

export default QrcodeList;
