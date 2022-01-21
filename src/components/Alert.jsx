import React from "react";
import styles from "../styles/Alert.module.css";

const Alert = ({ props }) => {
  return (
    <div className={styles.alert} role="alert">
      {props}
    </div>
  );
};

export default Alert;
