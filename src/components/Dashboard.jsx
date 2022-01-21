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
      {/* <aside className={cx(styles.col, styles.sidebar)}>
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
      </section> */}

      <div className="relative bg-black">
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="w-64 h-screen">
            <div className="mt-10 px-6">
              {error && <Alert props={error} />}
              <p className="mx-2 p-2 my-6 text-white font-poppins text-sm font-semibold">
                {user && user.email}
              </p>
            </div>
            <nav className="mt-10 px-6 ">
              <Link
                className="hover:text-purple  flex items-center p-2 my-6 transition-colors duration-200  text-white "
                to="#"
              >
                <span className="mx-2 text-lg font-poppins font-semibold uppercase">
                  Mes QR Codes
                </span>
                <span className="flex-grow text-right"></span>
              </Link>
              <Link
                className="hover:text-purple  flex items-center p-2 my-6 transition-colors duration-200  text-white "
                to="#"
              >
                <span className="mx-2 text-lg font-poppins font-semibold uppercase">
                  Créer un qr code
                </span>
                <span className="flex-grow text-right"></span>
              </Link>
              <Link
                className="hover:text-purple  flex items-center p-2 my-6 transition-colors duration-200  text-white"
                to="/update-profile"
              >
                <span className="mx-2 text-lg font-poppins font-semibold uppercase">
                  Mon Compte
                </span>
                <span className="flex-grow text-right"></span>
              </Link>
            </nav>
            <div className="mt-10 px-6">
              <button
                onClick={handleLogout}
                className={`${styles.btnDeconnect} mx-2 p-2 my-6 py-24 sm:py-52  `}
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
