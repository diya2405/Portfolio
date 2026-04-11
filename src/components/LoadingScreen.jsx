import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

const hackerLines = [
  '> Initializing system...',
  '> Loading modules: [████████████] 100%',
  '> Compiling assets...',
  '> Establishing secure connection...',
  '> Welcome, visitor.',
  '> Loading portfolio...',
];

export default function LoadingScreen({ onComplete }) {
  const { darkMode } = useTheme();
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= hackerLines.length - 1) {
          clearInterval(lineInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 250);
    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        darkMode ? 'bg-hacker-950' : 'bg-white'
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.2 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center w-full max-w-md px-6">
        {darkMode ? (
          <>
            {/* Hacker terminal boot */}
            <div className="text-left font-mono text-sm mb-6 space-y-1">
              {hackerLines.slice(0, currentLine + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-hacker-500"
                  style={{ textShadow: '0 0 8px rgba(0,255,65,0.5)' }}
                >
                  {line}
                </motion.div>
              ))}
              <span className="inline-block w-2 h-4 bg-hacker-500 animate-blink-caret" />
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-hacker-900 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-hacker-500 rounded-full"
                style={{ width: `${progress}%`, boxShadow: '0 0 10px #00ff41' }}
              />
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="font-mono text-hacker-500 text-lg font-bold"
              style={{ textShadow: '0 0 10px rgba(0,255,65,0.6)' }}
            >
              DIYA_SHAH.exe
            </motion.h2>
          </>
        ) : (
          <>
            {/* Clean light mode loader */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            </motion.div>
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold gradient-text"
            >
              Diya Shah
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 mt-2"
            >
              Loading Portfolio...
            </motion.p>
          </>
        )}
      </div>
    </motion.div>
  );
}
