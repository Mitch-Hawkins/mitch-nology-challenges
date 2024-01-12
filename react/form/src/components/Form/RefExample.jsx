import { useRef } from "react";
import { useState } from "react";

const RefExample = () => {
    const [inputVal, setInputVal] = useState("");
    const number = useRef(0);
    console.log(number);

    const handleClick = () => {
        number.current++;
        console.log(number.current);
    };

    return (
        <div>
            <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
            <p>{number.current}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default RefExample;
