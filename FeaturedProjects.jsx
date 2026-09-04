import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Alarm Clock System",
    image: "/images/alarm.jpg",
    link: "/projects/alarm"
  },
  {
    id: 2,
    title: "Calamity Shield",
    image: "/images/calamity.jpg",
    link: "/projects/calamity"
  },
  {
    id: 3,
    title: "Obstacle Avoidance Car",
    image: "/images/car.jpg",
    link: "/projects/car"
  },
  {
    id: 4,
    title: "AI Chat App",
    image: "/images/chat.jpg",
    link: "/projects/chat"
  }
];

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const rotateLeft = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const rotateRight = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="wheel-container">
      <button onClick={rotateLeft} className="nav-btn left">‹</button>

      <div className="wheel">
        {projects.map((project, i) => {
          const position =
            (i - index + projects.length) % projects.length;

          const isCenter = position === 0;

          return (
            <motion.div
              key={project.id}
              className="project-card"
              animate={{
                scale: isCenter ? 1 : 0.8,
                x: position * 260 - 260,
                rotateY: isCenter ? 0 : position > 0 ? -30 : 30,
                opacity: isCenter ? 1 : 0.6,
                zIndex: isCenter ? 10 : 1
              }}
              transition={{ duration: 0.5 }}
              onClick={() => isCenter && navigate(project.link)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </motion.div>
          );
        })}
      </div>

      <button onClick={rotateRight} className="nav-btn right">›</button>
    </div>
  );
}
