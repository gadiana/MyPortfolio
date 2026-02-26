import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectTypeCard = ({ title, category, description, techStack, isDarkMode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects/details", {
      state: {
        title: title,
        category: category,
      },
    });
  };

  return (
    <motion.div
      className="p-6 rounded-lg backdrop-blur-md border transition-all duration-300 cursor-pointer"
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
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="text-sm opacity-75 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.05)",
              }}
            >
              {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectTypeCard;