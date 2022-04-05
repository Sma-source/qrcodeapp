import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LayoutDash from "./LayoutDash";
import { useUserAuth } from "../contexts/AuthContext";
import Alert from "./Alert";

function MyAccount() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { user, modifyEmail, modifyPassword } = useUserAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match!");
    }
    setError("");
    setLoading(true);
    const promises = [];
    if (emailRef.current.value !== user.email) {
      promises.push(modifyEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(modifyPassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      })
      .finally(() => {});
  }
  return (
    <LayoutDash>
      <div className="container bg-black min-h-screen pt-2 font-Poppins my-16 mx-auto">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-white font-semibold">Mon Compte</h2>
            {error && <Alert props={error} />}
            <form
              onSubmit={handleSubmit}
              className="mt-6 border-t border-gray-400 pt-4"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-semibold mb-2"
                    htmlFor="grid-text-1"
                  >
                    adresse email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    defaultValue={user.email}
                    placeholder="Enter email"
                    required
                    ref={emailRef}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6 ">
                  <label className="block uppercase tracking-wide text-white text-xs font-semibold mb-2">
                    mot de passe
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="password"
                    placeholder="laisser vide pour garder le même"
                    ref={passwordRef}
                  />
                  {/* <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                    change your password
                  </button> */}
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-white text-xs font-semibold mb-2">
                    confirmer le mot de passe
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="password"
                    placeholder="laisser vide pour garder le même"
                    ref={passwordConfirmRef}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <div className="flex justify-end mt-6">
                    <button
                      className="appearance-none bg-purple  text-white
                     font-Poppins
                     font-semibold px-2 py-1 md:px-6 md:py-3 shadow-md border border-purple rounded-full mr-3"
                      disabled={loading}
                      type="submit"
                    >
                      confimer les modifications
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutDash>
  );
}

export default MyAccount;
