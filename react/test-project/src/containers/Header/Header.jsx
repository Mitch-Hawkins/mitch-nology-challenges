import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return <SearchBar />;
};

export default Header;
