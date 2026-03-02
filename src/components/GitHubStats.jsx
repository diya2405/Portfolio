import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const username = 'diya2405';

  return (
    <section id="github" className="section-padding bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Open Source</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-gray-400 mt-4">My open source contributions and activity</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=60a5fa&icon_color=818cf8&text_color=94a3b8`}
              alt="GitHub Stats"
              className="rounded-xl max-w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=60a5fa&text_color=94a3b8`}
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
          className="flex justify-center"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0d1117&ring=60a5fa&fire=f97316&currStreakLabel=94a3b8`}
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
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full transition-colors border border-gray-700 hover:border-gray-500"
          >
            View Full GitHub Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
