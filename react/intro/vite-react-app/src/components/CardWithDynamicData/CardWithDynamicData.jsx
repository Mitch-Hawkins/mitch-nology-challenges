import React from "react";

const CardWithDynamicData = (props) => {
  return (
    <div>
      <h4>{props.title ?? "No title"}</h4>
      <p>Description</p>
    </div>
  );
};

export default CardWithDynamicData;

// npm package called prop types
