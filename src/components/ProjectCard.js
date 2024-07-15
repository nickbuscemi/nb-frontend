import React from 'react';

function ProjectCard({ imgSrc, title, description, link }) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-gray-50 shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative h-56 mx-4 mt-4 overflow-hidden text-white bg-clip-border rounded-xl">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 text-xl font-semibold leading-snug tracking-normal text-white">
          {title}
        </h5>
        <p className="block font-light leading-relaxed text-white">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block align-middle select-none font-sans font-bold text-center uppercase transition-all no-underline disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-700 text-white shadow-md shadow-gray-700/10 hover:shadow-lg hover:shadow-gray-700/20 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none"
        >
          Go To Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
