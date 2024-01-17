import NamesList from "../../containers/NamesList/NamesList";

const Home = ({ searchTerm }) => {
    return (
        <main>
            <NamesList searchTerm={searchTerm} />
        </main>
    );
};

export default Home;
