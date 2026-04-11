import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-all ${
            darkMode
              ? 'bg-hacker-500/20 border border-hacker-500 text-hacker-500 shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:bg-hacker-500/30'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/25'
          }`}
          aria-label="Back to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
