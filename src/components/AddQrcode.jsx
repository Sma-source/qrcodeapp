import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function QrCardBlur({ close }) {
  // import db collection from firebase
  const staticqrCollectionRef = collection(db, "testqr");

  const urlRef = useRef();
  const sizeRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // add input value to db collection
      await addDoc(staticqrCollectionRef, {
        size: Number(sizeRef.current.value),
        value: urlRef.current.value,
        createdAt: serverTimestamp(),
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <>
      <div
        className="fixed z-40 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-noir bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <form
            onSubmit={handleSubmit}
            className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mx-auto text-center">
                <div className="flex flex-col items-end justify-end">
                  <div className="flex items-center justify-center h-12 w-12 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      onClick={close}
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
                      htmlFor="company-website"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      STEP 1: Enter the URL of your website
                    </label>
                    <div className="mt-1 mb-2 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        https://
                      </span>
                      <input
                        required
                        ref={urlRef}
                        type="text"
                        className="focus:ring-purple focus:border-purple flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-400"
                        placeholder="www.example.com"
                      />
                    </div>

                    <p className="text-sm text-gray-500">STEP 2: Choose size</p>
                    <div className="mt-1 mb-2 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        Pixels
                      </span>
                      <input
                        required
                        ref={sizeRef}
                        type="number"
                        className="focus:ring-purple focus:border-purple flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-400"
                        placeholder=""
                      />
                    </div>
                    <p className="text-sm text-gray-500">STEP 3: Choose eyes</p>
                    <p className="text-sm text-gray-500">STEP 3: Add Logo</p>
                    <p className="text-sm text-gray-500">STEP 4: Set colors</p>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid laudantium ratione reiciendis? Cupiditate harum
                      placeat nam soluta, vitae similique corrupti veniam
                      blanditiis repellendus officia architecto repudiandae
                      nobis quos delectus iure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {/* <button
                type="button"
                className="mt-3 w-full inline-flex justify-center bg-gris shadow-sm
                     border border-white-300
                     rounded-full
                     text-white font-Poppins font-semibold px-6 py-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Annuler
              </button> */}
              <button
                disabled={loading}
                type="submit"
                className="mt-3 w-full inline-flex justify-center bg-purple
                     border border-white-300
                     rounded-full
                     text-white font-Poppins font-semibold px-6 py-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Générer QR Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default QrCardBlur;
