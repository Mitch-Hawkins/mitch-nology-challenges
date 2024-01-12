import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ moduleName = "No Name", moduleDates = "Unkown Date" }) => {
  const [textIsHidden, setTextIsHidden] = useState(false);
  const [borderShown, setBorderShown] = useState(true);

  const handleClick = () => {
    setTextIsHidden(!textIsHidden);
  };

  const classes = borderShown
    ? `${styles.card} ${styles.card_border}`
    : `${styles.card}`;

  return (
    <article className={classes}>
      <h2>{moduleName}</h2>
      <p>{moduleDates}</p>
      {/* Thisa should change to less info */}
      <button onClick={handleClick}>
        {textIsHidden ? "More Info" : "Less Info"}
      </button>
      {/* This should be hidden by default */}
      {!textIsHidden && <p>Some More Info</p>}
      <button onClick={() => setBorderShown(!borderShown)}>Hide border</button>
    </article>
  );
};

export default Card;
