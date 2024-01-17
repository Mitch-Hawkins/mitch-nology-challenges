import SearchBar from "../../components/SearchBar/SearchBar";
import Description from "../../components/Description/Description";

const SearchBarContainer = ({ setSearchTerm, searchTerm }) => {
    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Description searchTerm={searchTerm} />
        </div>
    );
};

export default SearchBarContainer;
