import React from "react";

const ProjectCard = ({ title, description, githubUrl }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-4 text-gray-300">{description}</p>
    <a 
      href={githubUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block mt-4 text-blue-400 hover:underline"
    >
      View on GitHub
    </a>
  </div>
);

const ProjectSection = ({ projects }) => (
  <section className="bg-gray-900 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
