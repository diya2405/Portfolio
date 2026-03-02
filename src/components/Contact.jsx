import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
    <section id="contact" className="section-padding bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
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
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">{label}</div>
                  {href ? (
                    <a href={href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {value}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm">{value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-4 mt-8">
              {[
                { icon: FiGithub, href: 'https://github.com/diya2405', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://linkedin.com/in/diya-shah', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:diyanamya@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
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
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-gray-700/50">
              <div className="mb-5">
                <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-400 text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                {submitted ? '✓ Message Sent!' : (<><FiSend /> Send Message</>)}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
