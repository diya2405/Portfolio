import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiTerminal } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-hacker-950/90 backdrop-blur-md shadow-lg shadow-hacker-500/10 border-b border-hacker-500/20'
            : 'bg-white/90 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className={`text-xl font-bold flex items-center gap-2 ${
              darkMode ? 'font-mono' : ''
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {darkMode && <FiTerminal className="text-hacker-500" size={18} />}
            <span className="gradient-text">
              {darkMode ? 'DS://' : 'DS'}
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                    darkMode
                      ? `font-mono ${isActive ? 'text-hacker-500' : 'text-gray-400 hover:text-hacker-400'}`
                      : `${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {darkMode && isActive && (
                    <span className="mr-1 text-hacker-500">{'>'}</span>
                  )}
                  {link.name}
                  <motion.span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      darkMode ? 'bg-hacker-500' : 'bg-blue-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ boxShadow: darkMode && isActive ? '0 0 8px #00ff41' : 'none' }}
                  />
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      darkMode ? 'bg-hacker-500/50' : 'bg-blue-500/50'
                    }`}
                  />
                </motion.a>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-hacker-900/50 border border-hacker-500/30 text-hacker-500 hover:bg-hacker-500/20 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                  : 'bg-gray-100 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-500'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                darkMode ? 'text-hacker-500 hover:bg-hacker-900/50' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-md border-t ${
              darkMode
                ? 'bg-hacker-950/95 border-hacker-500/20'
                : 'bg-white/95 border-gray-200'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 transition-colors ${
                    darkMode
                      ? `font-mono text-sm ${
                          isActive
                            ? 'text-hacker-500 bg-hacker-500/10 border-l-2 border-hacker-500'
                            : 'text-gray-400 hover:text-hacker-400 hover:bg-hacker-900/50'
                        }`
                      : `${
                          isActive
                            ? 'text-blue-600 bg-blue-50 border-l-2 border-blue-500'
                            : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
                        }`
                  }`}
                >
                  {darkMode && '> '}{link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
