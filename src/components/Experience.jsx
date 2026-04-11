import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'Flutter-based AI Applications',
    company: 'Academic Projects',
    period: '2024 – Present',
    type: 'work',
    description: 'Building Flutter applications with Firebase integration and AI/ML features like NLP, speech recognition, and sentiment analysis.',
    icon: '💼',
    color: 'border-blue-500',
  },
  {
    title: 'Full Stack Web Development',
    company: 'Academic & Personal Projects',
    period: '2024 – Present',
    type: 'work',
    description: 'Developing web applications using React, PHP, MySQL, and modern JavaScript. Built platforms like CodeQuest, Home Tiffin Portal, and Travel Booking System.',
    icon: '🌐',
    color: 'border-purple-500',
  },
];

const achievements = [
  {
    title: 'Core Java',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '☕',
    color: 'border-orange-500',
    pdf: '/Diya_certi/CoreJava.pdf',
  },
  {
    title: 'Ethical Hacking',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '🔒',
    color: 'border-red-500',
    pdf: '/Diya_certi/Ethical_Hacker.pdf',
  },
  {
    title: 'Foundation of DSA',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '📊',
    color: 'border-green-500',
    pdf: '/Diya_certi/Foundation_of_DSA.pdf',
  },
  {
    title: 'JavaScript Essentials',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '⚡',
    color: 'border-yellow-500',
    pdf: '/Diya_certi/JS_Essentials.pdf',
  },
  {
    title: 'OOP with Java',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '🧩',
    color: 'border-blue-500',
    pdf: '/Diya_certi/Intro_to_oop_with_java.pdf',
  },
  {
    title: 'Cyber Security',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '🛡️',
    color: 'border-purple-500',
    pdf: '/Diya_certi/cyber_1.pdf',
  },
  {
    title: 'Prompt Engineering',
    provider: 'Certification',
    year: '2023 – 2024',
    icon: '🤖',
    color: 'border-teal-500',
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

  return (
    <section id="experience" className="section-padding bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Background</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
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
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">💼</span> Experience
            </h3>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                className={`glass p-5 rounded-xl border-l-4 ${exp.color} mb-4 hover:scale-105 transition-transform`}
              >
                <div className="text-2xl mb-2">{exp.icon}</div>
                <h4 className="text-white font-bold text-sm">{exp.title}</h4>
                <p className="text-blue-400 text-xs mt-1">{exp.company}</p>
                <p className="text-gray-500 text-xs mt-1">{exp.period}</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🏆</span> Certifications
            </h3>
            <p className="text-gray-400 text-xs mb-4">
              10+ certifications across Java, Cyber Security, DSA, JavaScript, and more.
            </p>
            <div className="max-h-[400px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
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
                  className={`glass p-4 rounded-xl border-l-4 ${cert.color} block hover:bg-white/5 transition-all`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cert.icon}</span>
                    <div>
                      <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{cert.year}</p>
                    </div>
                    <span className="ml-auto text-blue-400 text-xs">View PDF →</span>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <a href="/certificate.jpg" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-xs text-center rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors border border-gray-700">
                View Web Dev Cert
              </a>
              <a href="/certificate1.jpg" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-xs text-center rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors border border-gray-700">
                View Flutter Cert
              </a>
            </div>
          </motion.div>

          {/* Academic Performance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">📊</span> Academic Highlights
            </h3>
            <div className="glass p-5 rounded-xl border border-gray-700/50">
              <p className="text-gray-400 text-xs mb-4">Education milestones and achievements</p>
              {academicHighlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.label}</span>
                  </div>
                  <span className="text-green-400 text-sm font-bold text-right">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
