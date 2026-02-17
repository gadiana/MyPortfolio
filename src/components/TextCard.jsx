const TextCard = ({ title, items, isDarkMode }) => {
  // Check if items are objects or strings
  const isObjectArray = items.length > 0 && typeof items[0] === 'object';

  return (
    <div 
      className="p-6 rounded-lg backdrop-blur-md border transition-all duration-300"
      style={{
        backgroundColor: isDarkMode 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(255, 255, 255, 0.7)',
        borderColor: isDarkMode 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(0, 0, 0, 0.1)',
        boxShadow: isDarkMode
          ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
          : '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
      }}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      {isObjectArray ? (
        // Render for object items (Work Experience)
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-l-2 border-current opacity-80 pl-4">
              <div className="font-semibold text-base">{item.company}</div>
              <div className="text-sm opacity-75 italic">{item.role}</div>
              <div className="text-xs opacity-60 mt-1">{item.duration}</div>
              
              {/* Handle both string and array descriptions */}
              {Array.isArray(item.description) ? (
                <ul className="text-sm mt-2 opacity-90 space-y-1 list-disc list-inside">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm mt-2 opacity-90">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Render for simple string items (Skills, Interests)
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextCard;