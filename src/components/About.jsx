import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiSmartphone, FiGlobe } from 'react-icons/fi';

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

  return (
    <section id="about" className="section-padding bg-gray-900 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
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
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionate IT Engineering student at CSPIT, CHARUSAT University, building solutions with Flutter & Firebase
              and experimenting with AI/ML. I enjoy applying analytical skills to solve real-world problems through
              impactful applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Currently working on Flutter-based AI applications while exploring speech recognition, face recognition,
              and sentiment analysis. I&apos;ve built 15+ academic projects and earned a DDCET Rank 58 with a Diploma
              CGPA of 9.46.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all group"
                >
                  <Icon className="text-blue-400 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-gray-500 text-xs mt-1">{desc}</div>
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
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className="relative pl-16 pb-8"
                >
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-gray-800 border-2 border-blue-500 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div className="glass p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all">
                    <div className="text-xs text-blue-400 font-medium mb-1">{item.year}</div>
                    <h4 className="text-white font-bold">{item.degree}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.school}</p>
                    <p className="text-green-400 text-sm mt-1 font-medium">{item.grade}</p>
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
