import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'Flutter Development Intern',
    company: 'Toshal Infotech, Surat',
    period: '2024',
    type: 'work',
    description: 'Developed mobile applications using Flutter and Dart. Built cross-platform apps with Firebase integration, REST API consumption, and state management.',
    icon: '💼',
    color: 'border-blue-500',
  },
];

const achievements = [
  {
    title: 'Web Development Certification',
    provider: 'Udemy',
    year: '2023',
    icon: '🏆',
    color: 'border-yellow-500',
  },
  {
    title: 'Flutter Development Internship Certificate',
    provider: 'Toshal Infotech',
    year: '2024',
    icon: '📱',
    color: 'border-green-500',
  },
];

const academicAchievements = [
  { semester: 'Semester 1', gpa: '9.37', icon: '📚' },
  { semester: 'Semester 2', gpa: '9.41', icon: '📚' },
  { semester: 'Semester 3', gpa: '9.48', icon: '📚' },
  { semester: 'Semester 4', gpa: '9.47', icon: '📚' },
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
            {achievements.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className={`glass p-5 rounded-xl border-l-4 ${cert.color} mb-4`}
              >
                <div className="text-2xl mb-2">{cert.icon}</div>
                <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                <p className="text-blue-400 text-xs mt-1">{cert.provider}</p>
                <p className="text-gray-500 text-xs mt-1">{cert.year}</p>
              </motion.div>
            ))}
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
              <span className="text-2xl">📊</span> Academic Performance
            </h3>
            <div className="glass p-5 rounded-xl border border-gray-700/50">
              <p className="text-gray-400 text-xs mb-4">Diploma in IT — GPA Progression</p>
              {academicAchievements.map((item, i) => (
                <motion.div
                  key={item.semester}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.semester}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(parseFloat(item.gpa) / 10) * 100}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                      />
                    </div>
                    <span className="text-green-400 text-sm font-bold w-12 text-right">{item.gpa}</span>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Overall Average</span>
                  <span className="text-green-400 font-bold">9.43 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
