import React, { useState } from 'react';
import Header from './components/Header';
import JCardHero from './components/JCardHero';
import TracklistNav from './components/TracklistNav';
import ProjectShowcase from './components/ProjectShowcase';
import SocialsGrid from './components/SocialsGrid';
import LabExperiments from './components/LabExperiments';
import SignalSubscribe from './components/SignalSubscribe';
import Footer from './components/Footer';
import TextureOverlay from './components/TextureOverlay';

export default function App() {
  const [currentSide, setCurrentSide] = useState('A');
  const [activeSection, setActiveSection] = useState('projects');
  const [crtEnabled, setCrtEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-[#f2f1ec] text-[#111111] relative selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Texture & Ambient Noise Overlay */}
      <TextureOverlay crtEnabled={crtEnabled} setCrtEnabled={setCrtEnabled} />

      {/* Header & Marquee Ticker */}
      <Header
        currentSide={currentSide}
        setCurrentSide={setCurrentSide}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Cassette J-Card Signature Hero Unit */}
        <JCardHero
          currentSide={currentSide}
          setCurrentSide={setCurrentSide}
        />

        {/* Tracklist Jumper Navigation Bar */}
        <TracklistNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* [01] Project Works (Coming Soon) */}
        <ProjectShowcase />

        {/* [02] Socials & External Transmissions */}
        <SocialsGrid />

        {/* [03] Lab Experiments & Random Stuff */}
        <LabExperiments />

        {/* [04] Signal Notifications & Access Minting */}
        <SignalSubscribe />
      </main>

      {/* Brutalist Footer */}
      <Footer />
    </div>
  );
}
