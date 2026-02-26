import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ 
  image, 
  title, 
  description, 
  techStack, 
  githubLink, 
  liveLink, 
  isDarkMode 
}) => {
  return (
    <div
      className="p-6 rounded-lg backdrop-blur-md border transition-all duration-300 hover:-translate-y-1 max-w-xs"
      style={{
        backgroundColor: isDarkMode
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(255, 255, 255, 0.7)",
        borderColor: isDarkMode
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)",
        boxShadow: isDarkMode
          ? "0 4px 16px 0 rgba(0, 0, 0, 0.2)"
          : "0 4px 16px 0 rgba(31, 38, 135, 0.1)",
      }}
    >
      <div className="mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
      </div>

      <h3 className="text-md font-bold mb-2">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-center px-3 py-2 rounded-md"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.05)",
              }}
            >
              {IconComponent && <IconComponent className="w-4 h-4 mr-1" />}
            </div>
          );
        })}
      </div>

      <p className="text-sm opacity-75 mb-4">{description}</p>

      <div className="flex gap-3 justify-end">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
              border: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.2)"
                : "1px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            <FaGithub className="w-4 h-4" />
          </a>
        )}

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
              border: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.2)"
                : "1px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            <FaExternalLinkAlt className="w-3 h-3" />

          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;