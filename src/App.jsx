import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickCustomizer from './components/QuickCustomizer';
import './styles/index.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Helper for Nithish */}
      <QuickCustomizer />
    </div>
  );
}
