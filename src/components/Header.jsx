import React, { useState, useEffect } from 'react';
import { SparkleStar, CassetteMiniVisual } from '../assets/vectors';
import { Radio, Disc3, Terminal } from 'lucide-react';

export default function Header({ currentSide, setCurrentSide, activeSection, setActiveSection }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#f2f1ec] text-[#111111] border-b-2 border-black font-mono transition-colors">
      {/* Top Streetwear Marquee Ticker */}
      <div className="bg-black text-[#f4f3ef] text-[10px] tracking-widest py-1 overflow-hidden border-b border-black flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            THE CHUD LAB // DIGITAL LABORATORY & EXPERIMENTAL FORGE
          </span>
          <span>✦ ALL TECH EXPERIMENTS IN DEVELOPMENT ✦</span>
          <span>SIDE (A): MAIN LAB REPOSITORY</span>
          <span>SIDE (B): SUBCULTURE ARCHIVE & SOCIAL SIGNAL</span>
          <span>STATUS: COOKING 24/7</span>
          <span>[TCL-SYS-2026]</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            THE CHUD LAB // DIGITAL LABORATORY & EXPERIMENTAL FORGE
          </span>
          <span>✦ ALL TECH EXPERIMENTS IN DEVELOPMENT ✦</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-black text-white flex items-center justify-center relative group cursor-pointer">
            <SparkleStar className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-black border border-white"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tighter uppercase font-['Syne']">
                THE CHUD LAB
              </span>
              <span className="text-[9px] bg-black text-white px-1.5 py-0.5 tracking-widest font-mono">
                v0.1
              </span>
            </div>
            <p className="text-[10px] opacity-70 tracking-tight font-mono">
              TECH • EXPERIMENTS • RANDOM STUFF
            </p>
          </div>
        </div>

        {/* Cassette Side A / Side B Selector */}
        <div className="flex items-center border border-black p-0.5 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <button
            onClick={() => setCurrentSide('A')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold transition-all ${
              currentSide === 'A'
                ? 'bg-black text-white'
                : 'text-black hover:bg-neutral-100'
            }`}
          >
            <span className="text-[10px] opacity-80">(A)</span>
            <span>SIDE A // LAB</span>
          </button>
          <button
            onClick={() => setCurrentSide('B')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold transition-all ${
              currentSide === 'B'
                ? 'bg-black text-white'
                : 'text-black hover:bg-neutral-100'
            }`}
          >
            <span className="text-[10px] opacity-80">(B)</span>
            <span>SIDE B // ARCHIVE</span>
          </button>
        </div>

        {/* Navigation Quick Links */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-bold">
          <a
            href="#projects"
            onClick={() => setActiveSection('projects')}
            className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100"
          >
            <span className="text-[10px] font-normal opacity-60">[01]</span>
            PROJECTS
          </a>
          <a
            href="#socials"
            onClick={() => setActiveSection('socials')}
            className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100"
          >
            <span className="text-[10px] font-normal opacity-60">[02]</span>
            SOCIALS
          </a>
          <a
            href="#experiments"
            onClick={() => setActiveSection('experiments')}
            className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100"
          >
            <span className="text-[10px] font-normal opacity-60">[03]</span>
            EXPERIMENTS
          </a>
          <a
            href="#signal"
            onClick={() => setActiveSection('signal')}
            className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100"
          >
            <span className="text-[10px] font-normal opacity-60">[04]</span>
            TRANSMIT
          </a>
        </nav>

        {/* Status & Clock */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] opacity-75 font-mono">
          <CassetteMiniVisual isPlaying={true} />
          <span>{timeStr}</span>
        </div>
      </div>
    </header>
  );
}
