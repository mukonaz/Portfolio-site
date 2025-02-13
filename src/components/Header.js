import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaFolderOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../App.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header bg-gray-800 p-4 rounded-md mt-4">
      
      <button className="text-white md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav
        className={`nav-links md:flex gap-6 ${
          isOpen ? "flex flex-col mt-4" : "hidden md:flex"
        }`}
      >
        {[
          { to: "/", icon: <FaHome />, label: "Home" },
          { to: "/projects", icon: <FaFolderOpen />, label: "Projects" },
          { to: "/tool", icon: <FaBriefcase />, label: "Tool" },
          { to: "/experience", icon: <FaUser />, label: "Experience" },
          { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 text-white p-2 rounded-md transition ${
                isActive ? "bg-purple-500 text-white" : "hover:text-purple-500"
              }`
            }
            onClick={closeMenu}
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Header;
