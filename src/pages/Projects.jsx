import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import ProjectTypeCard from "../components/ProjectPageComponent/ProjectTypeCard.jsx";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const Projects = ({ isDarkMode }) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15,
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const frontendProjects = {
    title: "Front-End Projects",
    category: "front-end",
    description:
      "Interactive and responsive user interfaces built with modern frameworks",
    techStack: [
      { name: "React", icon: FaIcons.FaReact },
      { name: "Tailwind CSS", icon: SiIcons.SiTailwindcss },
      { name: "JavaScript", icon: SiIcons.SiJavascript },
      { name: "Framer Motion", icon: SiIcons.SiFramer },
    ],
  };

  const fullstackProjects = {
    title: "Full-Stack Projects",
    category: "full-stack",
    description:
      "Complete applications with both frontend and backend implementations",
    techStack: [
      { name: "React", icon: FaIcons.FaReact },
      { name: "PHP", icon: FaIcons.FaPhp },
      { name: "MySQL", icon: SiIcons.SiMysql },
    ],
  };

  const backendProjects = {
    title: "API Integration",
    category: "back-end",
    description: "Server-side applications and API development",
    techStack: [
      { name: "C#", icon: null },
      { name: "Restful API", icon: null },
      { name: "Chrome Extension", icon: FaIcons.FaChrome },
    ],
  };

  const tools = {
    title: "Dev Tools",
    category: "tools",
    description: "Various tools I use in my projects",
    techStack: [
      { name: "Github", icon: FaIcons.FaGithub },
      { name: "Bitbucket", icon: FaIcons.FaBitbucket },
    ],
  };

  return (
    <>
      <Navigation isDarkMode={isDarkMode} />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        {/* Title */}
        <motion.h1
          className="text-5xl font-bold mb-8"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          My Projects
        </motion.h1>

        {/* Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full"
        >
          <motion.p className="text-lg text-center mb-6 opacity-90">
            Explore my projects and get a glimpse of my expertise in web
            development, where I turn ideas into responsive, user-friendly, and
            visually engaging web experiences.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectTypeCard {...frontendProjects} isDarkMode={isDarkMode} />
            <ProjectTypeCard {...fullstackProjects} isDarkMode={isDarkMode} />
            <ProjectTypeCard {...backendProjects} isDarkMode={isDarkMode} />
            <ProjectTypeCard {...tools} isDarkMode={isDarkMode} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;