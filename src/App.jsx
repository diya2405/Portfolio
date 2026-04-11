import { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode
            ? 'bg-hacker-950 text-green-100'
            : 'bg-white text-gray-900'
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GitHubStats />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
