import { useState, useEffect } from "react";

const Facts = () => {
  const [facts, setFacts] = useState(null);

  useEffect(() => {
    const setData = async () => {
      const response = await fetch("https://catfact.ninja/facts");
      const data = await response.json();
      setFacts(data.data);
      console.log(data.data);
    };

    setData();
  }, []);

  return (
    <>
      {facts &&
        facts.map((fact, index) => {
          return <p key={index}>{fact.fact}</p>;
        })}
    </>
  );
};

export default Facts;
