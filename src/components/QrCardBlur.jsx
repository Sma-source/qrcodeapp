import React, { useState } from "react";

function QrCardBlur() {
  const [popupActive, setPopupActive] = useState(false);

  return (
    <>
      {popupActive && (
        <div
          className="fixed z-40 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
            <div
              className="fixed inset-0 bg-noir bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
            <div className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mx-auto text-center">
                  <div className="flex flex-col items-end justify-end">
                    <div className="flex items-center justify-center h-12 w-12 sm:mx-0 sm:h-10 sm:w-10">
                      {/* <!-- Heroicon name: outline/exclamation --> */}
                      <svg
                        onClick={() => setPopupActive(!popupActive)}
                        className="w-6 h-6 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Créer un QR Code
                    </h3>
                    <div className="mt-3">
                      <label
                        for="company-website"
                        className="block text-left text-sm font-medium text-gray-700"
                      >
                        STEP 1: Enter the URL of your website
                      </label>
                      <div className="mt-1 mb-2 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          https://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-purple focus:border-purple flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-400"
                          placeholder="www.example.com"
                        />
                      </div>

                      <p className="text-sm text-gray-500">
                        STEP 2: Choose patterns
                      </p>
                      <p className="text-sm text-gray-500">
                        STEP 3: Choose eyes
                      </p>
                      <p className="text-sm text-gray-500">STEP 3: Add Logo</p>
                      <p className="text-sm text-gray-500">
                        STEP 4: Set colors
                      </p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid laudantium ratione reiciendis? Cupiditate
                        harum placeat nam soluta, vitae similique corrupti
                        veniam blanditiis repellendus officia architecto
                        repudiandae nobis quos delectus iure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setPopupActive(!popupActive)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center bg-gris shadow-sm
                     border border-white-300
                     rounded-full
                     text-white font-Poppins font-semibold px-6 py-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center bg-purple
                     border border-white-300
                     rounded-full
                     text-white font-Poppins font-semibold px-6 py-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Générer QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-1/2  md:w-full  lg:w-1/3 2xl:w-1/4 px-4">
        <div className="bg-black  overflow-hidden mb-10 w-[150px] md:w-[300px]">
          <div className="flex justify-center mt-10 blur-md opacity-25">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="logo"
              className=" w-[117px] md:w-[267px] bg-white"
            />
          </div>
          <div className="flex justify-center -mt-5 text-center">
            <button
              onClick={() => setPopupActive(!popupActive)}
              className="w-14 font-Poppins border-[4px] border-yellow rounded-md opacity-100 z-10"
            >
              <p className="text-yellow text-5xl font-bold">+</p>
            </button>
          </div>
          <p className="text-white font-Poppins font-bold uppercase text-center mt-1">
            Créer qr code
          </p>

          <div className="md:p-5 -mt-16  text-center blur-md opacity-50">
            <h3>
              <p
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
              </p>
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
            <div
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
            </div>
            <div
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QrCardBlur;
