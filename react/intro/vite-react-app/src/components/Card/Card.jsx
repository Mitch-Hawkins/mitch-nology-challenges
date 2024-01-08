// import React from 'react'

//rafce shortcut
import styles from "./Card.module.scss";

const Card = () => {
  console.log(styles, "styles");
  // I get an object with title and container properties

  // There's characters added to the class name dynamically

  //So class names don't clash between components

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>React Concept</h4>
    </div>
  );
};

export default Card;
