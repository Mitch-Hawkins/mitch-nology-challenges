import Button from "../Button/Button";
import styles from "./Counter.module.scss";
import { useState } from "react";

const Counter = () => {
  // in React there's a special type of variable called a state variable

  // React only triggers a re-render if a state variable is updated

  // How to create a state variable
  //  I need to use a react hook
  //  useSomething
  //  useState

  const [count, setCount] = useState(0); //useState returns an array of two things
  //count becomes the initial value, and setCount becomes the updateState function

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Button handleClick={handleDecrement}>-</Button>
      <p>{count}</p>
      <Button handleClick={handleIncrement}>+</Button>
    </div>
  );
};

export default Counter;

//we can pass state as props
//we can pass state setter functions as props
