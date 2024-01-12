import StarCard from "../../components/StarshipCard/StarshipCard";

const StarshipCardList = ({ pageData, searchTerm }) => {
  let dataToRender = [...pageData];
  if (searchTerm) {
    dataToRender = dataToRender.filter((ship) => {
      return ship.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return (
    <div>
      {dataToRender.map((ship, i) => {
        return (
          <StarCard
            key={ship.name}
            name={ship.name}
            manufacturer={ship.manufacturer}
            length={ship.length}
            index={i % 2}
          />
        );
      })}
    </div>
  );
};

export default StarshipCardList;
