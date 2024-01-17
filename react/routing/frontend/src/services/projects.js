export const getAllProjects = async () => {
    const response = await fetch(" http://localhost:3000/projects");

    if (!response.ok) {
        throw new Error("Could not get data");
    }

    const data = await response.json();
    return data;
};
