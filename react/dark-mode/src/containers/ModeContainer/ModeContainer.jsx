import styles from "./ModeContainer.module.scss";
import { useState } from "react";

const ModeContainer = () => {
  const [mode, setMode] = useState("Light");
  const [color, setColor] = useState(styles.lightMode);

  const handleClick = () => {
    if (mode == "Light") {
      setMode("Dark");
      setColor(styles.darkMode);
    } else {
      setMode("Light");
      setColor(styles.lightMode);
    }
    console.log(mode);
  };

  return (
    <div className={color}>
      <h1>Change Mode</h1>
      <button onClick={handleClick}>Change to {mode} Mode</button>
    </div>
  );
};

export default ModeContainer;
