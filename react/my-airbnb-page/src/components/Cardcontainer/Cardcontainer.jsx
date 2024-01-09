import React from "react";
import Listingcard from "../Listingcard/Listingcard";
import styles from "./Cardcontainer.module.scss";
import listings from "../../data/data.json";

const Cardcontainer = () => {
  return (
    <div className={styles.container}>
      {listings.map((listing) => {
        return (
          <Listingcard
            key={listing.id}
            title={listing.location}
            distance={listing.distance}
            date={listing.dates_available}
            price={listing.price}
            rating={listing.rating}
          />
        );
      })}
    </div>
  );
};

export default Cardcontainer;
