import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";
import styles from "../styles/Signup.module.css";
import Alert from "./Alert";

export default function UpdateProfile() {
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
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.logo}>Update Profil</h2>

        {error && <Alert props={error} />}
        <form onSubmit={handleSubmit}>
          <input
            placeholder="adresse mail..."
            className={styles.input1}
            type="email"
            defaultValue={user.email}
            required
            ref={emailRef}
          />
          <input
            placeholder="leave blank to keap the same"
            className={styles.input1}
            type="password"
            ref={passwordRef}
          />
          <input
            placeholder="leave blank to keap the same"
            className={styles.input2}
            type="password"
            ref={passwordConfirmRef}
          />
          <button
            disabled={loading}
            type="submit"
            className={styles.btnInscrire}
          >
            Update
          </button>
        </form>

        <Link to="/" className={styles.mdpForget}>
          Annuler
        </Link>
      </div>
    </div>
  );
}
