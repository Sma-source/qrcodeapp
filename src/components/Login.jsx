import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";

import styles from "../styles/Login.module.css";
import Alert from "./Alert";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useUserAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.logo}>Se connecter</h2>
        {error && <Alert props={error} />}
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
          <input
            placeholder="mot de passe..."
            className={styles.input2}
            type="password"
            name="password"
            id="password"
            required
            ref={passwordRef}
          />
          <button
            disabled={loading}
            type="submit"
            className={styles.btnConnect}
          >
            Connexion
          </button>
        </form>

        <Link to="/signup" className={styles.btnInscrire}>
          S'inscrire
        </Link>
        <Link to="/forgot-password" className={styles.mdpForget}>
          mot de pass oublié
        </Link>
      </div>
    </div>
  );
};

export default Login;
