import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import JCardHero from './components/JCardHero';
import TracklistNav from './components/TracklistNav';
import AboutManifesto from './components/AboutManifesto';
import ProjectShowcase from './components/ProjectShowcase';
import SocialsGrid from './components/SocialsGrid';
import LabExperiments from './components/LabExperiments';
import SignalSubscribe from './components/SignalSubscribe';
import Footer from './components/Footer';
import TextureOverlay from './components/TextureOverlay';
import ScrollRibbon from './components/ScrollRibbon';

export default function App() {
  const [currentSide, setCurrentSide] = useState('A');
  const [activeSection, setActiveSection] = useState('projects');
  const [crtEnabled, setCrtEnabled] = useState(false);

  // ScrollSpy to keep active track indicator synced with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['projects', 'manifesto', 'socials', 'experiments', 'signal'];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section animation variant
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-paper-canvas text-[#111111] relative selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Subtle Archival Corner Registration Accents */}
      <div className="fixed top-2 left-2 text-[10px] text-neutral-400 font-mono select-none pointer-events-none z-10 hidden sm:block opacity-40">
        + 01.A
      </div>
      <div className="fixed top-2 right-2 text-[10px] text-neutral-400 font-mono select-none pointer-events-none z-10 hidden sm:block opacity-40">
        TCL-SPEC +
      </div>
      <div className="fixed bottom-2 left-2 text-[10px] text-neutral-400 font-mono select-none pointer-events-none z-10 hidden sm:block opacity-40">
        + ARCHIVE
      </div>

      {/* Texture & Ambient Noise Overlay */}
      <TextureOverlay crtEnabled={crtEnabled} setCrtEnabled={setCrtEnabled} />

      {/* Kinetic Scroll Ribbon with Rotating Spools */}
      <ScrollRibbon />

      {/* Header & Marquee Ticker */}
      <Header
        currentSide={currentSide}
        setCurrentSide={setCurrentSide}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow space-y-6">
        {/* Cassette J-Card Signature Hero Unit with 3D Flip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <JCardHero
            currentSide={currentSide}
            setCurrentSide={setCurrentSide}
          />
        </motion.div>

        {/* Tracklist Jumper Navigation Bar */}
        <TracklistNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* [01] Project Works & Creator Hub */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <ProjectShowcase />
        </motion.div>

        {/* [02] The Chud Lab Manifesto / Origin Story */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <AboutManifesto />
        </motion.div>

        {/* [03] Socials & Community Channels */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <SocialsGrid />
        </motion.div>

        {/* [04] Lab Experiments & Dev Notes */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <LabExperiments />
        </motion.div>

        {/* [05] Drop Alerts & Community Pass */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <SignalSubscribe />
        </motion.div>
      </main>

      {/* Brutalist Footer */}
      <Footer />
    </div>
  );
}
