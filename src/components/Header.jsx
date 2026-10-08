import React, { useState, useEffect } from 'react';
import { SparkleStar, CassetteMiniVisual } from '../assets/vectors';
import { Radio, Disc3, Terminal, Menu, X, RotateCcw } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Header({ currentSide, setCurrentSide, activeSection, setActiveSection }) {
  const [timeStr, setTimeStr] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSideToggle = (side) => {
    sounds.playTapeFlip();
    setCurrentSide(side);
  };

  const handleNavClick = (id) => {
    sounds.playClick();
    setActiveSection(id);
  };

  const navLinks = [
    { href: '#projects', id: 'projects', number: '[01]', label: 'PROJECTS' },
    { href: '#manifesto', id: 'manifesto', number: '[02]', label: 'ABOUT' },
    { href: '#socials', id: 'socials', number: '[03]', label: 'COMMUNITY' },
    { href: '#experiments', id: 'experiments', number: '[04]', label: 'LAB LOGS' },
    { href: '#signal', id: 'signal', number: '[05]', label: 'NOTIFICATIONS' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#f2f1ec] text-[#111111] border-b-2 border-black font-mono transition-colors">
      {/* Top Ticker Bar */}
      <div className="bg-black text-[#f4f3ef] text-[10px] tracking-widest py-1 overflow-hidden border-b border-black flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            THE CHUD LAB // PROJECTS • YOUTUBE DEEP DIVES • REELS & SHORTS • OPEN DOCS
          </span>
          <span>✦ OVERCOMING PROCRASTINATION BY BUILDING IN PUBLIC ✦</span>
          <span>SIDE (A): CREATOR HUB & PROJECTS</span>
          <span>SIDE (B): THE CHUD VAULT & RAW DUMP</span>
          <span>[TCL-HUB-2026]</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            THE CHUD LAB // PROJECTS • YOUTUBE DEEP DIVES • REELS & SHORTS • OPEN DOCS
          </span>
          <span>✦ ALL TECH EXPERIMENTS IN DEVELOPMENT ✦</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" onClick={() => sounds.playClick()} className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-black text-white flex items-center justify-center relative transition-transform group-hover:rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
            <SparkleStar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-black border border-white"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight uppercase font-['Syne']">
                THE CHUD LAB
              </span>
              <span className="text-[9px] bg-black text-white px-1.5 py-0.5 tracking-widest font-mono">
                v0.1
              </span>
            </div>
            <p className="text-[10px] text-neutral-600 font-mono tracking-tight">
              PROJECTS • VIDEOS • REELS • DOCS
            </p>
          </div>
        </a>

        {/* Cassette Side A / Side B Working Physical Selector */}
        <div className="hidden sm:flex items-center border-2 border-black p-0.5 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <button
            onClick={() => handleSideToggle('A')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold transition-all active:scale-95 ${
              currentSide === 'A'
                ? 'bg-black text-white'
                : 'text-black hover:bg-neutral-100'
            }`}
          >
            <span className="text-[10px] opacity-80">(A)</span>
            <span>SIDE A // PROJECTS</span>
          </button>
          <button
            onClick={() => handleSideToggle('B')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold transition-all active:scale-95 ${
              currentSide === 'B'
                ? 'bg-black text-white'
                : 'text-black hover:bg-neutral-100'
            }`}
          >
            <span className="text-[10px] opacity-80">(B)</span>
            <span>SIDE B // VAULT</span>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-bold">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`hover:underline flex items-center gap-1 transition-all ${
                activeSection === link.id ? 'opacity-100 underline font-extrabold text-black scale-105' : 'opacity-75 hover:opacity-100'
              }`}
            >
              <span className="text-[10px] font-normal opacity-60">{link.number}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Clock & Status / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-3 text-[11px] opacity-75 font-mono">
            <CassetteMiniVisual isPlaying={true} />
            <span>{timeStr}</span>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black bg-[#f4f3ee] px-4 py-4 space-y-3">
          <div className="flex items-center border-2 border-black p-0.5 bg-white mb-3">
            <button
              onClick={() => handleSideToggle('A')}
              className={`flex-1 py-1.5 text-xs font-bold ${currentSide === 'A' ? 'bg-black text-white' : 'text-black'}`}
            >
              SIDE A // PROJECTS
            </button>
            <button
              onClick={() => handleSideToggle('B')}
              className={`flex-1 py-1.5 text-xs font-bold ${currentSide === 'B' ? 'bg-black text-white' : 'text-black'}`}
            >
              SIDE B // VAULT
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  handleNavClick(link.id);
                  setMobileMenuOpen(false);
                }}
                className="p-2 border-2 border-black bg-white text-xs font-bold flex items-center justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>{link.label}</span>
                <span className="text-neutral-500">{link.number}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
