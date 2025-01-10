import React from 'react';
import './ExperienceSection.css'; 

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'PixelForge Studios',
      description:
        'Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.',
      duration: 'Jan 2020 - Present',
    },
    {
      company: 'BlueWave Innovators',
      description:
        'Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.',
      duration: 'Jun 2017 - Dec 2019',
    },
    {
      company: 'TrendCraft Solutions',
      description:
        'Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.',
      duration: 'Mar 2015 - May 2017',
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
