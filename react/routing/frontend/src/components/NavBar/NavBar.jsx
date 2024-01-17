import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

// The reason I want to use NavLink for my nav is beacuse it contains a bit more context about where I am in my app

// it allows me to style my active link

const NavBar = () => {
    const linkStyles = ({ isActive }) => {
        return isActive
            ? `${styles.link} ${styles.active_link}`
            : `${styles.link}`;
    };

    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={linkStyles}>
                Home
            </NavLink>
            <NavLink to="/about-me" className={linkStyles}>
                About me
            </NavLink>
            <NavLink to="/projects" className={linkStyles}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={linkStyles}>
                Contact
            </NavLink>
        </nav>
    );
};

export default NavBar;
