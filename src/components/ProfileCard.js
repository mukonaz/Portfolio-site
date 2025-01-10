import React from "react";
import { Link } from "react-router-dom";
import myImage from "./assets/IMG_0459.JPEG";

function ProfileCard() {
  return (
    <div className="profile-card bg-gray-900 p-6 rounded-lg text-center">
      <img
        src={myImage}
        alt="Profile"
        className="rounded-lg mx-auto mb-4 w-64 h-64 object-cover"
      />
      <h1 className="text-xl font-bold"><a href="https://github.com/mukonaz" target="_blank">👉 Ravele Mukonazwothe</a></h1>
      <p className="text-gray-400">Full-stack web development</p>
      <p className="text-gray-400">Tembisa codeTribe Lab</p>
      <p className="text-gray-400">Last updated Date <span className="text-purple-400">2025-01-10</span></p>
      <div className="social-links flex justify-center gap-4 my-4">
        <a href="#" className="text-purple-400">
          0799336416
        </a>
        <a href="#" className="text-purple-400">
          livhumukona9@gmail.com
        </a>
      </div>
      <div className="buttons mt-6 flex justify-center md:justify-start gap-4">
        <a className="bg-purple-500 text-white py-2 px-4 rounded-full mt-4"><Link to="/contact">
        Let's Talk
        </Link>
          
        </a>
        <a
          href="/build/documents/ravele mukona CV.pdf"
          download="ravele mukona CV.pdf"
          className="bg-transparent border border-purple-500 text-purple-500 py-2 px-4 rounded-full mt-4"
        >
          Resume →
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
