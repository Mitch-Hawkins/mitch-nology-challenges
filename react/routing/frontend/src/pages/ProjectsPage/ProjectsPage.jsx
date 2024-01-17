import { useContext } from "react";
import Heading from "../../components/Heading/Heading";
import ProjectsList from "../../containers/ProjectsList/ProjectsList";
import { ProjectsContext } from "../../context/ProjectsContextProvider";

const ProjectsPage = () => {
    const { projectLoading, projects } = useContext(ProjectsContext);
    return (
        <main>
            <Heading>Projects</Heading>
            {projectLoading && <p>Loading...</p>}
            {!projectLoading && <ProjectsList projects={projects} />}
        </main>
    );
};

export default ProjectsPage;
