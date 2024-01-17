import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContextProvider";
import styles from "./NameCard.module.scss";

const NameCard = ({ name }) => {
    const { darkMode } = useContext(DarkModeContext);
    const classes = [styles.card];

    darkMode
        ? [classes.push(styles.card_dark)]
        : [classes.push(styles.card_light)];

    return (
        <div className={classes.join(" ")}>
            <p>{name}</p>
        </div>
    );
};

export default NameCard;
