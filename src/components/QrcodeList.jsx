import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import QrCodeCard from "./QrCodeCard";

function QrcodeList() {
  const [qrcode, setQrcode] = useState([]);

  // collection ref
  const staticqrCollectionRef = collection(db, "testqr");

  // queries
  const q = query(staticqrCollectionRef, orderBy("createdAt", "desc"));

  useEffect(() => {
    const unsub = onSnapshot(q, (snapshot) => {
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
