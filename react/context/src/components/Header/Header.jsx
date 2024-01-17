import SearchBarContainer from "../../containers/SearchBarContainer/SearchBarContainer";

const Header = ({ searchTerm, setSearchTerm }) => {
    return (
        <header>
            <h1>React Context</h1>
            <SearchBarContainer
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
            />
        </header>
    );
};

export default Header;
