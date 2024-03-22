import React from "react";
import ProjectContent from "./ProjectContent";

const Project: React.FC = () => {
    return(
        <section id="projects" className="my-auto min-h-screen flex flex-col justify-around items-center ">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <ProjectContent/>
        </section>
    )
}

export default Project;