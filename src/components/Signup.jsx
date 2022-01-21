import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";
import styles from "../styles/Signup.module.css";
import Alert from "./Alert";
const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useUserAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.logo}>Inscription</h2>

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
            className={styles.input1}
            type="password"
            name="password"
            id="password"
            required
            ref={passwordRef}
          />
          <input
            placeholder="Confirme mot de passe..."
            className={styles.input2}
            type="password"
            name="password-confirm"
            id="password-confirm"
            required
            ref={passwordConfirmRef}
          />
          <button
            disabled={loading}
            type="submit"
            className={styles.btnInscrire}
          >
            S'inscrire
          </button>
        </form>

        <Link to="/" className={styles.mdpForget}>
          Déja un compte ? Se connecter
        </Link>
      </div>
    </div>
  );
};

export default Signup;
