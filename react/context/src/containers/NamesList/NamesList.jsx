import { useContext } from "react";
import NameCard from "../../components/NameCard/NameCard";
import { SearchContext } from "../../context/SearchContextProvider";
import { UsernameContext } from "../../context/UsernameContextProvider";

const names = ["Jack", "Jane", "John", "Kate", "Chris", "Alex", "Cal"];

const NamesList = ({ searchTerm }) => {
  const { contextSearchTerm } = useContext(SearchContext);
  console.log(contextSearchTerm);

  const { username } = useContext(UsernameContext);

  let list = [...names];

  if (contextSearchTerm) {
    list = list.filter((name) =>
      name.toLowerCase().includes(contextSearchTerm.toLowerCase())
    );
  }

  return (
    <section>
      <h3>Names</h3>
      {list.map((name, i) => (
        <NameCard key={i} name={name} />
      ))}
      <div>
        <p>Would you like to logout, {username}?</p>
        <button>Log Out</button>
      </div>
    </section>
  );
};

export default NamesList;
