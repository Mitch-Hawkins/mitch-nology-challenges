import React from "react";
import Listingcard from "../Listingcard/Listingcard";
import styles from "./Cardcontainer.module.scss";

const Cardcontainer = () => {
  return (
    <div className={styles.container}>
      <Listingcard
        title="Pet Beach, Australia"
        rating="4.55"
        distance="132 kilometres away"
        date="10-22 Jan"
        price="$30,000 AUD "
      />
      <Listingcard
        title="Kitten City, Australia"
        rating="3.55"
        distance="78 kilometres away"
        date="22-25 Jan"
        price="$7,000 AUD "
      />
      <Listingcard
        title="Dog Village, Australia"
        rating="2.85"
        distance="12 kilometres away"
        date="2-14 Feb"
        price="$3,450 AUD "
      />
      <Listingcard
        title="Cat Town, Australia"
        rating="3.86"
        distance="619 kilometres away"
        date="10-22 Feb"
        price="$9,999 AUD "
      />
    </div>
  );
};

export default Cardcontainer;
