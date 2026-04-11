import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiTerminal } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { darkMode } = useTheme();

  const handleNavClick = (section) => {
    const id = section.toLowerCase() === 'home' ? 'hero' : section.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`py-12 px-4 border-t ${
        darkMode
          ? 'bg-hacker-950 border-hacker-500/20'
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className={`text-2xl font-bold mb-4 flex items-center justify-center gap-2 ${
            darkMode ? 'font-mono' : ''
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {darkMode && <FiTerminal className="text-hacker-500" size={20} />}
          <span className="gradient-text">
            {darkMode ? 'diya_shah' : 'Diya Shah'}
          </span>
        </motion.div>
        <p className={`text-sm mb-6 ${
          darkMode ? 'text-gray-500 font-mono' : 'text-gray-500'
        }`}>
          {darkMode
            ? '// IT Engineering Student | Flutter & Firebase | AI/ML Enthusiast'
            : 'IT Engineering Student | Flutter & Firebase | AI/ML Enthusiast'
          }
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {[
            { icon: FiGithub, href: 'https://github.com/diya2405', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/diya-shah-85ba49308/', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:diyanamya@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className={`p-2.5 rounded-full transition-all ${
                darkMode
                  ? 'bg-hacker-900/50 text-gray-500 hover:text-hacker-500 hover:bg-hacker-500/10'
                  : 'bg-white text-gray-400 hover:text-blue-500 hover:bg-blue-50 shadow-sm'
              }`}
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <div className={`flex flex-wrap justify-center gap-6 text-sm mb-6 ${
          darkMode ? 'text-gray-500' : 'text-gray-500'
        }`}>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`transition-colors ${
                darkMode
                  ? 'hover:text-hacker-400 font-mono'
                  : 'hover:text-blue-500'
              }`}
            >
              {darkMode ? `> ${item}` : item}
            </button>
          ))}
        </div>

        <div className={`border-t pt-6 ${
          darkMode ? 'border-hacker-500/10' : 'border-gray-200'
        }`}>
          <p className={`text-sm flex items-center justify-center gap-1 ${
            darkMode ? 'text-gray-600 font-mono' : 'text-gray-500'
          }`}>
            © {currentYear} Diya Shah. Made with <FiHeart className="text-red-500" size={14} />
            {' '}using React + Vite
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
