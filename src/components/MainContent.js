import React, {useState} from "react";
import { Link } from "react-router-dom";

function MainContent() {

  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);

  const goals = [
    { type: "Short-Term", text: "Secure a job in web development." },
    { type: "Short-Term", text: "Build 2-3 more portfolio projects." },
    { type: "Long-Term", text: "Become a full-stack developer." },
    { type: "Long-Term", text: "Contribute to open-source projects." },
  ];

  const handleNext = () => {
    setCurrentGoalIndex((prevIndex) => (prevIndex + 1) % goals.length);
  };

  const handlePrevious = () => {
    setCurrentGoalIndex((prevIndex) =>
      prevIndex === 0 ? goals.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-content max-w-lg text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Transforming Your Ideas into <span className="text-purple-500">Reality</span>
      </h1>
      <p className="text-gray-400 mt-4">
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
      </p>
      <div className="stats flex justify-center md:justify-start gap-10 mt-6">
        <div>
          <h2 className="text-3xl font-bold">+1</h2>
          <p className="text-gray-400">Years of Experience</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">+19</h2>
          <p className="text-gray-400">Projects Completed</p>
        </div>
        {/* <div>
          <h2 className="text-3xl font-bold">+20</h2>
          <p className="text-gray-400">Worldwide Clients</p>
        </div> */}
      </div>
      <div className="buttons mt-6 flex justify-center md:justify-start gap-4">
        <a className="bg-purple-500 text-white py-2 px-4 rounded-full mt-4"><Link to="/contact">
                Let's Talk
                </Link>
                  
                </a>
                <a
    
          className="bg-transparent border border-purple-500 text-purple-500 py-2 px-4 rounded-full mt-4"
        ><Link to="/projects">My work →</Link>
          
        </a>
        {/* <button className="bg-transparent border border-purple-500 text-purple-500 py-2 px-4 rounded-full">
          My Work →
        </button> */}
      </div>

<div className="main-content max-w-lg text-center md:text-left">


      <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 mb-4">
        Thing that i wnat to do and my <span className="text-purple-500 ">Goals</span>
      </h1>

      <div className="w-full md:w-2/3 lg:w-4/2 bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-purple-500 mb-2">
          {goals[currentGoalIndex].type} Goal
        </h2>
        <p className="text-gray-300 text-md">{goals[currentGoalIndex].text}</p>
      </div>

      <div className="flex items-center justify-between w-76 mt-6">
        <button
          onClick={handlePrevious}
          className="p-4 bg-gray-700 rounded-full hover:bg-gray-600"
          aria-label="Previous"
        >←
          <i className="fas fa-arrow-left text-white"></i>
        </button>
        <button
          onClick={handleNext}
          className="p-4 bg-gray-700 rounded-full hover:bg-gray-600"
          aria-label="Next"
        >→
          <i className="fas fa-arrow-right text-white"></i>
        </button>
      </div>
    </div>
      
    </div>


  );
}

export default MainContent;
