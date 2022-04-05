import React, { useState, useEffect, useRef, createRef } from "react";
import LayoutDash from "./LayoutDash";
import QrCard from "./QrCard";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import QRCode from "qrcode.react";

const Dashboard = () => {
  const [qrcode, setQrcode] = useState([]);
  const staticqrCollectionRef = collection(db, "testqr");
  const qrcodeRefs = useRef([]);
  qrcodeRefs.current = qrcode.map(
    (_, i) => qrcodeRefs.current[i] ?? createRef()
  );
  useEffect(() => {
    const getQrcode = async () => {
      const data = await getDocs(staticqrCollectionRef);
      setQrcode(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getQrcode();
  }, []);

  const downloadQRCode = (qrRef) => (e) => {
    e.preventDefault();

    let canvas = qrRef.current.querySelector("svg");

    console.log(canvas);

    let svgXML = new XMLSerializer().serializeToString(canvas);
    console.log(svgXML);

    let dataUrl = "data:image/svg," + encodeURIComponent(svgXML);
    // console.log(dataUrl);

    // let image = canvas.toDataURL("image/png");

    let anchor = document.createElement("a");
    anchor.href = dataUrl;
    anchor.download = `qr-code.svg`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  // map and render qrCart component
  // const qrCode = true;
  return (
    <LayoutDash>
      {qrcode.map((user, i) => {
        return (
          <div
            key={user.id}
            className="w-1/2  md:w-full  lg:w-1/3 2xl:w-1/4 px-4"
          >
            <div className="bg-black overflow-hidden mb-10 w-[150px] md:w-[300px]">
              <li
                className="flex justify-center mt-10 "
                ref={qrcodeRefs.current[i]}
              >
                <QRCode
                  style={{ padding: 6 + "px" }}
                  className="qrcode w-[117px] md:w-[267px] bg-white"
                  size={user.size}
                  value={user.value}
                  bgColor="white"
                  fgColor="#000"
                  level="L"
                  renderAs="svg"
                ></QRCode>
              </li>
              <div className="p-0  md:p-5  text-center">
                <h3>
                  <a
                    href="#"
                    className="
                        font-normal
                        font-Poppins
                        text-purple
                        text-xs
                        md:text-[16px]
                        mt-1
                        md:mt-0
                        mb-4
                        block
                        "
                  >
                    https://{user.value}
                  </a>
                </h3>
                <p className="text-white font-bold font-Poppins  md:text-6xl  leading-relaxed mb-0">
                  50
                </p>
                <h3
                  className="font-normal
                        font-Poppins
                        text-purple
                        text-xs
                        md:text-[16px]
                        mb-6 
                        block"
                >
                  scans
                </h3>
                <Link
                  to={`/${user.id}`}
                  className="
                     inline-block
                     mb-3
                     w-1/2
                     md:w-full
                  
                     md:py-3
                     md:px-12
                     bg-gris
                     border border-[#707070]
                     rounded-full
                     text-white
                     font-Poppins
                     font-semibold
                     transition
                     "
                >
                  Détails
                </Link>

                <button
                  onClick={downloadQRCode(qrcodeRefs.current[i])}
                  type="submit"
                  className="
                     inline-block
                     md:w-full
                     py-0.5
                     px-2
                     md:py-3
                     md:px-12
                     bg-purple
                     border border-[#707070]
                     rounded-full
                     text-white
                     font-Poppins
                     font-semibold
                      mb-2
                      md:mb-0
                     
                     "
                >
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* <QrCard />
      <QrCard /> */}
    </LayoutDash>
  );
};

export default Dashboard;
