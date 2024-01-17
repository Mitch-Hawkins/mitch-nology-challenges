import { useState, useEffect } from "react";

const Updates = () => {
  let [count, setCount] = useState(100);
  let [updates, setUpdates] = useState(0);

  useEffect(() => {
    setUpdates(updates + 1);
  }, [count]);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};
export default Updates;
