import React from "react";
import { UsernameContext } from "../../context/UsernameContextProvider";
import { useContext } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const { username } = useContext(UsernameContext);

  return (
    <div className={styles.bar}>
      <a>Dummy Link 1</a>
      <a>Dummy Link 2</a>
      <p>Hello, {username}</p>
    </div>
  );
};

export default NavBar;
