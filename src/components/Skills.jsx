import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Dart/Flutter', level: 90, icon: '🎯' },
      { name: 'Java', level: 75, icon: '☕' },
      { name: 'JavaScript', level: 80, icon: '🌐' },
      { name: 'PHP', level: 65, icon: '🔧' },
      { name: 'HTML/CSS', level: 90, icon: '🎨' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Flutter', level: 90, icon: '📱' },
      { name: 'Firebase', level: 80, icon: '🔥' },
      { name: 'React', level: 70, icon: '⚛️' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Git/GitHub', level: 85, icon: '🔀' },
      { name: 'Android Studio', level: 75, icon: '🤖' },
    ],
  },
  {
    title: 'AI & Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Machine Learning', level: 75, icon: '🧠' },
      { name: 'TensorFlow/scikit', level: 70, icon: '🤖' },
      { name: 'REST APIs', level: 80, icon: '🔌' },
      { name: 'MySQL/SQLite', level: 75, icon: '🗄️' },
      { name: 'NLP', level: 65, icon: '💬' },
      { name: 'OpenAI API', level: 70, icon: '✨' },
    ],
  },
];

function SkillBar({ skill, color, delay, isInView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300 text-sm flex items-center gap-2">
          <span>{skill.icon}</span> {skill.name}
        </span>
        <span className="text-gray-400 text-xs">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all"
            >
              <h3 className={`text-lg font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  color={category.color}
                  delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
