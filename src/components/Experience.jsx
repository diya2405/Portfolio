import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    title: 'Flutter-based AI Applications',
    company: 'Academic Projects',
    period: '2024 – Present',
    type: 'work',
    description: 'Building Flutter applications with Firebase integration and AI/ML features like NLP, speech recognition, and sentiment analysis.',
    icon: '💼',
    color: 'border-blue-500',
    hackerColor: 'border-hacker-500',
  },
  {
    title: 'Full Stack Web Development',
    company: 'Academic & Personal Projects',
    period: '2024 – Present',
    type: 'work',
    description: 'Developing web applications using React, PHP, MySQL, and modern JavaScript. Built platforms like CodeQuest, Home Tiffin Portal, and Travel Booking System.',
    icon: '🌐',
    color: 'border-purple-500',
    hackerColor: 'border-emerald-500',
  },
];

const achievements = [
  {
    title: 'Core Java',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '☕',
    color: 'border-orange-500',
    hackerColor: 'border-hacker-500',
    pdf: '/Diya_certi/CoreJava.pdf',
  },
  {
    title: 'Ethical Hacking',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '🔒',
    color: 'border-red-500',
    hackerColor: 'border-hacker-400',
    pdf: '/Diya_certi/Ethical_Hacker.pdf',
  },
  {
    title: 'Foundation of DSA',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '📊',
    color: 'border-green-500',
    hackerColor: 'border-emerald-500',
    pdf: '/Diya_certi/Foundation_of_DSA.pdf',
  },
  {
    title: 'JavaScript Essentials',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '⚡',
    color: 'border-yellow-500',
    hackerColor: 'border-hacker-500',
    pdf: '/Diya_certi/JS_Essentials.pdf',
  },
  {
    title: 'OOP with Java',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '🧩',
    color: 'border-blue-500',
    hackerColor: 'border-cyan-500',
    pdf: '/Diya_certi/Intro_to_oop_with_java.pdf',
  },
  {
    title: 'Cyber Security',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '🛡️',
    color: 'border-purple-500',
    hackerColor: 'border-hacker-400',
    pdf: '/Diya_certi/cyber_1.pdf',
  },
  {
    title: 'Prompt Engineering',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '🤖',
    color: 'border-teal-500',
    hackerColor: 'border-emerald-400',
    pdf: '/Diya_certi/Start_Promts.pdf',
  },
];

const academicHighlights = [
  { label: 'BE IT — Semester 4', value: 'Currently Pursuing', icon: '🎓' },
  { label: 'Diploma CGPA', value: '9.46 / 10', icon: '📚' },
  { label: 'DDCET Rank (Gujarat)', value: '58', icon: '🏅' },
  { label: 'Total Projects', value: '20+', icon: '🚀' },
  { label: 'Certifications', value: '10+', icon: '📜' },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { darkMode } = useTheme();

  return (
    <section
      id="experience"
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
            {darkMode ? '// Background' : 'Background'}
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
              darkMode ? 'text-gray-100 font-mono' : 'text-gray-900'
            }`}>
              <span className="text-2xl">💼</span>
              {darkMode ? '> Experience' : 'Experience'}
            </h3>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className={`p-5 rounded-xl border-l-4 mb-4 backdrop-blur-sm transition-all ${
                  darkMode
                    ? `bg-hacker-900/30 ${exp.hackerColor} hover:bg-hacker-900/50`
                    : `bg-white shadow-sm hover:shadow-md ${exp.color}`
                }`}
              >
                <div className="text-2xl mb-2">{exp.icon}</div>
                <h4 className={`font-bold text-sm ${
                  darkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>{exp.title}</h4>
                <p className={`text-xs mt-1 ${
                  darkMode ? 'text-hacker-500' : 'text-blue-500'
                }`}>{exp.company}</p>
                <p className={`text-xs mt-1 ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                }`}>{exp.period}</p>
                <p className={`text-xs mt-2 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
              darkMode ? 'text-gray-100 font-mono' : 'text-gray-900'
            }`}>
              <span className="text-2xl">🏆</span>
              {darkMode ? '> Certifications' : 'Certifications'}
            </h3>
            <p className={`text-xs mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              10+ certifications across Java, Cyber Security, DSA, JavaScript, and more.
            </p>
            <div className="max-h-[400px] overflow-y-auto pr-2 space-y-3">
              {achievements.map((cert, i) => (
                <motion.a
                  key={cert.title}
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className={`p-4 rounded-xl border-l-4 block transition-all ${
                    darkMode
                      ? `bg-hacker-900/30 ${cert.hackerColor} hover:bg-hacker-900/50`
                      : `bg-white shadow-sm hover:shadow-md ${cert.color}`
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cert.icon}</span>
                    <div>
                      <h4 className={`font-bold text-sm ${
                        darkMode ? 'text-gray-200' : 'text-gray-900'
                      }`}>{cert.title}</h4>
                      <p className={`text-xs mt-0.5 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>{cert.year}</p>
                    </div>
                    <span className={`ml-auto text-xs ${
                      darkMode ? 'text-hacker-500 font-mono' : 'text-blue-500'
                    }`}>
                      {darkMode ? '> open' : 'View PDF →'}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="/certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-2 text-xs text-center rounded-lg transition-colors border ${
                  darkMode
                    ? 'bg-hacker-900/30 border-hacker-500/30 text-hacker-400 hover:bg-hacker-500/10 font-mono'
                    : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Web Dev Cert
              </a>
              <a
                href="/certificate1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-2 text-xs text-center rounded-lg transition-colors border ${
                  darkMode
                    ? 'bg-hacker-900/30 border-hacker-500/30 text-hacker-400 hover:bg-hacker-500/10 font-mono'
                    : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Flutter Cert
              </a>
            </div>
          </motion.div>

          {/* Academic Performance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
              darkMode ? 'text-gray-100 font-mono' : 'text-gray-900'
            }`}>
              <span className="text-2xl">📊</span>
              {darkMode ? '> Academic Highlights' : 'Academic Highlights'}
            </h3>
            <div className={`p-5 rounded-xl border ${
              darkMode
                ? 'bg-hacker-900/30 border-hacker-500/20'
                : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <p className={`text-xs mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Education milestones and achievements</p>
              {academicHighlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`flex items-center justify-between mb-4 pb-4 last:mb-0 last:pb-0 ${
                    i < academicHighlights.length - 1
                      ? darkMode ? 'border-b border-hacker-500/10' : 'border-b border-gray-100'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{item.label}</span>
                  </div>
                  <span className={`text-sm font-bold text-right ${
                    darkMode ? 'text-hacker-400 font-mono' : 'text-green-600'
                  }`}>{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
