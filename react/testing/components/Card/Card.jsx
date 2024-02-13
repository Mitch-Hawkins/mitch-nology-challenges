import { useState } from "react";

const Card = ({ heading, content }) => {
  const [contentShown, setContentShown] = useState(false);

  return (
    <div>
      <h2>{heading}</h2>
      <button onClick={() => setContentShown(!contentShown)}>
        {contentShown ? "Show Less" : "Show More"}
      </button>
      {contentShown && <p>{content}</p>}
    </div>
  );
};

export default Card;
