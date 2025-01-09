import { useState } from "react";
import Cloud from "./components/Cloud";
import Star from "./components/Star";

const MovingScreen = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <div
      className="relative w-screen h-[800px] bg-gray-900 overflow-hidden flex justify-center items-center text-white"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute top-8 left-6"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      >
        <Cloud type="big" />
      </div>
      <div
        className="absolute text-4xl font-semibold text-blue-400"
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${
            mousePosition.y * -0.03
          }px)`,
        }}
      >
        <Cloud type="small" />
      </div>
      <div
        className="absolute top-20 left-20"
        style={{
          transform: `translate(${mousePosition.x * 0.05}px, ${
            mousePosition.y * 0.05
          }px)`,
        }}
      >
        <Cloud type="small" />
      </div>
      <Star />
    </div>
  );
};

export default MovingScreen;
