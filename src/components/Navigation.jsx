import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Initialize activeTab based on current location
  const getActiveTabFromPath = (path) => {
    if (path === '/about') return 'about';
    if (path === '/projects') return 'projects';
    if (path === '/contact') return 'contact';
    return 'about';
  };

  const [activeTab, setActiveTab] = useState(() => getActiveTabFromPath(location.pathname));

  // Update active tab based on current route
  useEffect(() => {
    setActiveTab(getActiveTabFromPath(location.pathname));
  }, [location.pathname]);

  const handleTabChange = (tab, path) => {
    // Update state immediately before navigation
    setActiveTab(tab);
    navigate(path);
  };

  // Calculate indicator position with transform
  const getIndicatorTransform = () => {
    if (activeTab === 'about') return 'translateX(0px)';
    if (activeTab === 'projects') return 'translateX(160px)';
    if (activeTab === 'contact') return 'translateX(320px)';
    return 'translateX(0px)';
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[1000]">
      <div 
        className={`relative flex flex-row items-start p-1 rounded-xl transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-[#2d3748]' 
            : 'bg-[#dadadb]'
        }`}
      >
        {/* Tab 1 - About */}
        <input 
          type="radio" 
          name="tab" 
          id="tab1" 
          className="w-40 h-12 absolute z-[99] outline-none opacity-0 cursor-pointer"
          checked={activeTab === 'about'}
          onChange={() => handleTabChange('about', '/about')}
        />
        <label 
          htmlFor="tab1"
          className={`w-40 h-12 relative z-[999] flex items-center justify-center text-base cursor-pointer transition-all duration-200 ${
            activeTab === 'about' ? 'opacity-100 font-semibold' : 'opacity-60'
          } ${isDarkMode ? 'text-[#e2e8f0]' : 'text-[#333333]'} hover:opacity-80`}
        >
          About
        </label>

        {/* Tab 2 - Projects */}
        <input 
          type="radio" 
          name="tab" 
          id="tab2" 
          className="w-40 h-12 absolute z-[99] outline-none opacity-0 cursor-pointer left-40"
          checked={activeTab === 'projects'}
          onChange={() => handleTabChange('projects', '/projects')}
        />
        <label 
          htmlFor="tab2"
          className={`w-40 h-12 relative z-[999] flex items-center justify-center text-base cursor-pointer transition-all duration-200 ${
            activeTab === 'projects' ? 'opacity-100 font-semibold' : 'opacity-60'
          } ${isDarkMode ? 'text-[#e2e8f0]' : 'text-[#333333]'} hover:opacity-80`}
        >
          Projects
        </label>

        {/* Tab 3 - Contact */}
        <input 
          type="radio" 
          name="tab" 
          id="tab3" 
          className="w-40 h-12 absolute z-[99] outline-none opacity-0 cursor-pointer left-80"
          checked={activeTab === 'contact'}
          onChange={() => handleTabChange('contact', '/contact')}
        />
        <label 
          htmlFor="tab3"
          className={`w-40 h-12 relative z-[999] flex items-center justify-center text-base cursor-pointer transition-all duration-200 ${
            activeTab === 'contact' ? 'opacity-100 font-semibold' : 'opacity-60'
          } ${isDarkMode ? 'text-[#e2e8f0]' : 'text-[#333333]'} hover:opacity-80`}
        >
          Contact
        </label>

        {/* Indicator - Fixed Animation */}
        <div 
          className={`absolute w-40 h-12 top-1 left-1 z-[9] rounded-lg transition-transform duration-300 ease-out ${
            isDarkMode 
              ? 'bg-[#1a202c] border border-white/10 shadow-[0px_3px_8px_rgba(0,0,0,0.5),0px_3px_1px_rgba(0,0,0,0.3)]' 
              : 'bg-white border border-black/[0.04] shadow-[0px_3px_8px_rgba(0,0,0,0.12),0px_3px_1px_rgba(0,0,0,0.04)]'
          }`}
          style={{ transform: getIndicatorTransform() }}
        />
      </div>
    </div>
  );
};

export default Navigation;