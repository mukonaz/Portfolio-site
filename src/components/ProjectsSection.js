import React from "react";
import ProjectCard from "./ProjectCard";
import ProfileCard from "./ProfileCard";
import myImage from "./assets/Screenshot 2025-01-12 225135.png";
import myImage2 from "./assets/Screenshot 2025-02-13 212910.png";
import myImage3 from "./assets/378342497-febf781d-9629-46b5-a32c-11e45aa2c45c.png";
import myImage4 from "./assets/377226875-7c4d2175-c129-4dcd-b557-06efb3cbd00a.png";
import myImage5 from "./assets/Screenshot 2025-02-13 215338.png";
import myImage6 from "./assets/378231398-e4a47854-edf5-4856-9042-223d951017ce.png";
import myImage7 from "./assets/Screenshot 2025-02-13 215740.png";
import myImage8 from "./assets/Screenshot 2025-02-13 220156.png";

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
    image: myImage2,
    link:"https://github.com/mukonaz/recipe-app-mongodb",
  },
  {
    id: 3,
    title: "To-Do List Application",
    description: "React",
    image: myImage3,
    link:"https://github.com/mukonaz/Todo-list",
  },
  {
    id: 4,
    title: "Employee Registration",
    description: "React",
    image: myImage4,
    link:"https://github.com/mukonaz/employee-registration"
  },
  {
    id: 5,
    title: "Shopping List Application",
    description: "React",
    image: myImage5,
    link:"https://github.com/mukonaz/Shopping-List-Redux"
  },
  {
    id: 6,
    title: "News App",
    description: "React",
    image: myImage6,
    link:"https://github.com/mukonaz/react-news-app"
  },
  {
    id: 7,
    title: "Recipe App",
    description: "React",
    image: myImage2,
    link:"https://github.com/mukonaz/online-recipe"
  },
  {
    id: 8,
    title: "Server Nodejs",
    description: "Nodejs",
    image: myImage7,
    link:"https://github.com/mukonaz/basic-server"
  },
  {
    id: 9,
    title: "Shopping Nodejs",
    description: "Nodejs",
    image: myImage7,
    link:"https://github.com/mukonaz/shopping-list-app-node"
  },
  {
    id: 10,
    title: "Book dictionary Nodejs",
    description: "Nodejs",
    image: myImage7,
    link:"https://github.com/mukonaz/Book-Directory"
  },
  {
    id: 11,
    title: "Quiz App",
    description: "Nodejs",
    image: myImage7,
    link:"https://github.com/mukonaz/quiz--app"
  },
  {
    id: 12,
    title: "Memory Game",
    description: "Nodejs",
    image: myImage8,
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