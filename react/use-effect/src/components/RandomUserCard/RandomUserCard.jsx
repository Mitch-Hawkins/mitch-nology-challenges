const RandomUserCard = ({ name, city, age }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{city}</p>
            <p>{age}</p>
        </div>
    );
};

export default RandomUserCard;
