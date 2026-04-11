import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiTerminal } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId = null;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}[]|<>?/\\';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(1, 6, 2, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;
      ctx.shadowColor = '#00ff41';
      ctx.shadowBlur = 2;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.globalAlpha = Math.random() * 0.5 + 0.1;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30"
      style={{ zIndex: 0 }}
    />
  );
}

// Pre-computed particle positions (stable across renders)
const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: ((i * 37 + 13) % 100),
  y: ((i * 53 + 7) % 100),
  size: (i % 3) + 1,
  duration: 15 + (i % 10) * 2,
  delay: (i % 8) * 0.6,
}));

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { darkMode } = useTheme();

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-hacker-950' : 'bg-gradient-to-br from-white via-blue-50 to-purple-50'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {darkMode ? (
          <>
            <MatrixRain />
            <div className="absolute inset-0 bg-gradient-to-b from-hacker-950/80 via-transparent to-hacker-950/90" />
          </>
        ) : (
          <>
            <ParticleField />
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
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                darkMode
                  ? 'bg-hacker-500/10 border border-hacker-500/30 text-hacker-500 font-mono'
                  : 'bg-blue-500/10 border border-blue-500/30 text-blue-600'
              }`}
            >
              <span className={`w-2 h-2 rounded-full animate-pulse ${
                darkMode ? 'bg-hacker-500 shadow-[0_0_8px_#00ff41]' : 'bg-green-400'
              }`} />
              {darkMode ? '// Available for Opportunities' : 'Available for Opportunities'}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 ${
                darkMode ? 'text-gray-100 font-mono' : 'text-gray-900'
              }`}
            >
              {darkMode ? (
                <>
                  <span className="text-hacker-500">{'>'}</span> Hi, I&apos;m{' '}
                  <span className="gradient-text" style={{ textShadow: '0 0 20px rgba(0,255,65,0.3)' }}>
                    Diya Shah
                  </span>
                </>
              ) : (
                <>
                  Hi, I&apos;m{' '}
                  <span className="gradient-text">Diya Shah</span>
                </>
              )}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-2xl sm:text-3xl mb-6 h-12 ${darkMode ? 'font-mono' : ''}`}
            >
              <TypeAnimation
                sequence={[
                  'IT Engineering Student', 2000,
                  'Flutter & Firebase Developer', 2000,
                  'Full Stack Web Developer', 2000,
                  'AI/ML Enthusiast', 2000,
                  'React Developer', 2000,
                  'Mobile App Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className={`font-semibold ${
                  darkMode ? 'text-hacker-400' : 'text-blue-500'
                }`}
                style={darkMode ? { textShadow: '0 0 10px rgba(0,255,65,0.4)' } : {}}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg mb-8 max-w-lg ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              IT Engineering student at CSPIT, CHARUSAT University, focused on Flutter & Firebase development, full-stack
              web development with React, and AI/ML solutions. Building impactful applications that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 30px rgba(0,255,65,0.4)' : '0 0 30px rgba(59,130,246,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('projects')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  darkMode
                    ? 'bg-hacker-500/20 border border-hacker-500 text-hacker-500 font-mono hover:bg-hacker-500/30'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                }`}
              >
                {darkMode && <FiTerminal size={16} />}
                View Projects <FiArrowRight />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/diya.jpg"
                download
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all border-2 ${
                  darkMode
                    ? 'border-hacker-500/50 text-hacker-400 hover:bg-hacker-500/10 font-mono'
                    : 'border-blue-500 text-blue-500 hover:bg-blue-50'
                }`}
              >
                <FiDownload /> Download Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('contact')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all border-2 ${
                  darkMode
                    ? 'border-gray-600 text-gray-400 hover:bg-hacker-900/50 font-mono'
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
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
                  className={`p-3 rounded-full border transition-all ${
                    darkMode
                      ? 'bg-hacker-900/50 border-hacker-500/30 text-gray-400 hover:text-hacker-500 hover:border-hacker-500/60 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                      : 'bg-white border-gray-200 text-gray-500 hover:text-blue-500 hover:border-blue-300 hover:shadow-lg'
                  }`}
                  aria-label={label}
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
                className={`absolute inset-0 rounded-full border-2 border-dashed ${
                  darkMode ? 'border-hacker-500/30' : 'border-blue-500/30'
                }`}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className={`absolute inset-4 rounded-full border-2 border-dashed ${
                  darkMode ? 'border-hacker-400/20' : 'border-purple-500/30'
                }`}
              />
              <div className={`absolute inset-8 rounded-full blur-xl ${
                darkMode
                  ? 'bg-gradient-to-br from-hacker-500/20 to-emerald-500/20'
                  : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
              }`} />
              <div className={`absolute inset-8 rounded-full overflow-hidden border-2 ${
                darkMode
                  ? 'border-hacker-500/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]'
                  : 'border-blue-500/50'
              } bg-gradient-to-br ${
                darkMode ? 'from-hacker-800 to-emerald-900' : 'from-blue-600 to-purple-600'
              }`}>
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

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${
                  darkMode
                    ? 'bg-hacker-900/80 border-hacker-500/40 text-hacker-400 font-mono shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'bg-white/80 border-blue-300 text-blue-600'
                }`}
              >
                {darkMode ? '// Flutter Dev' : 'Flutter Dev'}
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className={`absolute -bottom-2 -left-2 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${
                  darkMode
                    ? 'bg-hacker-900/80 border-hacker-500/40 text-hacker-400 font-mono shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'bg-white/80 border-purple-300 text-purple-600'
                }`}
              >
                {darkMode ? '// AI Engineer' : 'AI Engineer'}
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
            className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${
              darkMode ? 'border-hacker-500/40' : 'border-gray-400'
            }`}
          >
            <div className={`w-1.5 h-3 rounded-full ${
              darkMode ? 'bg-hacker-500 shadow-[0_0_8px_#00ff41]' : 'bg-blue-500'
            }`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
