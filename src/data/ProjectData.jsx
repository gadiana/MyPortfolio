import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

export const ProjectData = {
  "front-end": {
    personal: [
      {
        image: "/images/checklist.png",
        title: "Portfolio Website",
        description: "Personal checklist app with archieving",
        techStack: [
          { name: "React", icon: FaIcons.FaReact },
          { name: "Tailwind CSS", icon: SiIcons.SiTailwindcss },
        ],
        githubLink: "https://github.com/gadiana/ChecklistApp",
        liveLink: "https://mylistings.netlify.app/",
      },
      {
        image: "/images/weather.png",
        title: "Weather App",
        description: "Real-time weather application",
        techStack: [
          { name: "React", icon: FaIcons.FaReact },
          { name: "Tailwind CSS", icon: SiIcons.SiTailwindcss },
          { name: "Framer Motion", icon: SiIcons.SiFramer },
          { name: "API", icon: FaIcons.FaCloud },
        ],
        githubLink: "https://github.com/gadiana/Myweather",
        liveLink: "https://simlpyweather.netlify.app/",
      },
    ],
    school: [
      {
        image: "/images/portfolio.png",
        title: "Porfolio",
        description: "Personal portfolio",
        techStack: [
          { name: "React", icon: FaIcons.FaReact },
          { name: "Tailwind CSS", icon: SiIcons.SiTailwindcss },
          { name: "Framer Motion", icon: SiIcons.SiFramer },
        ],
        githubLink: "https://github.com/gadiana/MyPortfolio",
        liveLink: "https://ezekielgadiana.netlify.app/",
      },
      {
        image: "/images/pokemon.png",
        title: "Battle Simulator",
        description: "A pokemon battle simulator",
        techStack: [
          { name: "React", icon: FaIcons.FaReact },
          { name: "Tailwind CSS", icon: SiIcons.SiTailwindcss },
          { name: "Framer Motion", icon: SiIcons.SiFramer },
        ],
        githubLink: "https://github.com/gadiana/MyPortfolio",
        liveLink: "https://ezekielgadiana.netlify.app/",
      },
    ],
    commission: [],
  },
  "full-stack": {
    personal: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "Task Manager App",
        description:
          "A simple task management application with CRUD operations",
        techStack: [
          { name: "React", icon: FaIcons.FaReact },
          { name: "Node.js", icon: FaIcons.FaNodeJs },
          { name: "MongoDB", icon: SiIcons.SiMongodb },
        ],
        githubLink: "https://github.com/yourusername/task-manager",
        liveLink: "https://taskmanager.com",
      },
      {
        image: "https://via.placeholder.com/400x300",
        title: "Blog Platform",
        description: "Full-featured blogging platform with authentication",
        techStack: [
          { name: "React", icon: FaIcons.FaReact },
          { name: "Node.js", icon: FaIcons.FaNodeJs },
          { name: "PostgreSQL", icon: SiIcons.SiPostgresql },
        ],
        githubLink: "https://github.com/yourusername/blog-platform",
        liveLink: "https://myblog.com",
      },
    ],
    school: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "Student Portal",
        description: "Web-based student information system for university",
        techStack: [
          { name: "PHP", icon: FaIcons.FaPhp },
          { name: "MySQL", icon: SiIcons.SiMysql },
          { name: "JavaScript", icon: SiIcons.SiJavascript },
        ],
        githubLink: "https://github.com/yourusername/student-portal",
        liveLink: null,
      },
    ],
    commission: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "E-commerce Site",
        description: "Online store for local business with payment integration",
        techStack: [
          { name: "React", icon: FaIcons.FaReact },
          { name: "Node.js", icon: FaIcons.FaNodeJs },
          { name: "Express", icon: SiIcons.SiExpress },
        ],
        githubLink: null,
        liveLink: "https://clientstore.com",
      },
    ],
  },
  "back-end": {
    personal: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "REST API",
        description: "RESTful API for data management with authentication",
        techStack: [
          { name: "Node.js", icon: FaIcons.FaNodeJs },
          { name: "Express", icon: SiIcons.SiExpress },
          { name: "MongoDB", icon: SiIcons.SiMongodb },
        ],
        githubLink: "https://github.com/yourusername/rest-api",
        liveLink: null,
      },
      {
        image: "https://via.placeholder.com/400x300",
        title: "Chrome Extension API",
        description: "Backend API for Chrome extension with data sync",
        techStack: [
          { name: "C#", icon: null },
          { name: "ASP.NET", icon: SiIcons.SiDotnet },
          { name: "MySQL", icon: SiIcons.SiMysql },
        ],
        githubLink: "https://github.com/yourusername/chrome-extension-api",
        liveLink: null,
      },
    ],
    school: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "Library System API",
        description: "Backend system for library management",
        techStack: [
          { name: "C#", icon: null },
          { name: "ASP.NET", icon: SiIcons.SiDotnet },
          { name: "MySQL", icon: SiIcons.SiMysql },
        ],
        githubLink: "https://github.com/yourusername/library-api",
        liveLink: null,
      },
    ],
    commission: [],
  },
  tools: {
    personal: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "GitHub Projects",
        description: "Collection of open source projects and contributions",
        techStack: [
          { name: "GitHub", icon: FaIcons.FaGithub },
          { name: "Git", icon: FaIcons.FaGitAlt },
        ],
        githubLink: "https://github.com/yourusername",
        liveLink: null,
      },
      {
        image: "https://via.placeholder.com/400x300",
        title: "Bitbucket Repositories",
        description: "Private repositories and team collaboration projects",
        techStack: [
          { name: "Bitbucket", icon: FaIcons.FaBitbucket },
          { name: "Git", icon: FaIcons.FaGitAlt },
        ],
        githubLink: null,
        liveLink: "https://bitbucket.org/yourusername",
      },
    ],
    school: [],
    commission: [],
  },
  mobile: {
    personal: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "Fitness Tracker",
        description: "Mobile app for tracking workouts and calories",
        techStack: [
          { name: "React Native", icon: FaIcons.FaReact },
          { name: "Firebase", icon: SiIcons.SiFirebase },
        ],
        githubLink: "https://github.com/yourusername/fitness-tracker",
        liveLink: null,
      },
    ],
    school: [],
    commission: [],
  },
  "ai-ml": {
    personal: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "Sentiment Analysis",
        description: "ML model for analyzing sentiment in text",
        techStack: [
          { name: "Python", icon: FaIcons.FaPython },
          { name: "TensorFlow", icon: SiIcons.SiTensorflow },
        ],
        githubLink: "https://github.com/yourusername/sentiment-analysis",
        liveLink: null,
      },
    ],
    school: [],
    commission: [],
  },
  "game-dev": {
    personal: [
      {
        image: "https://via.placeholder.com/400x300",
        title: "2D Platformer",
        description: "Simple 2D platformer game built with Unity",
        techStack: [
          { name: "Unity", icon: SiIcons.SiUnity },
          { name: "C#", icon: null },
        ],
        githubLink: "https://github.com/yourusername/platformer",
        liveLink: null,
      },
    ],
    school: [],
    commission: [],
  },
};
