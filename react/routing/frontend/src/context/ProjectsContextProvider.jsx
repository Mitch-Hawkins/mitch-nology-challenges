import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAllProjects } from "../services/projects";

export const ProjectsContext = createContext(null);

const ProjectsContextProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllProjects()
            .then(setProjects)
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects, projectLoading: loading }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsContextProvider;
