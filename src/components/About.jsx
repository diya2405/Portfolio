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
    degree: 'Diploma in Information Technology',
    school: 'Government Polytechnic for Girls, Surat',
    year: '2022 – 2025',
    grade: 'SPI: 9.37 → 9.41 → 9.48 → 9.47',
    icon: '🎓',
  },
  {
    degree: 'High School',
    school: 'LH Boghra Sishuvihar School, Surat',
    year: '2022',
    grade: '83%',
    icon: '🏫',
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
              Dedicated IT student with a passion for exploring the latest in Android, web development, and AI.
              I thrive on applying analytical skills to solve real-world problems, with strong programming
              capabilities and an eagerness to take on new challenges.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              With hands-on experience in Flutter development (internship at Toshal Infotech) and a portfolio
              of innovative projects, I&apos;m eager to transition my academic knowledge into impactful applications.
              Currently seeking opportunities to enhance my skills and contribute to cutting-edge technologies.
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
