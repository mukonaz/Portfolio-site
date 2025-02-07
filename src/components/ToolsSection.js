import React from "react";
import ProfileCard from "./ProfileCard";

const tools = [
  { name: "HTML", description: "Website Builder", icon: "🌐" },
  { name: "CSS", description: "Design Tool", icon: "🎨" },
  { name: "Javascript", description: "Function Provider", icon: "💳" },
  { name: "React Native", description: "Mobile Builder", icon: "🤖" },
  { name: "Mongo DB", description: "Data storage", icon: "📓" },
  { name: "WebCraft", description: "React Framework", icon: "⚛️" },
  {
    title: "Hotel App",
    category: "Assement",
    date: "2024-",
    score: "N/A",
    notes: ".",
    buttonText: "View Code",
  },
  {
    title: "UI Challenge",
    category: "UI/UX",
    date: "2024-",
    score: "85%",
    notes: "Above average.",
    buttonText: "View Code",
  },
  {
    title: "JavaScript Assessment",
    category: "JavaScript",
    date: "2024-",
    score: "90%",
    notes: "Excellent understanding of basics.",
    buttonText: "View Code",
  },
  {
    title: "React Native",
    category: "Mobile",
    date: "2024-",
    score: "N/A",
    notes: "Completed an external course.",
    buttonText: "View Code",
  },
];

const ToolCard = ({ name, description, icon }) => {
  return (
    <div className="tool-card bg-gray-800 p-4 rounded-lg flex items-center gap-4 hover:bg-gray-700 transition">
      <div className="icon text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ToolsSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-5">
      <div className="profile-card-container">
        <ProfileCard />
      </div>
      <div className="tools-section">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Skills <span className="text-purple-500">Matrix</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.slice(0, 6).map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              description={tool.description}
              icon={tool.icon}
            />
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-8">Assessments</h1>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.slice(6).map((assessment, index) => (
            <div
              key={index}
              className="w-72 bg-gray-800 shadow-md rounded-lg p-6 border border-black"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{assessment.title}</h2>
                <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {assessment.category}
                </span>
              </div>
              <div className="text-sm mb-2">
                <p>
                  <strong>Date Completed:</strong> {assessment.date}
                </p>
                <p>
                  <strong>Grade/Score:</strong>{" "}
                  <span className="text-green-600">{assessment.score}</span>
                </p>
                <p>
                  <strong>Notes:</strong> {assessment.notes}
                </p>
              </div>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                {assessment.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      
        
      </div>
  
  );
};

export default ToolsSection;
