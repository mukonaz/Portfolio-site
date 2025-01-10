import React from "react";
// import Header from "./Header";
import ProfileCard from "./ProfileCard";
import MainContent from ".//MainContent";
import ProjectsSection from "./ProjectCard";
import ToolsSection from "./ToolsSection";
import "../App.css";

function Home() {
  return (
    <div className="app  text-white min-h-screen flex flex-col items-center">
     
      <div id="profile" className="content-container flex flex-col md:flex-row items-center justify-center gap-10 p-5">
        <ProfileCard />
        <MainContent />
      </div>
    
    </div>
  );
}

export default Home;