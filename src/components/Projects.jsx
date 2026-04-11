import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiFilter } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    id: 1,
    title: 'JobFlow – Flutter Job Portal',
    shortDesc: 'Flutter + Firebase job portal for seamless job discovery and tracking',
    fullDesc: `JobFlow is a Flutter & Firebase-based job portal that simplifies job discovery and application tracking.
    It supports candidate profiles, recruiter postings, and real-time updates, helping connect applicants with
    the right opportunities. The app focuses on a smooth experience for both candidates and recruiters.`,
    tech: ['Flutter', 'Firebase', 'Dart'],
    category: 'mobile',
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀',
    github: 'https://github.com/diya2405/JobFlow',
    demo: null,
    features: ['Job Discovery', 'Application Tracking', 'Recruiter Dashboard', 'Real-time Updates', 'Profile Management'],
  },
  {
    id: 2,
    title: 'AI Assistant (Flutter)',
    shortDesc: 'Conversational AI assistant with NLP-driven user interaction',
    fullDesc: `A conversational AI assistant app built with Flutter that integrates natural language processing
    for real-time user interaction. Features include AI chatbot, image generation from text prompts,
    and language translation in a clean, responsive mobile UI.`,
    tech: ['Flutter', 'Dart', 'AI/ML APIs', 'Firebase'],
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    icon: '🤖',
    github: 'https://github.com/diya2405/Ai_Assistant',
    demo: null,
    features: ['AI Chatbot', 'Image Generation', 'Language Translation', 'Mobile-first Design', 'Fast Interaction'],
  },
  {
    id: 3,
    title: 'CodeQuest – Coding Platform',
    shortDesc: 'React-based interactive coding platform with gamified learning',
    fullDesc: `CodeQuest is a React-based coding platform designed to make programming learning interactive
    and engaging. It features competitive coding challenges, gamified learning experiences,
    skill-based progress tracking, and interactive coding competitions.`,
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    category: 'web',
    color: 'from-indigo-500 to-blue-500',
    icon: '💻',
    github: 'https://github.com/diya2405/CodeQuest',
    demo: null,
    features: ['Coding Challenges', 'Gamified Learning', 'Progress Tracking', 'Competitions', 'Interactive UI'],
  },
  {
    id: 4,
    title: 'VedaVerses',
    shortDesc: 'A JavaScript-based web application for exploring sacred texts',
    fullDesc: `VedaVerses is a web application built with JavaScript that provides an interactive way
    to explore and read verses from sacred texts. It features a clean, accessible interface
    with search and navigation capabilities.`,
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'web',
    color: 'from-amber-500 to-orange-500',
    icon: '📜',
    github: 'https://github.com/diya2405/VedaVerses',
    demo: null,
    features: ['Verse Exploration', 'Search Functionality', 'Responsive Design', 'Clean UI', 'Navigation'],
  },
  {
    id: 5,
    title: 'Sentiment Analysis',
    shortDesc: 'NLP project classifying text into positive, negative, or neutral sentiments',
    fullDesc: `A Python-based sentiment analysis project that classifies user reviews and social media text
    into positive, negative, or neutral sentiments using NLP techniques and ML models.`,
    tech: ['Python', 'NLP', 'scikit-learn', 'TensorFlow'],
    category: 'ai',
    color: 'from-green-500 to-emerald-500',
    icon: '🧠',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['Text Preprocessing', 'Multi-class Classification', 'Model Training', 'Evaluation Metrics', 'Insights Dashboard'],
  },
  {
    id: 6,
    title: 'Home Tiffin Portal',
    shortDesc: 'PHP/MySQL platform connecting home cooks with working professionals',
    fullDesc: `A Home Tiffin Ordering Portal built using PHP and MySQL that allows users to register,
    login, and access tiffin services. This project simulates a basic food ordering system
    for homemade tiffin services, connecting home cooks to working professionals.`,
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    category: 'web',
    color: 'from-yellow-500 to-amber-500',
    icon: '🍱',
    github: 'https://github.com/diya2405/home-tiffine-portal',
    demo: null,
    features: ['User Registration', 'Login System', 'Order Management', 'Cook Profiles', 'Menu Listing'],
  },
  {
    id: 7,
    title: 'Telemedicine Chatbot',
    shortDesc: 'AI-powered chatbot for telemedicine and health consultation',
    fullDesc: `A telemedicine chatbot built to provide preliminary health consultation and guidance.
    It uses conversational AI to interact with users, understand symptoms, and suggest
    possible next steps for medical care.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'AI APIs'],
    category: 'ai',
    color: 'from-teal-500 to-cyan-500',
    icon: '🏥',
    github: 'https://github.com/diya2405/Chatbot',
    demo: null,
    features: ['Symptom Analysis', 'Health Guidance', 'Conversational UI', 'Responsive Design', 'Quick Response'],
  },
  {
    id: 8,
    title: 'LangTrans – Language Translator',
    shortDesc: 'Python-based language translation tool for multilingual text conversion',
    fullDesc: `LangTrans is a Python-based language translation application that converts text between
    multiple languages. It leverages translation APIs to provide accurate and fast translations
    with a simple, user-friendly interface.`,
    tech: ['Python', 'NLP', 'Translation APIs'],
    category: 'ai',
    color: 'from-rose-500 to-pink-500',
    icon: '🌍',
    github: 'https://github.com/diya2405/LangTrans',
    demo: null,
    features: ['Multi-language Support', 'Fast Translation', 'Simple Interface', 'Text Processing', 'API Integration'],
  },
  {
    id: 9,
    title: 'Traffic Simulation',
    shortDesc: 'Python simulation for modeling and analyzing traffic flow patterns',
    fullDesc: `A Python-based traffic simulation project that models traffic flow patterns and scenarios.
    It provides visualization of traffic movements and helps analyze congestion points
    and traffic management strategies.`,
    tech: ['Python', 'Simulation', 'Data Visualization'],
    category: 'ai',
    color: 'from-red-500 to-orange-500',
    icon: '🚗',
    github: 'https://github.com/diya2405/Traffic_Simulation',
    demo: null,
    features: ['Traffic Modeling', 'Flow Simulation', 'Visualization', 'Pattern Analysis', 'Scenario Testing'],
  },
  {
    id: 10,
    title: 'Travel Booking System',
    shortDesc: 'Web platform for easy travel package booking and management',
    fullDesc: `A travel booking platform that allows easy travel package booking. Users can browse
    available packages, select their preferences, and manage their bookings through
    an intuitive web interface.`,
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    color: 'from-sky-500 to-blue-500',
    icon: '✈️',
    github: 'https://github.com/diya2405/Trvel-Booking-System',
    demo: null,
    features: ['Package Browsing', 'Booking Management', 'User Interface', 'Travel Info', 'Responsive Layout'],
  },
];

const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Web', value: 'web' },
  { label: 'AI/ML', value: 'ai' },
];

function ProjectModal({ project, onClose, darkMode }) {
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
        className={`relative rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border ${
          darkMode
            ? 'bg-hacker-950 border-hacker-500/30 shadow-[0_0_30px_rgba(0,255,65,0.1)]'
            : 'bg-white border-gray-200 shadow-2xl'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 transition-colors ${
            darkMode ? 'text-gray-400 hover:text-hacker-500' : 'text-gray-400 hover:text-gray-900'
          }`}
          aria-label="Close modal"
        >
          <FiX size={24} />
        </button>

        <div className="text-5xl mb-4">{project.icon}</div>
        <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'font-mono' : ''}`}>
          <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
            darkMode ? 'from-hacker-500 to-emerald-400' : project.color
          }`}>
            {project.title}
          </span>
        </h3>
        <p className={`leading-relaxed mb-6 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>{project.fullDesc}</p>

        <h4 className={`font-semibold mb-3 ${
          darkMode ? 'text-gray-200 font-mono' : 'text-gray-900'
        }`}>
          {darkMode ? '> Key Features' : 'Key Features'}
        </h4>
        <ul className="space-y-2 mb-6">
          {project.features.map((feature) => (
            <li key={feature} className={`flex items-center gap-2 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                darkMode ? 'bg-hacker-500 shadow-[0_0_4px_#00ff41]' : 'bg-blue-500'
              }`} />
              {feature}
            </li>
          ))}
        </ul>

        <h4 className={`font-semibold mb-3 ${
          darkMode ? 'text-gray-200 font-mono' : 'text-gray-900'
        }`}>
          {darkMode ? '> Tech Stack' : 'Tech Stack'}
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className={`px-3 py-1 rounded-full text-sm border ${
              darkMode
                ? 'bg-hacker-900/50 text-hacker-400 border-hacker-500/30 font-mono'
                : 'bg-gray-100 text-gray-700 border-gray-200'
            }`}>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-sm font-medium ${
              darkMode
                ? 'bg-hacker-900/50 border border-hacker-500/30 text-hacker-400 hover:bg-hacker-500/20 font-mono'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            <FiGithub /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r text-white rounded-lg transition-opacity hover:opacity-90 text-sm font-medium ${
                darkMode ? 'from-hacker-500 to-emerald-500' : project.color
              }`}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, isInView, darkMode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className={`border rounded-2xl p-6 cursor-pointer group transition-all backdrop-blur-sm ${
          darkMode
            ? 'bg-hacker-900/30 border-hacker-500/20 hover:border-hacker-500/50 hover:shadow-[0_0_25px_rgba(0,255,65,0.12)]'
            : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl'
        }`}
        onClick={() => setModalOpen(true)}
      >
        <div className="text-4xl mb-4">{project.icon}</div>
        <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
          darkMode ? 'text-hacker-500 font-mono' : ''
        }`}>
          <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
            darkMode ? 'from-hacker-500 to-emerald-400' : project.color
          }`}>
            {darkMode ? `// Project ${String(index + 1).padStart(2, '0')}` : `Project ${String(index + 1).padStart(2, '0')}`}
          </span>
        </div>
        <h3 className={`text-xl font-bold mb-3 transition-colors ${
          darkMode
            ? 'text-gray-200 group-hover:text-hacker-400'
            : 'text-gray-900 group-hover:text-blue-600'
        }`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>{project.shortDesc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className={`px-2 py-1 text-xs rounded-md border ${
              darkMode
                ? 'bg-hacker-900/50 text-hacker-400/80 border-hacker-500/20 font-mono'
                : 'bg-gray-50 text-gray-600 border-gray-200'
            }`}>
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className={`px-2 py-1 text-xs rounded-md border ${
              darkMode
                ? 'bg-hacker-900/50 text-gray-500 border-hacker-500/20 font-mono'
                : 'bg-gray-50 text-gray-500 border-gray-200'
            }`}>
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              darkMode
                ? 'bg-hacker-500/20 border border-hacker-500/40 text-hacker-500 hover:bg-hacker-500/30 font-mono'
                : `bg-gradient-to-r ${project.color} text-white opacity-90 hover:opacity-100`
            }`}
          >
            View Details
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-hacker-900/50 text-gray-400 hover:text-hacker-500 hover:bg-hacker-500/10'
                : 'bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200'
            }`}
            aria-label="View on GitHub"
          >
            <FiGithub size={18} />
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} darkMode={darkMode} />}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { darkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className={`section-padding ${
        darkMode ? 'bg-hacker-900/30' : 'bg-gray-50'
      }`}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className={`font-semibold text-sm uppercase tracking-widest ${
            darkMode ? 'text-hacker-500 font-mono' : 'text-blue-500'
          }`}>
            {darkMode ? '// Portfolio' : 'Portfolio'}
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A featured selection from 20+ projects across mobile, web, AI/ML, and full-stack development. Click any card to see more details.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {filterTabs.map((tab) => (
            <motion.button
              key={tab.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === tab.value
                  ? darkMode
                    ? 'bg-hacker-500/20 border border-hacker-500 text-hacker-500 shadow-[0_0_15px_rgba(0,255,65,0.2)] font-mono'
                    : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : darkMode
                    ? 'bg-hacker-900/30 border border-hacker-500/20 text-gray-400 hover:text-hacker-400 hover:border-hacker-500/40 font-mono'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-500'
              }`}
            >
              {activeFilter === tab.value && <FiFilter size={12} />}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} darkMode={darkMode} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
