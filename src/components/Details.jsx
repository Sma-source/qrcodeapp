import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useReactToPrint } from "react-to-print";

import LayoutDash from "./LayoutDash";

import QRCode from "qrcode.react";

function Details() {
  const [code, setCode] = useState([]);
  const { id } = useParams();
  const qrcodeRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getQr();
  }, []);

  const getQr = () => {
    const docRef = doc(db, "testqr", id);
    onSnapshot(docRef, (doc) => {
      let list = [];
      // list.push(doc.data());
      const qr = {
        id: doc.id,
        ...doc.data(),
      };

      list.push(qr);

      setCode(list);
    });
  };

  const deleteQrcode = async (id) => {
    const docRef = doc(db, "testqr", id);
    await deleteDoc(docRef);
    navigate("/");
  };

  const downloadQRCode = (qrRef) => (e) => {
    e.preventDefault();

    let canvas = qrRef.current.querySelector("svg");

    // console.log(canvas);

    let svgXML = new XMLSerializer().serializeToString(canvas);
    // console.log(svgXML);

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
  const handlePrint = useReactToPrint({
    content: () => qrcodeRef.current,
  });

  return (
    <LayoutDash>
      <div className="container min-h-screen mx-auto my-16 p-10 bg-black xs:w-full">
        <div className="container mx-auto">
          {code.length
            ? code.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="flex flex-col md:flex-row items-center md:justify-center"
                  >
                    {/* <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
                      alt="qr-code"
                      className=" w-[207px] md:w-[267px] bg-white"
                    /> */}
                    <li ref={qrcodeRef}>
                      <QRCode
                        style={{ padding: 6 + "px" }}
                        className="qrcode bg-white"
                        size={data.size || 250}
                        value={data.value || "default"}
                        bgColor="white"
                        fgColor="#000"
                        level="L"
                        renderAs="svg"
                      ></QRCode>
                    </li>

                    <div className="flex flex-col md:w-1/2 lg:w-1/3 2xl:w-1/4 mx-4 md:p-5  text-center">
                      <p className="text-white font-bold font-Poppins  md:text-5xl  leading-relaxed mb-0">
                        50
                      </p>
                      <h3
                        className="font-normal
                         font-Poppins
                         text-purple
                         text-xs
                         md:text-[16px]
                         mb-6 
                         "
                      >
                        scans
                      </h3>
                      <h3>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://${data.value}`}
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
                          https://{data.value}
                        </a>
                      </h3>
                      <button
                        disabled={loading}
                        onClick={() => deleteQrcode(data.id)}
                        className="
                      
                      mb-2
                      md:w-full
                      md:py-2
                      md:px-10
                      bg-gris
                      border border-[#707070]
                      rounded-full
                      text-white
                       text-sm
                      md:text-lg
                      font-Poppins
                      font-semibold
                      transition
                      "
                      >
                        Delete
                      </button>

                      <button
                        onClick={downloadQRCode(qrcodeRef)}
                        type="submit"
                        className="
                      
                      md:w-full
                      
                      md:py-2
                      md:px-12
                      bg-purple
                      border border-[#707070]
                      rounded-full
                      text-white
                      text-sm
                      md:text-lg
                      font-Poppins
                      font-semibold
                       mb-2
                       md:mb-2
                      
                      "
                      >
                        Download
                      </button>
                      <button
                        onClick={handlePrint}
                        type="submit"
                        className="
                      
                      md:w-full
                      
                      md:py-2
                      md:px-12
                      bg-yellow
                      border border-[#707070]
                      rounded-full
                      text-white
                      text-sm
                      md:text-lg
                      font-Poppins
                      font-semibold
                       mb-2
                       md:mb-0
                      
                      "
                      >
                        Print
                      </button>
                    </div>
                  </div>
                );
              })
            : ""}

          <div className="flex flex-col p-10">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-500 ">
                  <table className="min-w-full font-Poppins">
                    <thead className="bg-black">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Heure
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Localisation
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Device
                        </th>
                        <th scope="col" className="relative px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-black divide-y divide-gray-500">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-0">
                              <div className="text-sm font-medium text-white">
                                18/01
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">16:51</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">
                            Saint-Etienne
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">Android</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-0">
                              <div className="text-sm font-medium text-white">
                                18/01
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">16:51</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">
                            Saint-Etienne
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">Android</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDash>
  );
}

export default Details;
