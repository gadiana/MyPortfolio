import React, { useState, useEffect, useRef } from "react";

const LightBackground = () => {
  const SCROLL_THRESHOLD = 10; // your existing trigger
  const SAFE_PADDING = SCROLL_THRESHOLD + 5; // buffer zone (15%)
  // Position of the movable object (in percentages for responsiveness)
  const [objectPosition, setObjectPosition] = useState({ x: 50, y: 50 });

  // Track last direction for fireball
  const [lastDirection, setLastDirection] = useState("right"); // default direction

  // Track fireballs
  const [fireballs, setFireballs] = useState([]);
  const [autoPilot, setAutoPilot] = useState(false);

  // Track which keys are currently pressed
  const keysPressed = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  // Movement interval
  const moveIntervalRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const fireballIdCounter = useRef(0);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      // WASD movement
      if (["w", "a", "s", "d"].includes(key)) {
        e.preventDefault();
        keysPressed.current[key] = true;

        // Update last direction based on key pressed
        if (key === "w") setLastDirection("up");
        if (key === "s") setLastDirection("down");
        if (key === "a") setLastDirection("left");
        if (key === "d") setLastDirection("right");
      }

      // R key to reset position
      if (key === "r") {
        e.preventDefault();
        setObjectPosition({ x: 50, y: 50 });
      }

      // F key to fire fireball
      if (key === "f") {
        e.preventDefault();
        fireFireball();
      }

      // Q key to toggle auto-pilot
      if (key === "q") {
        e.preventDefault();
        setAutoPilot((prev) => !prev);
      }

      // Spacebar to click element at object position
      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        clickElementAtPosition();
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (["w", "a", "s", "d"].includes(key)) {
        keysPressed.current[key] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [objectPosition, lastDirection]);

  // Auto-pilot mode
  // Auto-pilot mode
  useEffect(() => {
    if (!autoPilot) return;

    let fireCounter = 0;
    let currentDirection = "right";
    let directionChangeCounter = 0;

    const autoPilotInterval = setInterval(() => {
      directionChangeCounter++;

      // Change direction every 60 frames (about 1 second at 60fps)
      if (directionChangeCounter >= 60) {
        const directions = ["w", "a", "s", "d"];
        const randomDir =
          directions[Math.floor(Math.random() * directions.length)];
        currentDirection = randomDir;
        directionChangeCounter = 0;

        // Update last direction
        if (randomDir === "w") setLastDirection("up");
        if (randomDir === "s") setLastDirection("down");
        if (randomDir === "a") setLastDirection("left");
        if (randomDir === "d") setLastDirection("right");
      }

      // Smooth continuous movement
      setObjectPosition((prev) => {
        const speed = 0.8;
        let deltaX = 0;
        let deltaY = 0;

        if (currentDirection === "w") deltaY -= speed;
        if (currentDirection === "s") deltaY += speed;
        if (currentDirection === "a") deltaX -= speed;
        if (currentDirection === "d") deltaX += speed;

        let newX = prev.x + deltaX;
        let newY = prev.y + deltaY;

        newX = Math.max(5, Math.min(95, newX));
        newY = Math.max(5, Math.min(95, newY));

        const nextPosition = { x: newX, y: newY };

        // 🔥 FIRE HERE using updated position
        fireCounter++;
        if (fireCounter >= 180) {
          fireFireball(nextPosition, lastDirection);
          fireCounter = 0;
        }

        return nextPosition;
      });
    }, 16); // 60fps for smooth movement

    return () => clearInterval(autoPilotInterval);
  }, [autoPilot, lastDirection]);

  // Fire a fireball in the last direction
  const fireFireball = (
    position = objectPosition,
    direction = lastDirection,
  ) => {
    const fireballId = fireballIdCounter.current++;

    const newFireball = {
      id: fireballId,
      x: position.x,
      y: position.y,
      direction: direction,
      createdAt: Date.now(),
    };

    setFireballs((prev) => [...prev, newFireball]);

    showMuzzleFlash(position);

    setTimeout(() => {
      setFireballs((prev) => prev.filter((fb) => fb.id !== fireballId));
    }, 3000);
  };

  // Show muzzle flash effect when firing
  const showMuzzleFlash = (position) => {
    const x = (position.x / 100) * window.innerWidth;
    const y = (position.y / 100) * window.innerHeight;

    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.left = `${x}px`;
    flash.style.top = `${y}px`;
    flash.style.width = "40px";
    flash.style.height = "40px";
    flash.style.background =
      "radial-gradient(circle, rgba(255, 165, 0, 0.8), rgba(255, 69, 0, 0.4))";
    flash.style.borderRadius = "50%";
    flash.style.transform = "translate(-50%, -50%)";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = "9999";
    flash.style.animation = "muzzleFlash 0.2s ease-out";

    document.body.appendChild(flash);

    setTimeout(() => {
      document.body.removeChild(flash);
    }, 200);
  };

  // Function to click element at current object position
  const clickElementAtPosition = () => {
    // Convert percentage to actual pixel coordinates
    const x = (objectPosition.x / 100) * window.innerWidth;
    const y = (objectPosition.y / 100) * window.innerHeight;

    // Get element at that position
    const element = document.elementFromPoint(x, y);

    if (element) {
      // Check if it's a clickable element
      const isClickable =
        element.tagName === "BUTTON" ||
        element.tagName === "A" ||
        element.onclick ||
        element.getAttribute("role") === "button" ||
        element.classList.contains("cursor-pointer") ||
        window.getComputedStyle(element).cursor === "pointer";

      if (isClickable) {
        // Visual feedback
        element.style.transform = "scale(0.95)";
        setTimeout(() => {
          element.style.transform = "";
        }, 100);

        // Trigger click
        element.click();

        // Show feedback
        showClickFeedback(x, y);
      } else {
        // Show "not clickable" feedback
        showNoClickFeedback(x, y);
      }
    }
  };

  // Show visual feedback when clicking
  const showClickFeedback = (x, y) => {
    const feedback = document.createElement("div");
    feedback.style.position = "fixed";
    feedback.style.left = `${x}px`;
    feedback.style.top = `${y}px`;
    feedback.style.width = "30px";
    feedback.style.height = "30px";
    feedback.style.border = "3px solid #10b981";
    feedback.style.borderRadius = "50%";
    feedback.style.transform = "translate(-50%, -50%)";
    feedback.style.pointerEvents = "none";
    feedback.style.zIndex = "9999";
    feedback.style.animation = "clickPulse 0.4s ease-out";

    document.body.appendChild(feedback);

    setTimeout(() => {
      document.body.removeChild(feedback);
    }, 400);
  };

  // Show feedback when trying to click non-clickable
  const showNoClickFeedback = (x, y) => {
    const feedback = document.createElement("div");
    feedback.style.position = "fixed";
    feedback.style.left = `${x}px`;
    feedback.style.top = `${y}px`;
    feedback.style.width = "30px";
    feedback.style.height = "30px";
    feedback.style.border = "3px solid #ef4444";
    feedback.style.borderRadius = "50%";
    feedback.style.transform = "translate(-50%, -50%)";
    feedback.style.pointerEvents = "none";
    feedback.style.zIndex = "9999";
    feedback.style.animation = "clickPulse 0.4s ease-out";

    document.body.appendChild(feedback);

    setTimeout(() => {
      document.body.removeChild(feedback);
    }, 400);
  };

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes clickPulse {
        0% {
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(2);
          opacity: 0;
        }
      }
      
      @keyframes muzzleFlash {
        0% {
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(2);
          opacity: 0;
        }
      }
      
      @keyframes fireballTravel {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        100% {
          opacity: 0.3;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle scrolling when cursor reaches edges
  useEffect(() => {
    scrollIntervalRef.current = setInterval(() => {
      if (autoPilot) return;
      const scrollThreshold = 10;
      const scrollSpeed = 10;

      if (objectPosition.y <= scrollThreshold) {
        if (window.scrollY > 0) {
          window.scrollBy(0, -scrollSpeed);
        }
      } else if (objectPosition.y >= 100 - scrollThreshold) {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY < maxScroll) {
          window.scrollBy(0, scrollSpeed);
        }
      }

      if (objectPosition.x <= scrollThreshold) {
        if (window.scrollX > 0) {
          window.scrollBy(-scrollSpeed, 0);
        }
      } else if (objectPosition.x >= 100 - scrollThreshold) {
        const maxScrollX =
          document.documentElement.scrollWidth - window.innerWidth;
        if (window.scrollX < maxScrollX) {
          window.scrollBy(scrollSpeed, 0);
        }
      }
    }, 16);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [objectPosition, autoPilot]);

  // Move the object based on pressed keys
  useEffect(() => {
    moveIntervalRef.current = setInterval(() => {
      const anyKeyPressed = Object.values(keysPressed.current).some(
        (key) => key,
      );

      if (anyKeyPressed) {
        setObjectPosition((prev) => {
          const speed = 1;

          let deltaX = 0;
          let deltaY = 0;

          if (keysPressed.current.w) deltaY -= speed;
          if (keysPressed.current.s) deltaY += speed;
          if (keysPressed.current.a) deltaX -= speed;
          if (keysPressed.current.d) deltaX += speed;

          let newX = prev.x + deltaX;
          let newY = prev.y + deltaY;

          newX = Math.max(0, Math.min(100, newX));
          newY = Math.max(0, Math.min(100, newY));

          return { x: newX, y: newY };
        });
      }
    }, 16);

    return () => {
      if (moveIntervalRef.current) {
        clearInterval(moveIntervalRef.current);
      }
    };
  }, []);

  // Animate fireballs
  useEffect(() => {
    const fireballInterval = setInterval(() => {
      setFireballs((prev) =>
        prev.map((fb) => {
          const speed = 2; // Fireball speed
          let newX = fb.x;
          let newY = fb.y;

          switch (fb.direction) {
            case "up":
              newY -= speed;
              break;
            case "down":
              newY += speed;
              break;
            case "left":
              newX -= speed;
              break;
            case "right":
              newX += speed;
              break;
          }

          return { ...fb, x: newX, y: newY };
        }),
      );
    }, 16);

    return () => clearInterval(fireballInterval);
  }, []);

  return (
    <div className="simple-gradient relative w-full h-full overflow-hidden">
      {/* Movable Object (Cursor) */}
      <div
        className="fixed w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl transition-transform duration-75 flex items-center justify-center pointer-events-none"
        style={{
          left: `${objectPosition.x}%`,
          top: `${objectPosition.y}%`,
          transform: "translate(-50%, -50%)",
          boxShadow:
            "0 8px 32px rgba(59, 130, 246, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.3)",
          zIndex: 9998,
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full shadow-inner"></div>

        {/* Direction indicator */}
        <div
          className="absolute w-0 h-0 transition-all duration-200"
          style={{
            ...(lastDirection === "up" && {
              top: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              borderBottom: "6px solid rgba(255, 165, 0, 0.8)",
            }),
            ...(lastDirection === "down" && {
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              borderTop: "6px solid rgba(255, 165, 0, 0.8)",
            }),
            ...(lastDirection === "left" && {
              left: "-8px",
              top: "50%",
              transform: "translateY(-50%)",
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderRight: "6px solid rgba(255, 165, 0, 0.8)",
            }),
            ...(lastDirection === "right" && {
              right: "-8px",
              top: "50%",
              transform: "translateY(-50%)",
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderLeft: "6px solid rgba(255, 165, 0, 0.8)",
            }),
          }}
        />
      </div>

      {/* Fireballs */}
      {fireballs.map((fb) => (
        <div
          key={fb.id}
          className="fixed pointer-events-none"
          style={{
            left: `${fb.x}%`,
            top: `${fb.y}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 9997,
            animation: "fireballTravel 3s linear",
          }}
        >
          <div className="relative w-8 h-8">
            {/* Fireball core */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 rounded-full"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-md opacity-70"></div>
            {/* Trailing effect */}
            <div
              className="absolute w-12 h-2 bg-gradient-to-r from-orange-500 to-transparent rounded-full blur-sm opacity-60"
              style={{
                ...(fb.direction === "right" && {
                  right: "100%",
                  top: "50%",
                  transform: "translateY(-50%)",
                }),
                ...(fb.direction === "left" && {
                  left: "100%",
                  top: "50%",
                  transform: "translateY(-50%) rotate(180deg)",
                }),
                ...(fb.direction === "up" && {
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%) rotate(90deg)",
                }),
                ...(fb.direction === "down" && {
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%) rotate(-90deg)",
                }),
              }}
            />
          </div>
        </div>
      ))}

      {/* Scroll Indicators */}
      {objectPosition.y <= 10 && window.scrollY > 0 && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg pointer-events-none z-[9997] flex items-center gap-2">
          <span className="animate-bounce">↑</span>
          <span>Scrolling Up</span>
        </div>
      )}
      {objectPosition.y >= 90 &&
        window.scrollY <
          document.documentElement.scrollHeight - window.innerHeight && (
          <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg pointer-events-none z-[9997] flex items-center gap-2">
            <span>Scrolling Down</span>
            <span className="animate-bounce">↓</span>
          </div>
        )}

      {/* Compact Controls Panel - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-[9997]">
        <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-2xl shadow-2xl border border-gray-200/50 w-48">
          {/* Title */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <h3 className="text-xs font-bold text-gray-700">Game Mode</h3>
          </div>

          {/* WASD Keys - Compact */}
          <div className="grid grid-cols-3 gap-1 mb-2">
            <div></div>
            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all shadow-sm ${
                keysPressed.current.w
                  ? "bg-gradient-to-br from-green-400 to-green-500 text-white scale-95"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              W
            </div>
            <div></div>

            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all shadow-sm ${
                keysPressed.current.a
                  ? "bg-gradient-to-br from-green-400 to-green-500 text-white scale-95"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              A
            </div>
            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all shadow-sm ${
                keysPressed.current.s
                  ? "bg-gradient-to-br from-green-400 to-green-500 text-white scale-95"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              S
            </div>
            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all shadow-sm ${
                keysPressed.current.d
                  ? "bg-gradient-to-br from-green-400 to-green-500 text-white scale-95"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              D
            </div>
          </div>

          {/* Quick Keys */}
          <div className="flex flex-col gap-1 mb-2">
            <div className="h-7 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md flex items-center justify-center text-[10px] font-semibold text-blue-700 border border-blue-200">
              SPACE
            </div>
            <div className="flex gap-1">
              <div className="flex-1 h-7 bg-gradient-to-br from-purple-50 to-purple-100 rounded-md flex items-center justify-center text-xs font-bold text-purple-700 border border-purple-200">
                R
              </div>
              <div className="flex-1 h-7 bg-gradient-to-br from-orange-50 to-orange-100 rounded-md flex items-center justify-center text-xs font-bold text-orange-700 border border-orange-200">
                F🔥
              </div>
              <div
                className={`flex-1 h-7 rounded-md flex items-center justify-center text-xs font-bold border transition-all ${
                  autoPilot
                    ? "bg-gradient-to-br from-green-400 to-green-500 text-white animate-pulse"
                    : "bg-gradient-to-br from-green-50 to-green-100 text-green-700 border-green-200"
                }`}
              >
                Q🤖
              </div>
            </div>
          </div>

          {/* Mini Instructions */}
          <p className="text-[10px] text-gray-500 leading-relaxed">
            <span className="text-blue-600 font-semibold">WASD</span> Move •
            <span className="text-blue-600 font-semibold"> SPACE</span> Click •
            <span className="text-purple-600 font-semibold"> R</span> Reset •
            <span className="text-orange-600 font-semibold"> F</span> Fire •
            <span className="text-green-600 font-semibold"> Q</span> Auto
          </p>
        </div>
      </div>
    </div>
  );
};

export default LightBackground;
