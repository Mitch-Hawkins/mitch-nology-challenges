import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({
    projectTitle = "Unknown",
    description = "Not provided",
    githubLink,
    id,
}) => {
    console.log(id);
    return (
        <article className={styles.card}>
            <h3>{projectTitle}</h3>
            <p>{description}</p>
            {/* <a href={githubLink} target="_blank">
                Github
            </a> */}

            <Link to={`${id}`}>See More</Link>
        </article>
    );
};

export default ProjectCard;
