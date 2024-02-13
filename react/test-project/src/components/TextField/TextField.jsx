import { useState } from "react";

const TextField = ({ initial }) => {
  const [input, setInput] = useState(initial);

  const handleChange = (event) => {
    setInput(event.target.value);
    // This console.log never logs the right input value, why?
    // Where could I move log this to see the new value?
    console.log(input);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
    </div>
  );
};

export default TextField;
