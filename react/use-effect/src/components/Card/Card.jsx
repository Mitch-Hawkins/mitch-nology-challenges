import { useState } from "react";
import { useEffect } from "react";

const Card = () => {
    const [showPara, setShowPara] = useState(false);
    const [number, setNumber] = useState(0);

    // useEffect takes in up to two parameters
    // useEffect with one parameter will run every single time something in my app changes
    // useEffect(() => {
    //     console.log("Use effect with one param ran");
    // });

    // THIS WILL RUN WHEN THE COMPONENT FIRST MOUNTS
    // AND WHEN number CHANGES
    // useEffect(() => {
    //     console.log("Number changed");
    // }, [number]);

    // THIS WILL RUN WHEN THE COMPONENT FIRST RENDERS TO THE PAGE
    useEffect(() => {
        console.log("Component mounts");

        // this is a cleanup function
        return () => {
            // the code that we put in here
            // runs when the component unmounts
            console.log("component unmounted");
        };
    }, []);

    return (
        <div>
            <h1>Card</h1>
            {showPara && <p>Some text</p>}
            <button onClick={() => setShowPara(!showPara)}>Click</button>
            <button onClick={() => setNumber(number + 1)}>Add one</button>
        </div>
    );
};

export default Card;
