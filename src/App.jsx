import "./App.css";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

import ThemeButton from "./components/ThemeButton";
import Particles from "./components/Particles";
import LightBackground from "./components/LightBackground";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  return (
    <div className="static min-h-screen">
      {/* Backgrounds */}
      {isDarkMode ? <Particles /> : <LightBackground />}

      {/* Theme Button - Shows on all pages */}
      <ThemeButton onThemeChange={setIsDarkMode} />

      {/* Animated Routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<AboutMe isDarkMode={isDarkMode} />} />
          <Route  path="/projects" element={<Projects isDarkMode={isDarkMode} />}/>
          <Route path="/projects/:projectType" element={<ProjectDetails isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
