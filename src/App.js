import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";
// import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app bg-black text-white min-h-screen flex flex-col items-center">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/tool" element={<ToolsSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

