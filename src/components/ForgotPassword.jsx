import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";

import styles from "../styles/Login.module.css";
import Alert from "./Alert";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useUserAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);

      await resetPassword(emailRef.current.value);
      setMessage("Vérifier votre boite mail et suivez les instructions");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.logo}>Mot de passe oublié ?</h2>
        {error && <Alert props={error} />}
        {message && <Alert props={message} />}
        <form onSubmit={handleSubmit}>
          <input
            placeholder="adresse mail..."
            className={styles.input1}
            type="email"
            name="email"
            id="email"
            required
            ref={emailRef}
          />
          <button
            disabled={loading}
            type="submit"
            className={styles.btnConnect}
          >
            Reset Password
          </button>
        </form>

        <Link to="/signup" className={styles.btnInscrire}>
          S'inscrire
        </Link>
        <Link to="/" className={styles.mdpForget}>
          Login
        </Link>
      </div>
    </div>
  );
}
