import React from 'react';
import './ExperienceSection.css'; 

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Reflections',
      description:
        'I have learned a lot from this project. I have learned how to use React and how to use the API.',
      
    },
  ];

  return (
    <div className="experience-section">
      <h2>
      Feedback and <span className="highlight">Reflections</span>
      </h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-details">
              <h3>{experience.company}</h3>
              <p>{experience.description}</p>
              <span>{experience.duration}</span>
            </div>
            <div className="experience-link">
              <button className="arrow-btn">
                <i className="fas fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
