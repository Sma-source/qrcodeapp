import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";
import cx from "classnames";
import styles from "../styles/Dashboard.module.css";
import Alert from "./Alert";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <aside className={cx(styles.col, styles.sidebar)}>
        <h1 className="text-3xl font-bold underline"> Hello world! </h1>

        <br />
        <p>Email: {user && user.email}</p>
        {error && <Alert props={error} />}
        <button onClick={handleLogout} className={styles.btnDeconnect}>
          Déconnexion
        </button>
        <br />
        <Link className={styles.btnDeconnect} to="/update-profile">
          Update Profile
        </Link>
      </aside>
      <section className={cx(styles.col2, styles.main)}>
        <div className={styles.parentFlex}>
          <div className={styles.box}>
            <span className={styles.number}>86</span>
            <button className={styles.btnDetails}>Détails</button>
            <button className={styles.btnDownload}>Télécharger</button>
          </div>
          <div className={styles.box}>
            <span className={styles.number}>86</span>
            <button className={styles.btnDetails}>Détails</button>
            <button className={styles.btnDownload}>Télécharger</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
