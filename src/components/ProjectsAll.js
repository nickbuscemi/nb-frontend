import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard'; // Adjust the path as needed
import { projects } from '../data/projectsData';

export const ProjectsAll = () => {
  const [clicked, setClicked] = useState(Array(projects.length).fill(false));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (index) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  return (
    <section className="py-8" id="projects">
      <Container>
        <h3 className="text-3xl font-bold text-center mt-28 mb-8">My Projects</h3>
        <p className="text-center">Below you can check out all of my projects. They are either deployed on the web or available for download.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-28">
          {projects.map((project, idx) => (
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
      </Container>
    </section>
  );
};
