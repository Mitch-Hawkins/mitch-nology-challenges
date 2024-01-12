import { useState } from "react";
import RandomUserCard from "../../components/RandomUserCard/RandomUserCard";

const RandomUsersList = ({ userData }) => {
  // here I will need to .map something to render user cards
  const [userArray, setUserArray] = useState([]);
  //   setUserArray(userData);

  return (
    <div>
      {userData.map((user) => {
        return (
          <RandomUserCard
            key={user.name.first}
            name={user.name.first}
            age={user.dob.age}
            city={user.location.city}
          />
        );
      })}
    </div>
  );
};

export default RandomUsersList;
