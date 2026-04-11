import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiSmartphone, FiGlobe } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const education = [
  {
    degree: 'BE – Information Technology',
    school: 'CSPIT, CHARUSAT University, Changa',
    year: 'Semester 4 (Pursuing)',
    grade: 'Current IT Engineering Student',
    icon: '🎓',
  },
  {
    degree: 'Diploma – Computer Engineering',
    school: 'DDCET Rank 58 (Gujarat)',
    year: 'Completed',
    grade: 'CGPA: 9.46',
    icon: '🏅',
  },
];

const highlights = [
  { icon: FiSmartphone, label: 'Flutter Dev', desc: 'Cross-platform mobile apps' },
  { icon: FiCpu, label: 'AI/ML', desc: 'Machine learning solutions' },
  { icon: FiGlobe, label: 'Web Dev', desc: 'Modern web applications' },
  { icon: FiCode, label: 'Full Stack', desc: 'End-to-end development' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { darkMode } = useTheme();

  return (
    <section
      id="about"
      className={`section-padding ${
        darkMode ? 'bg-hacker-900/30' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`font-semibold text-sm uppercase tracking-widest ${
            darkMode ? 'text-hacker-500 font-mono' : 'text-blue-500'
          }`}>
            {darkMode ? '// About Me' : 'About Me'}
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-gray-100 font-mono' : 'text-gray-900'
            }`}>
              {darkMode ? '> Professional Summary' : 'Professional Summary'}
            </h3>
            <p className={`leading-relaxed mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate IT Engineering student at CSPIT, CHARUSAT University, building solutions with Flutter & Firebase
              and experimenting with AI/ML. I enjoy applying analytical skills to solve real-world problems through
              impactful applications across mobile, web, and intelligent systems.
            </p>
            <p className={`leading-relaxed mb-8 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Currently working on Flutter-based AI applications, React web platforms, and exploring full-stack
              development. I&apos;ve built 20+ projects spanning mobile apps, web platforms, AI/ML systems, and
              automation tools. Earned a DDCET Rank 58 with a Diploma CGPA of 9.46 and hold 10+ certifications
              in Java, Cyber Security, DSA, JavaScript, and more.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl border transition-all group backdrop-blur-sm ${
                    darkMode
                      ? 'bg-hacker-900/40 border-hacker-500/20 hover:border-hacker-500/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)]'
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                >
                  <Icon className={`mb-2 group-hover:scale-110 transition-transform ${
                    darkMode ? 'text-hacker-500' : 'text-blue-500'
                  }`} size={24} />
                  <div className={`font-semibold text-sm ${
                    darkMode ? 'text-gray-200 font-mono' : 'text-gray-900'
                  }`}>{label}</div>
                  <div className={`text-xs mt-1 ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-gray-100 font-mono' : 'text-gray-900'
            }`}>
              {darkMode ? '> Education' : 'Education'}
            </h3>
            <div className="relative">
              <div className={`absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b ${
                darkMode ? 'from-hacker-500 to-emerald-600' : 'from-blue-500 to-purple-500'
              }`} />
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className="relative pl-16 pb-8"
                >
                  <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 ${
                    darkMode
                      ? 'bg-hacker-950 border-hacker-500 shadow-[0_0_10px_rgba(0,255,65,0.3)]'
                      : 'bg-white border-blue-500'
                  }`}>
                    {item.icon}
                  </div>
                  <div className={`p-4 rounded-xl border transition-all backdrop-blur-sm ${
                    darkMode
                      ? 'bg-hacker-900/40 border-hacker-500/20 hover:border-hacker-500/40'
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}>
                    <div className={`text-xs font-medium mb-1 ${
                      darkMode ? 'text-hacker-500 font-mono' : 'text-blue-500'
                    }`}>{item.year}</div>
                    <h4 className={`font-bold ${
                      darkMode ? 'text-gray-200' : 'text-gray-900'
                    }`}>{item.degree}</h4>
                    <p className={`text-sm mt-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{item.school}</p>
                    <p className={`text-sm mt-1 font-medium ${
                      darkMode ? 'text-hacker-400' : 'text-green-600'
                    }`}>{item.grade}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
