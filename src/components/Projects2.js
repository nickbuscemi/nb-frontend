import React, { useState } from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard'; // Adjust the path as needed
import { Link } from 'react-router-dom';

export const Projects2 = () => {
  const [clicked, setClicked] = useState(Array(6).fill(false)); // Assuming 6 projects

  const handleCardClick = (index) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  return (
    <section className="py-8" id="projects">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8 no-underline">Recent Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, idx) => (
            <div key={idx} onClick={() => handleCardClick(idx)} className="flex justify-center cursor-pointer">
              <Link to={project.link} className="no-underline">
                <ProjectCard
                  imgSrc={project.imgUrl}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to='./projects-all' className="no-underline">
            <button className="inline-block align-middle select-none font-sans font-bold text-center uppercase transition-all no-underline disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-700 text-white shadow-md shadow-gray-700/10 hover:shadow-lg hover:shadow-gray-700/20 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none">
              View All...
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
