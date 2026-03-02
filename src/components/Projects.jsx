import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'JobFlow – AI Recruitment App',
    shortDesc: 'AI-powered recruitment platform built with Flutter + Firebase + AI',
    fullDesc: `JobFlow is an intelligent recruitment platform that uses AI to streamline the job application process.
    Built with Flutter for cross-platform support and Firebase for real-time data management, it features AI-powered
    job matching, resume parsing, interview scheduling, and applicant tracking. The app uses ML models to score
    candidates and match them with the most suitable job postings, significantly reducing hiring time.`,
    tech: ['Flutter', 'Firebase', 'Dart', 'AI/ML', 'REST API'],
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['AI Job Matching', 'Resume Parser', 'Real-time Chat', 'Smart Notifications', 'Analytics Dashboard'],
  },
  {
    id: 2,
    title: 'CodeQuest – Coding Platform',
    shortDesc: 'Interactive coding platform with challenges and real-time code execution',
    fullDesc: `CodeQuest is a competitive programming platform designed to help developers improve their coding skills.
    Features include real-time code execution in multiple languages, a curated collection of algorithmic challenges,
    leaderboards, user progress tracking, and an AI hint system. Built with a modern tech stack to provide a
    seamless coding experience.`,
    tech: ['React', 'Node.js', 'Python', 'WebSocket', 'MongoDB'],
    color: 'from-purple-500 to-pink-500',
    icon: '💻',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['Code Execution Engine', '500+ Problems', 'Real-time Leaderboard', 'AI Hints', 'Multi-language Support'],
  },
  {
    id: 3,
    title: 'AI Assistant App',
    shortDesc: 'Flutter-based AI assistant with chatbot, image generation, and translation',
    fullDesc: `A comprehensive AI assistant application built with Flutter, combining multiple AI capabilities
    in one elegant interface. Features include an intelligent chatbot powered by large language models,
    AI image generation, real-time language translation for 50+ languages, and voice commands.
    Eliminates the need to switch between multiple apps for different AI tasks.`,
    tech: ['Flutter', 'Dart', 'OpenAI API', 'Firebase', 'REST API'],
    color: 'from-green-500 to-emerald-500',
    icon: '🤖',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['AI Chatbot', 'Image Generation', 'Language Translation', 'Voice Commands', 'History Sync'],
  },
  {
    id: 4,
    title: 'Sentiment Analysis ML',
    shortDesc: 'NLP-based sentiment analysis system with real-time text classification',
    fullDesc: `A machine learning system for analyzing sentiment in text using Natural Language Processing.
    Built with Python and scikit-learn, it classifies text as positive, negative, or neutral with high accuracy.
    Includes data preprocessing pipelines, model training with multiple algorithms, a visualization dashboard,
    and a REST API for integration. Applied to social media analysis and product review classification.`,
    tech: ['Python', 'scikit-learn', 'NLTK', 'Flask', 'Pandas'],
    color: 'from-orange-500 to-red-500',
    icon: '🧠',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['NLP Pipeline', 'Multi-class Classification', 'Visualization Dashboard', 'REST API', 'Real-time Analysis'],
  },
];

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FiX size={24} />
        </button>

        <div className="text-5xl mb-4">{project.icon}</div>
        <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
          {project.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6">{project.fullDesc}</p>

        <h4 className="text-white font-semibold mb-3">Key Features</h4>
        <ul className="space-y-2 mb-6">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <FiGithub /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.color} text-white rounded-lg transition-opacity hover:opacity-90 text-sm font-medium`}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, isInView }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="glass border border-gray-700/50 hover:border-blue-500/30 rounded-2xl p-6 cursor-pointer group transition-all"
        onClick={() => setModalOpen(true)}
      >
        <div className="text-4xl mb-4">{project.icon}</div>
        <div className={`text-xs font-semibold uppercase tracking-widest bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
          Project {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.shortDesc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-400 border border-gray-700">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-400 border border-gray-700">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
            className={`flex-1 py-2 text-sm font-medium rounded-lg bg-gradient-to-r ${project.color} text-white opacity-90 hover:opacity-100 transition-opacity`}
          >
            View Details
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <FiGithub size={18} />
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Click on any project card to see detailed information
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
