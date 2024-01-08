import React from "react";

import styles from "./Listingcard.module.scss";

const Listingcard = (props) => {
  return (
    <div className={styles.container}>
      <img src="http://placekitten.com/300/300" className={styles.cardImage} />
      <h4>{props.title}</h4>
      <p className={styles.rating}>★ {props.rating}</p>
      <p className={styles.infotext}>{props.distance}</p>
      <p className={styles.infotext}>{props.date}</p>
      <p className={styles.pricetext}>
        {props.price}
        <span>total</span>
      </p>
    </div>
  );
};

export default Listingcard;
