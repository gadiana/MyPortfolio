import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectPageComponent/ProjectCard";
import { ProjectData } from "../data/ProjectData";

const ProjectDetails = ({ isDarkMode }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const title = location.state?.title || "Project Details";
    const category = location.state?.category || "front-end"; // Get category from navigation state

    // Get projects for the selected category
    const categoryProjects = ProjectData[category] || {
        personal: [],
        school: [],
        commission: [],
    };

    const personalProjects = categoryProjects.personal || [];
    const schoolProjects = categoryProjects.school || [];
    const commissionProjects = categoryProjects.commission || [];

    const ProjectSection = ({ sectionTitle, projects }) => {
        // Don't render anything if there are no projects
        if (!projects || projects.length === 0) {
            return null;
        }
        
        return (
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 opacity-90">{sectionTitle}</h2>
                <div className="flex flex-wrap gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                        >
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                techStack={project.techStack}
                                githubLink={project.githubLink}
                                liveLink={project.liveLink}
                                isDarkMode={isDarkMode}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="flex flex-col min-h-screen p-8">
                {/* Title */}
                <motion.h1
                    className="text-4xl font-bold mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    {title}
                </motion.h1>

                {/* Content */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
                >
                    <ProjectSection sectionTitle="Personal Projects" projects={personalProjects} />
                    <ProjectSection sectionTitle="School Projects" projects={schoolProjects} />
                    <ProjectSection sectionTitle="Commission Projects" projects={commissionProjects} />
                </motion.div>

                {/* Back Button */}
                <motion.button
                    onClick={() => navigate("/projects")}
                    className="mt-8 px-6 py-3 rounded-lg transition-all duration-50 self-start"
                    style={{
                        backgroundColor: isDarkMode
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.1)",
                        border: isDarkMode
                            ? "1px solid rgba(255, 255, 255, 0.2)"
                            : "1px solid rgba(0, 0, 0, 0.2)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
                >
                    ← Back to Projects
                </motion.button>
            </div>
        </>
    );
};

export default ProjectDetails;