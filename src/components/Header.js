import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaFolderOpen,
} from "react-icons/fa";
import "../App.css";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header flex gap-4 p-4 bg-gray-800 rounded-md mt-4">
      <nav className="nav-links flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white hover:text-purple-500 ${
              isActive ? "text-purple-500" : ""
            }`
          }
        >
          <FaHome size={24} />
          <span className="tooltip">Home</span>
        </NavLink>
        {/* <a href="#profile"><FaHome className="text-purple-400 text-2xl cursor-pointer" /></a> */}

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-white hover:text-purple-500 ${
              isActive ? "text-purple-500" : ""
            }`
          }
        >
          <FaFolderOpen size={24} />
          <span className="tooltip">Projects</span>
        </NavLink>
        <NavLink
          to="/tool"
          className={({ isActive }) =>
            `text-white hover:text-purple-500 ${isActive ? "text-purple-500" : ""}`
          }
        >
          <FaBriefcase size={24} />
          <span className="tooltip">Tool</span>
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `text-white hover:text-purple-500 ${isActive ? "text-purple-500" : ""}`
          }
        >
          <FaUser size={24} />
          <span className="tooltip">Experience</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-white hover:text-purple-500 ${isActive ? "text-purple-500" : ""}`
          }
        >
          <FaEnvelope size={24} />
          <span className="tooltip">Contact</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
