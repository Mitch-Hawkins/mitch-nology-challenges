import { useState, useEffect } from "react";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timeInt = setInterval(() => {
            console.log("time changed");
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            console.log("Turned off interval, clock disappeared");
            clearInterval(timeInt);
        };
    }, []);

    return (
        <div>
            <p>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default Clock;
