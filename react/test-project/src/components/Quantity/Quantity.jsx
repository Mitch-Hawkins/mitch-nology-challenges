import React from "react";
import { useState } from "react";

const Quantity = ({ onChange }) => {
  const [qty, setQty] = useState(100);

  const handleIncrement = () => {
    setQty(qty + 2);
  };

  const handleDecrement = () => {
    setQty(qty - 2);
  };


  return (
    <>
      <div>
        <button onClick={handleDecrement}>-2</button>
        {qty}
        <button onClick={handleIncrement}>+2</button>
      </div>
    </>
  );
};
export default Quantity;
