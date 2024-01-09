import React from "react";
import styles from "./Navcategory.module.scss";

const Navcategory = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image} className={styles.icon} />
      <p className={styles.text}>{props.title}</p>
    </div>
  );
};

export default Navcategory;
