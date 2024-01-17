import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./ProjectsList.module.scss";

const ProjectsList = ({ projects }) => {
    return (
        <section className={styles.list}>
            {projects.length > 0 &&
                projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            projectTitle={project.title}
                            description={project.description}
                            githubLink={project.githubLink}
                            deployedLink={project.deployedLink}
                            id={project.id}
                        />
                    );
                })}
        </section>
    );
};

export default ProjectsList;
