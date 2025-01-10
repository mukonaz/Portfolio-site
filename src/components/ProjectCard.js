import React from "react";

function ProjectCard({ title, description, image,link }) {
  return (
    <div className="project-card bg-gray-900 rounded-lg overflow-hidden shadow-lg ">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
     <div className="button flex justify-center mb-2">
      <button className="bg-transparent border flex justify-center border-purple-500 text-purple-500 py-2 px-4 rounded-full mt-4">
        <a href={link}
              target="_blank"
              rel="noopener noreferrer">
              Github link →
          </a>  
        </button>
     </div>
      
    </div>
  );
}

export default ProjectCard;
