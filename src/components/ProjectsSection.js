import React from "react";
import ProjectCard from "./ProjectCard";
import ProfileCard from "./ProfileCard";

const projects = [
  {
    id: 1,
    title: "Audio App",
    description: "Portfolio Framer Template",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/audio-app",
  },
  {
    id: 2,
    title: "Recipe App Mongodb",
    description: "Modern Framer Template",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/recipe-app-mongodb",
  },
  {
    id: 3,
    title: "To-Do List Application",
    description: "SaaS Framer Template",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/Todo-list",
  },
  {
    id: 4,
    title: "Employee Registration",
    description: "SaaS Framer Template",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/employee-registration"
  },
];

function ProjectsSection() {
  return (


    <div className="flex flex-col md:flex-row gap-10 p-5">
   
    <div className="profile-card-container">
      <ProfileCard />
    </div>

    <div className="projects-section p-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Recent Projects and <span className="text-purple-500">Achievements</span>
      </h2>
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      <div className="projects-section p-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Group Projects and <span className="text-purple-500">Achievements</span>
      </h2>
      </div>
      
    </div>
    </div>
  );
}

export default ProjectsSection;