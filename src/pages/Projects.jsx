import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Projects = ({ isDarkMode }) => {
  return (
    <>
      <Navigation isDarkMode={isDarkMode} />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pt-24">
        <motion.h1 
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>
        <p className="text-xl text-center max-w-2xl">
          Coming soon...
        </p>
      </div>
    </>
  );
};

export default Projects;