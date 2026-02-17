import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from "../components/Typewriter";

const Hero = ({ isDarkMode }) => {
    const navigate = useNavigate();
    
    const roles = [
        "Full-Stack Developer",
        "API Engineer",
        "Problem Solver",
        "Lifelong Learner"
    ];

    const goToAbout = () => {
        navigate('/about');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <motion.h1 
                className="text-5xl font-bold mb-4 text-center"
                layoutId="main-title"
            >
                Hi there!, I'm <span style={{ color: 'var(--name-color)' }}>Ezekiel</span>
            </motion.h1>
            <Typewriter 
                roles={roles} 
                className="text-xl h-8"
                typingSpeed={80}
                deletingSpeed={30}
                pauseTime={3000}
            />
            <motion.button 
                onClick={goToAbout} 
                className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                layoutId="about-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Get To Know Me
            </motion.button>
        </div>
    );
};

export default Hero;