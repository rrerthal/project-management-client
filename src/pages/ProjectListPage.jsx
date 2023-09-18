import { useState, useEffect } from "react";
import axios from "axios";

import ProjectCard from "../components/ProjectCard";
import AddProject from "../components/AddProject";


function ProjectListPage() {
    const [projects, setProjects] = useState([]);

    const getAllProjects = () => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/projects`)
            .then((response) => setProjects(response.data))
            .catch((error) => console.log(error));
    };

    // We set this effect will run only once, after the initial render
    // by setting the empty dependency array - []
    useEffect(() => {
        getAllProjects();
    }, []);

    return (
        <div className="ProjectListPage">
            <AddProject refreshProjects={getAllProjects} />

            {projects.map((project) => (
                <ProjectCard key={project._id} {...project} />
            ))}
        </div>
    );
}

export default ProjectListPage;