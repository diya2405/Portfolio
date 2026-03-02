import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'JobFlow – Flutter Job Portal',
    shortDesc: 'Flutter + Firebase job portal for seamless job discovery and tracking',
    fullDesc: `JobFlow is a Flutter & Firebase-based job portal that simplifies job discovery and application tracking.
    It supports candidate profiles, recruiter postings, and real-time updates, helping connect applicants with
    the right opportunities. The app focuses on a smooth experience for both candidates and recruiters.`,
    tech: ['Flutter', 'Firebase', 'Dart'],
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['Job Discovery', 'Application Tracking', 'Recruiter Dashboard', 'Real-time Updates', 'Profile Management'],
  },
  {
    id: 2,
    title: 'AI Assistant (Flutter)',
    shortDesc: 'Conversational AI assistant with NLP-driven user interaction',
    fullDesc: `A conversational AI assistant app built with Flutter that integrates natural language processing
    for real-time user interaction. It focuses on an intuitive mobile experience with smart responses and
    multi-feature assistance in one place.`,
    tech: ['Flutter', 'Dart', 'AI/ML APIs'],
    color: 'from-purple-500 to-pink-500',
    icon: '🤖',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['Conversational UI', 'Smart Responses', 'Mobile-first Design', 'AI Integrations', 'Fast Interaction'],
  },
  {
    id: 3,
    title: 'Sentiment Analysis',
    shortDesc: 'NLP project classifying text into positive, negative, or neutral sentiments',
    fullDesc: `A Python-based sentiment analysis project that classifies user reviews and social media text
    into positive, negative, or neutral sentiments using NLP techniques and ML models.`,
    tech: ['Python', 'NLP', 'scikit-learn', 'TensorFlow'],
    color: 'from-green-500 to-emerald-500',
    icon: '🧠',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['Text Preprocessing', 'Multi-class Classification', 'Model Training', 'Evaluation Metrics', 'Insights Dashboard'],
  },
  {
    id: 4,
    title: 'Face Recognition',
    shortDesc: 'Real-time face detection and recognition system',
    fullDesc: `A real-time face detection and recognition system using computer vision and deep learning.
    Built to identify faces with high accuracy for practical security and identification use cases.`,
    tech: ['Python', 'OpenCV', 'Deep Learning'],
    color: 'from-orange-500 to-red-500',
    icon: '👁️',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['Face Detection', 'Recognition Pipeline', 'Real-time Processing', 'High Accuracy', 'Camera Integration'],
  },
  {
    id: 5,
    title: 'Speech to Text',
    shortDesc: 'Convert spoken language into accurate written text',
    fullDesc: `An application that converts spoken language into written text using speech recognition APIs
    and ML models. Designed to improve accessibility and productivity with reliable transcription.`,
    tech: ['Python', 'Speech Recognition', 'Flutter'],
    color: 'from-indigo-500 to-purple-500',
    icon: '🎙️',
    github: 'https://github.com/diya2405',
    demo: null,
    features: ['Live Transcription', 'Multi-language Support', 'Noise Handling', 'Simple UI', 'Export Options'],
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
            A featured selection from 15+ academic projects. Click any card to see more details.
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
