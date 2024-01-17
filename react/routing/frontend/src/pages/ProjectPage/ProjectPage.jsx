import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContextProvider";
import { useEffect } from "react";
import styles from "./ProjectPage.module.scss";

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const { projects } = useContext(ProjectsContext);
    console.log(projects);
    console.log(typeof id); // this is a string, be careful when checking for equality if the actual id is of type number

    useEffect(() => {
        if (projects.length > 0 && id) {
            const foundProject = projects.find((project) => project.id == id);
            setProject(foundProject);
        }
    }, [projects, id]);

    return (
        <div>
            {/* {!id} */}
            {!project && <p>Can't find project info</p>}
            {project && (
                <section className={styles.content}>
                    <Heading>{project.title}</Heading>
                    <p>{project.description}</p>
                    <div className={styles.links}>
                        <Link to={project.githubLink} target="_blank">
                            Github
                        </Link>
                        <Link to={project.deployedLink} target="_blank">
                            Deployed Version
                        </Link>
                    </div>
                    <Link to="/projects" className={styles.back_btn}>
                        Back to all projects
                    </Link>
                </section>
            )}
        </div>
    );
};

export default ProjectPage;
