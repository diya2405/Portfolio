import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    title: 'Mobile & Frontend',
    color: 'from-blue-500 to-cyan-500',
    hackerColor: 'from-hacker-500 to-emerald-400',
    skills: [
      { name: 'Flutter', level: 90, icon: '📱' },
      { name: 'Dart', level: 88, icon: '🎯' },
      { name: 'React', level: 78, icon: '⚛️' },
      { name: 'HTML5', level: 90, icon: '🌐' },
      { name: 'CSS3', level: 88, icon: '🎨' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
    ],
  },
  {
    title: 'Backend & Database',
    color: 'from-purple-500 to-pink-500',
    hackerColor: 'from-emerald-400 to-cyan-400',
    skills: [
      { name: 'Firebase', level: 85, icon: '🔥' },
      { name: 'Python', level: 82, icon: '🐍' },
      { name: 'Java', level: 80, icon: '☕' },
      { name: 'PHP', level: 75, icon: '🐘' },
      { name: 'MySQL', level: 78, icon: '🗄️' },
      { name: 'MongoDB', level: 72, icon: '🍃' },
    ],
  },
  {
    title: 'AI / ML',
    color: 'from-green-500 to-emerald-500',
    hackerColor: 'from-hacker-400 to-green-400',
    skills: [
      { name: 'TensorFlow', level: 75, icon: '🧠' },
      { name: 'OpenCV', level: 72, icon: '👁️' },
      { name: 'scikit-learn', level: 70, icon: '📊' },
      { name: 'NLP', level: 70, icon: '💬' },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'from-orange-500 to-red-500',
    hackerColor: 'from-cyan-400 to-hacker-500',
    skills: [
      { name: 'Git', level: 88, icon: '🔀' },
      { name: 'GitHub', level: 90, icon: '🐙' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Android Studio', level: 78, icon: '🤖' },
    ],
  },
];

function SkillBar({ skill, color, delay, isInView, darkMode }) {
  return (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-1">
        <span className={`text-sm flex items-center gap-2 ${
          darkMode ? 'text-gray-300 font-mono' : 'text-gray-700'
        }`}>
          <span>{skill.icon}</span> {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5 }}
          className={`text-xs font-mono ${
            darkMode ? 'text-hacker-500' : 'text-gray-500'
          }`}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${
        darkMode ? 'bg-hacker-900/60' : 'bg-gray-200'
      }`}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
          style={darkMode ? { boxShadow: '0 0 8px rgba(0,255,65,0.4)' } : {}}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`section-padding ${
        darkMode ? 'bg-hacker-950' : 'bg-white'
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
            {darkMode ? '// Expertise' : 'Expertise'}
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl border transition-all backdrop-blur-sm ${
                darkMode
                  ? 'bg-hacker-900/30 border-hacker-500/20 hover:border-hacker-500/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              <h3 className={`text-lg font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
                darkMode ? category.hackerColor : category.color
              }`}>
                {darkMode ? `> ${category.title}` : category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  color={darkMode ? category.hackerColor : category.color}
                  delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  isInView={isInView}
                  darkMode={darkMode}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
