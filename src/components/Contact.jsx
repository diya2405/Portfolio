import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:diyanamya@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'diyanamya@gmail.com', href: 'mailto:diyanamya@gmail.com' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/diya2405', href: 'https://github.com/diya2405' },
    { icon: FiMapPin, label: 'Location', value: 'Surat, Gujarat, India', href: null },
  ];

  return (
    <section
      id="contact"
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
            {darkMode ? '// Get In Touch' : 'Get In Touch'}
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mt-2 ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I&apos;m open to internship opportunities and exciting projects. Let&apos;s build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-gray-100 font-mono' : 'text-gray-900'
            }`}>
              {darkMode ? '> Let\'s Connect' : "Let's Connect"}
            </h3>
            <p className={`mb-8 leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open!
            </p>

            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border ${
                  darkMode
                    ? 'bg-hacker-500/10 border-hacker-500/30 text-hacker-500'
                    : 'bg-blue-50 border-blue-200 text-blue-500'
                }`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className={`text-xs uppercase tracking-widest ${
                    darkMode ? 'text-gray-500 font-mono' : 'text-gray-500'
                  }`}>{label}</div>
                  {href ? (
                    <a
                      href={href}
                      className={`text-sm transition-colors ${
                        darkMode
                          ? 'text-gray-300 hover:text-hacker-400'
                          : 'text-gray-700 hover:text-blue-500'
                      }`}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-4 mt-8">
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
                  className={`p-3 rounded-full border transition-all ${
                    darkMode
                      ? 'bg-hacker-900/50 border-hacker-500/30 text-gray-400 hover:text-hacker-500 hover:border-hacker-500/60 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]'
                      : 'bg-white border-gray-200 text-gray-500 hover:text-blue-500 hover:border-blue-300 hover:shadow-lg'
                  }`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl border backdrop-blur-sm ${
                darkMode
                  ? 'bg-hacker-900/30 border-hacker-500/20'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              <div className="mb-5">
                <label className={`block text-sm mb-2 ${
                  darkMode ? 'text-gray-400 font-mono' : 'text-gray-600'
                }`}>
                  {darkMode ? '> Your Name' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all ${
                    darkMode
                      ? 'bg-hacker-950/80 border border-hacker-500/20 text-gray-100 placeholder-gray-600 focus:border-hacker-500 focus:shadow-[0_0_10px_rgba(0,255,65,0.15)] font-mono'
                      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  } focus:outline-none`}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-5">
                <label className={`block text-sm mb-2 ${
                  darkMode ? 'text-gray-400 font-mono' : 'text-gray-600'
                }`}>
                  {darkMode ? '> Your Email' : 'Your Email'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all ${
                    darkMode
                      ? 'bg-hacker-950/80 border border-hacker-500/20 text-gray-100 placeholder-gray-600 focus:border-hacker-500 focus:shadow-[0_0_10px_rgba(0,255,65,0.15)] font-mono'
                      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  } focus:outline-none`}
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className={`block text-sm mb-2 ${
                  darkMode ? 'text-gray-400 font-mono' : 'text-gray-600'
                }`}>
                  {darkMode ? '> Message' : 'Message'}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all resize-none ${
                    darkMode
                      ? 'bg-hacker-950/80 border border-hacker-500/20 text-gray-100 placeholder-gray-600 focus:border-hacker-500 focus:shadow-[0_0_10px_rgba(0,255,65,0.15)] font-mono'
                      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  } focus:outline-none`}
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  darkMode
                    ? 'bg-hacker-500/20 border border-hacker-500 text-hacker-500 hover:bg-hacker-500/30 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] font-mono'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                }`}
              >
                {submitted ? (
                  darkMode ? '> Message sent ✓' : '✓ Message Sent!'
                ) : (
                  <><FiSend /> {darkMode ? '> Send Message' : 'Send Message'}</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
