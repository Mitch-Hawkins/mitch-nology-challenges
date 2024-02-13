import { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h2>
          Count: <span title="count">{count}</span>
        </h2>
        <button disabled={count < 1} onClick={() => setCount(count - 1)}>
          -
        </button>
        <button onClick={() => setCount(initialValue)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
