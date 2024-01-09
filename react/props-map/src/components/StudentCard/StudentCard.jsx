const StudentCard = (props) => {
  return (
    <article>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      {props.isLocationVisible && <p>{props.location}</p>}{" "}
      {/* Always resolves to the last variable that is truthy */}
    </article>
  );
};

export default StudentCard;
