import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-950 border-t border-gray-800 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="text-2xl font-bold gradient-text mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Diya Shah
        </motion.div>
        <p className="text-gray-400 text-sm mb-6">
          Software Developer | Flutter | AI | Full Stack
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {[
            { icon: FiGithub, href: 'https://github.com/diya2405' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/diya-shah' },
            { icon: FiMail, href: 'mailto:diyanamya@gmail.com' },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-2.5 rounded-full bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-6">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
            © {currentYear} Diya Shah. Made with <FiHeart className="text-red-500" size={14} />
            {' '}using React + Vite
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
