import React from "react";
import { Link } from "react-router-dom";

function QrCard() {
  return (
    <div className="w-1/2  md:w-full  lg:w-1/3 2xl:w-1/4 px-4">
      <div className="bg-black overflow-hidden mb-10 w-[150px] md:w-[300px]">
        <div className="flex justify-center mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
            alt="logo"
            className=" w-[117px] md:w-[267px] bg-white"
          />
        </div>
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
              https://example.com
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
            to="/details"
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
          <a
            href="#"
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default QrCard;
