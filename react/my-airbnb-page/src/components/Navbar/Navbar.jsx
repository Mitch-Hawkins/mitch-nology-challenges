import React from "react";
import Navcategory from "../Navcategory/Navcategory";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Navcategory title="Amazing Views" />
      <Navcategory title="Tiny Homes" />
      <Navcategory title="Countryside" />
      <Navcategory title="Cabins" />
    </div>
  );
};

export default Navbar;
