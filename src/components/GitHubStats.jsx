import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { darkMode } = useTheme();
  const username = 'diya2405';

  const darkTheme = `&theme=dark&hide_border=true&bg_color=030a04&title_color=00ff41&icon_color=4ade80&text_color=86efac&ring=00ff41&fire=4ade80&currStreakLabel=86efac`;
  const lightTheme = `&theme=default&hide_border=true&bg_color=ffffff&title_color=3b82f6&icon_color=818cf8&text_color=64748b`;

  return (
    <section
      id="github"
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
          className="text-center mb-16"
        >
          <span className={`font-semibold text-sm uppercase tracking-widest ${
            darkMode ? 'text-hacker-500 font-mono' : 'text-blue-500'
          }`}>
            {darkMode ? '// Open Source' : 'Open Source'}
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <p className={`mt-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>My open source contributions and activity</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`flex justify-center p-4 rounded-2xl border ${
              darkMode
                ? 'bg-hacker-900/30 border-hacker-500/20'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true${darkMode ? darkTheme : lightTheme}`}
              alt="GitHub Stats"
              className="rounded-xl max-w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`flex justify-center p-4 rounded-2xl border ${
              darkMode
                ? 'bg-hacker-900/30 border-hacker-500/20'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact${darkMode ? darkTheme : lightTheme}`}
              alt="Top Languages"
              className="rounded-xl max-w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className={`flex justify-center p-4 rounded-2xl border ${
            darkMode
              ? 'bg-hacker-900/30 border-hacker-500/20'
              : 'bg-white border-gray-200 shadow-sm'
          }`}
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}${
              darkMode
                ? '&theme=dark&hide_border=true&background=030a04&ring=00ff41&fire=4ade80&currStreakLabel=86efac&sideLabels=00ff41&dates=4ade80'
                : '&theme=default&hide_border=true&background=ffffff&ring=3b82f6&fire=f97316&currStreakLabel=64748b'
            }`}
            alt="GitHub Streak"
            className="rounded-xl max-w-full"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all border ${
              darkMode
                ? 'bg-hacker-900/30 border-hacker-500/30 text-hacker-400 hover:bg-hacker-500/10 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] font-mono'
                : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-500 hover:shadow-lg'
            }`}
          >
            View Full GitHub Profile →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
