import { useState, useEffect } from "react";

const Typewriter = ({ roles, typingSpeed = 80, deletingSpeed = 30, pauseTime = 3000, className = "" }) => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const speed = isDeleting ? deletingSpeed : typingSpeed;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentRole.length) {
                    setIsPaused(false);
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                } else {
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsDeleting(true);
                        setIsPaused(false);
                    }, pauseTime);
                }
            } else {
                if (displayedText.length > 0) {
                    setIsPaused(false);
                    setDisplayedText(currentRole.slice(0, displayedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <div className={`flex items-center ${className}`}>
            {displayedText}
            <span className={`ml-1 ${isPaused ? 'cursor-blink' : 'opacity-100'}`}>|</span>
        </div>
    );
};

export default Typewriter;