import React from "react";
import ProjectCard from "./ProjectCard";
import ProfileCard from "./ProfileCard";
import myImage from "./assets/Screenshot 2025-01-12 225135.png";

const projects = [
  {
    id: 1,
    title: "Audio App",
    description: "React Native",
    image: myImage,
    link:"https://github.com/mukonaz/audio-app",
  },
  {
    id: 2,
    title: "Recipe App Mongodb",
    description: "React And Mongodb",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/recipe-app-mongodb",
  },
  {
    id: 3,
    title: "To-Do List Application",
    description: "React",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/Todo-list",
  },
  {
    id: 4,
    title: "Employee Registration",
    description: "React",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/employee-registration"
  },
  {
    id: 5,
    title: "Shopping List Application",
    description: "React",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/Shopping-List-Redux"
  },
  {
    id: 6,
    title: "News App",
    description: "React",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/react-news-app"
  },
  {
    id: 7,
    title: "Recipe App",
    description: "React",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/online-recipe"
  },
  {
    id: 8,
    title: "Server Nodejs",
    description: "Nodejs",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/basic-server"
  },
  {
    id: 9,
    title: "Shopping Nodejs",
    description: "Nodejs",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/shopping-list-app-node"
  },
  {
    id: 10,
    title: "Book dictionary Nodejs",
    description: "Nodejs",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/Book-Directory"
  },
  {
    id: 11,
    title: "Quiz App",
    description: "Nodejs",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/quiz--app"
  },
  {
    id: 12,
    title: "Memory Game",
    description: "Nodejs",
    image: "https://via.placeholder.com/300x200",
    link:"https://github.com/mukonaz/card-game"
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