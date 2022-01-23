import React from "react";
import { Link } from "react-router-dom";
import LayoutDash from "./LayoutDash";

function Details() {
  return (
    <LayoutDash>
      <div className="w-full p-10 bg-black">
        <div className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
            alt="qr-code"
            className=" w-[207px] md:w-[267px] bg-white"
          />
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
                https://example.com
              </a>
            </h3>

            <Link
              to="/details"
              className="
                     
                     mb-3
                     md:w-full
                     md:py-3
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
              Modifier
            </Link>
            <a
              href="#"
              className="
                     
                     md:w-full
                     
                     md:py-3
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
                      md:mb-0
                     
                     "
            >
              Télécharger
            </a>
          </div>
        </div>
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
                      {/* <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Role
                      </th> */}
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
                        <div className="text-sm text-white">Saint-Etienne</div>
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
                        <div className="text-sm text-white">Saint-Etienne</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDash>
  );
}

export default Details;
