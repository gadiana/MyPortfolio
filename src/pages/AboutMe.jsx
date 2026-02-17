import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TextCard from '../components/TextCard';
import Navigation from '../components/Navigation';

const AboutMe = ({ isDarkMode }) => {
    const navigate = useNavigate();
    const [hasAnimated, setHasAnimated] = useState(() => {
        // Check if animation has played in this session
        return sessionStorage.getItem('aboutAnimated') === 'true';
    });

    useEffect(() => {
        // Mark as animated in session storage
        if (!hasAnimated) {
            sessionStorage.setItem('aboutAnimated', 'true');
            setHasAnimated(true);
        }
    }, [hasAnimated]);

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const skillsData = [
        "React, Tailwind CSS & Framer Motion",
        "C# & ASP.NET",
        "PHP & MySQL",
        "REST APIs"
    ];

    const interestsData = [
        "Open Source",
        "System Design",
        "Tech Communities"
    ];

    const workExperienceData = [
        {
            company: "AKA Software Inc.",
            role: "Junior Backend Developer",
            duration: "November 2025 - Present",
            description: [
                "Contributed to backend development using C# and collaborated on API design with ASP.NET.",
                "Collaborated with clients to understand requirements and deliver custom solutions.",
                "Worked closely with the frontend team to integrate APIs and ensure seamless user experiences.",
                "Completed the company's automation of importing orders from emails to database using Chrome extension and C# application, improving efficiency and reducing manual work."
            ]
        },
        {
            company: "Freelance Projects",
            role: "Full-Stack Developer",
            duration: "2025",
            description: [
                "Designed and developed several simple websites using HTML, CSS, JavaScript, and PHP.",
                "Collaborated with clients to understand requirements and deliver custom solutions.",
                "Implemented responsive designs and ensured cross-browser compatibility."
            ]
        }
    ];

    return (
        <>
            <Navigation isDarkMode={isDarkMode} />
            <div className="flex flex-col items-center justify-center min-h-screen p-8 pt-40">
                {/* This morphs from the button - animate only once */}
                <motion.h1
                    className="text-5xl font-bold mb-8 text-center"
                    layoutId="about-button"
                    style={{
                        background: 'none',
                        color: 'var(--text-color)',
                        padding: 0
                    }}
                >
                    About Me
                </motion.h1>

                {/* Content - animate only on first mount */}
                <motion.div
                    variants={contentVariants}
                    initial={!hasAnimated ? "hidden" : "visible"}
                    animate="visible"
                    className="max-w-3xl"
                >
                    <motion.p className="text-xl text-center mb-6">
                        Hi, I'm <span style={{ color: 'var(--name-color)' }}>Ezekiel</span>, a passionate Full-Stack Developer.
                    </motion.p>

                    <motion.p className="text-lg text-center mb-6 opacity-90">
                        An aspiring web developer with hands-on experience in designing and developing several simple websites.
                        Has knowledge and experience in HTML, CSS, JavaScript, and PHP with a strong passion for creating user-friendly and visually appealing web solutions.
                        Eager to apply my skills and expand my expertise in a dynamic and challenging environment.
                    </motion.p>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <TextCard title="Skills" items={skillsData} isDarkMode={isDarkMode} />
                        <TextCard title="Interests" items={interestsData} isDarkMode={isDarkMode} />

                        {/* This spans both columns on desktop */}
                        <div className="md:col-span-2">
                            <TextCard title="Work Experience" items={workExperienceData} isDarkMode={isDarkMode} />
                        </div>
                    </motion.div>

                    <motion.button
                        onClick={() => navigate('/')}
                        className="mt-8 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors mx-auto block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Back to Home
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
};

export default AboutMe;