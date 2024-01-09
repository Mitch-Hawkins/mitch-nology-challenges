import React from "react";
import Navcategory from "../Navcategory/Navcategory";
import styles from "./Navbar.module.scss";
import data from "../../data/iconsData.json";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {data.map((filter) => {
        return (
          <Navcategory
            key={filter.id}
            title={filter.title}
            image={filter.image}
          />
        );
      })}
    </div>
  );
};

export default Navbar;
