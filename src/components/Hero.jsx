import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/30 to-purple-950/30" />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Diya Shah</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl text-gray-300 mb-6 h-12"
            >
              <TypeAnimation
                sequence={[
                  'IT Engineering Student', 2000,
                  'Flutter & Firebase Developer', 2000,
                  'AI/ML Enthusiast', 2000,
                  'Mobile App Developer', 2000,
                  'Software Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-400 font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg mb-8 max-w-lg"
            >
              IT Engineering student at CSPIT, CHARUSAT University, focused on Flutter & Firebase development and AI/ML
              solutions. Building impactful applications that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('projects')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                View Projects <FiArrowRight />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/diya.jpg"
                download
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-all"
              >
                <FiDownload /> Download Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('contact')}
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-800/50 transition-all"
              >
                <FiMail /> Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/diya2405', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/diya-shah-85ba49308/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:diyanamya@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-purple-500/30"
              />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-blue-500/50 bg-gradient-to-br from-blue-600 to-purple-600">
                <img
                  src="/diya.jpg"
                  alt="Diya Shah"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full items-center justify-center text-white text-4xl font-bold" style={{ display: 'none' }}>DS</div>
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 glass px-3 py-1 rounded-full text-xs text-blue-300 font-medium border border-blue-500/30"
              >
                Flutter Dev
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 glass px-3 py-1 rounded-full text-xs text-purple-300 font-medium border border-purple-500/30"
              >
                AI Engineer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-blue-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
