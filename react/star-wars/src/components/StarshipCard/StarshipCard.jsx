import styles from "./StarshipCard.module.scss";

const StarCard = ({ name, manufacturer, length, index }) => {
  let filteredClass;

  if (index == 0) {
    filteredClass = styles.even;
  } else {
    filteredClass = styles.odd;
  }

  return (
    <div className={filteredClass}>
      <h3>Ship name: {name}</h3>
      <p>Manufacturer: {manufacturer}</p>
      <p>Length: {length}</p>
    </div>
  );
};

export default StarCard;
