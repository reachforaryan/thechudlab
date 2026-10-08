import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SparkleStar,
  SlenderStar,
  LilyIllustration,
  SpineFigures,
  ButterflyGraphic,
  BarcodeGraphic,
  OrbitRing,
  WireframeGlobe,
  CrosshairMatrix,
  CassetteMiniVisual
} from '../assets/vectors';
import { Terminal, ArrowDownRight, Radio, Code2, Sparkles, RefreshCw, Play, Volume2, Flame, RotateCcw } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function JCardHero({ currentSide, setCurrentSide }) {
  const [stampActive, setStampActive] = useState(false);
  const [stampCoords, setStampCoords] = useState(null);

  const handleFlip = (side) => {
    sounds.playTapeFlip();
    setCurrentSide(side);
  };

  const handleStampClick = (e) => {
    sounds.playStamp();
    setStampActive(true);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Top Graphic Banner with Orbit & Sparkles */}
      <div className="flex items-center justify-between border-b border-black pb-2 mb-6 text-xs text-neutral-600">
        <div className="flex items-center gap-2">
          <SparkleStar className="w-4 h-4 text-black" />
          <span className="font-bold tracking-wider text-black uppercase">
            CASSETTE SLEEVE ARCHIVE NO. TCL-001 // DUAL-SIDED PHYSICAL TAPE
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleFlip(currentSide === 'A' ? 'B' : 'A')}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-black text-white hover:bg-neutral-800 text-[10px] font-bold uppercase transition-transform active:scale-95 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
          >
            <RotateCcw className="w-3 h-3" />
            <span>FLIP TO SIDE {currentSide === 'A' ? 'B' : 'A'}</span>
          </button>
          <span className="text-[11px] font-mono hidden sm:inline">FREQUENCY: 108.4 MHz</span>
        </div>
      </div>

      {/* 3D Perspective Flip Container */}
      <div className="perspective-[1400px]">
        <motion.div
          animate={{ rotateY: currentSide === 'A' ? 0 : 180 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative transform-style-3d min-h-[580px]"
        >

          {/* =========================================================
              SIDE A (FRONT): THE CREATOR LAB & FLAGSHIP VIDEO FORGE
             ========================================================= */}
          <div
            className={`border-4 border-black bg-[#f4f3ee] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all duration-300 ${
              currentSide === 'A' ? 'block' : 'pointer-events-none'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Background Subtle Halftone Grid */}
            <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>

            {/* Red Verification Stamp Overlay (If Stamped) */}
            {stampActive && (
              <motion.div
                initial={{ scale: 2, opacity: 0, rotate: -25 }}
                animate={{ scale: 1, opacity: 1, rotate: -12 }}
                transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                className="absolute top-12 right-12 z-20 pointer-events-none border-4 border-red-600 bg-red-600/10 px-4 py-2 text-red-600 font-extrabold uppercase tracking-widest text-center shadow-lg"
              >
                <div className="text-xs">AUTHENTIC LAB SPECIMEN</div>
                <div className="text-lg leading-none font-['Syne']">VERIFIED CHUD ✓</div>
                <div className="text-[8px] font-mono tracking-normal">STAMP REF: #TCL-001-ALPHA</div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
              
              {/* LEFT SPINE (Cassette Foldout Spine) */}
              <div className="lg:col-span-4 bg-black text-[#f4f3ee] p-6 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black relative">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] tracking-wider block font-bold text-neutral-400 uppercase">
                        **NOT AN EXHAUSTIVE
                      </span>
                      <span className="text-[10px] tracking-wider block font-bold text-neutral-400 uppercase">
                        LIST
                      </span>
                    </div>
                    <SparkleStar className="w-5 h-5 text-white" />
                  </div>

                  {/* Spine Tracklist (Side A) */}
                  <div className="mt-6 space-y-2 text-xs">
                    <a href="#projects" onClick={() => sounds.playClick()} className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                      <span className="text-neutral-500 font-bold group-hover:text-white">[01]</span>
                      <span className="font-bold tracking-wider uppercase">PROJECT WORKS & VIDEOS</span>
                    </a>
                    <a href="#manifesto" onClick={() => sounds.playClick()} className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                      <span className="text-neutral-500 font-bold group-hover:text-white">[02]</span>
                      <span className="font-bold tracking-wider uppercase">ORIGIN & MANIFESTO</span>
                    </a>
                    <a href="#socials" onClick={() => sounds.playClick()} className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                      <span className="text-neutral-500 font-bold group-hover:text-white">[03]</span>
                      <span className="font-bold tracking-wider uppercase">COMMUNITY & CHANNELS</span>
                    </a>
                  </div>
                </div>

                {/* Center Spine Element: Side Indicator & Twin Wireframe Box */}
                <div className="my-8 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleFlip('A')}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full border border-white bg-white text-black flex items-center justify-center font-bold text-xs shadow-md">
                      A
                    </div>
                    <span className="text-[8px] mt-1 tracking-widest text-white font-bold">ACTIVE</span>
                  </button>

                  <div className="flex-1 flex justify-center">
                    <SpineFigures className="w-28 h-20 text-white" />
                  </div>

                  <button
                    onClick={() => handleFlip('B')}
                    className="flex flex-col items-center group cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <div className="w-7 h-7 rounded-full border border-white text-white flex items-center justify-center font-bold text-xs group-hover:bg-neutral-800">
                      B
                    </div>
                    <span className="text-[8px] mt-1 tracking-widest text-neutral-400">FLIP →</span>
                  </button>
                </div>

                {/* Bottom Spine Tracklist */}
                <div>
                  <div className="space-y-2 text-xs">
                    <a href="#experiments" onClick={() => sounds.playClick()} className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                      <span className="text-neutral-500 font-bold group-hover:text-white">[04]</span>
                      <span className="font-bold tracking-wider uppercase">LAB LOGS & BUILDS</span>
                    </a>
                    <a href="#signal" onClick={() => sounds.playClick()} className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                      <span className="text-neutral-500 font-bold group-hover:text-white">[05]</span>
                      <span className="font-bold tracking-wider uppercase">DROP NOTIFICATIONS</span>
                    </a>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                    <span>DOLBY HX PRO</span>
                    <span>SIDE A // ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* RIGHT MAIN PANEL (Cassette Face Art) */}
              <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between relative bg-[#f5f4ef]">
                
                {/* Top Metadata Header */}
                <div className="flex items-center justify-between border-b border-black/30 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-widest uppercase bg-black text-white px-2 py-0.5">
                      THE CHUD LAB // CREATOR FORGE
                    </span>
                    <span className="text-xs text-neutral-600 hidden sm:inline">
                      EST. 2026
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <SlenderStar className="w-5 h-5 text-black animate-spin-slow" />
                    <span className="text-[11px] font-bold">SIDE A ACTIVE</span>
                  </div>
                </div>

                {/* Central Graphic & Big Typography Section */}
                <div className="my-8 relative flex flex-col items-center text-center">
                  
                  {/* Lily Botanical Graphic Illustration */}
                  <div className="relative mb-6">
                    <LilyIllustration className="w-48 h-48 sm:w-60 sm:h-60 text-black mx-auto transform hover:scale-105 transition-transform duration-500" />
                    <div className="absolute -top-4 -right-8 opacity-70 hidden sm:block">
                      <OrbitRing className="w-28 h-16 text-black" />
                    </div>
                  </div>

                  {/* Headline: High-Contrast Editorial Serif */}
                  <div className="relative max-w-2xl mx-auto">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black font-['Instrument_Serif'] leading-[1.05] uppercase">
                      WHAT IS THE POINT OF
                    </h1>
                    
                    <div className="mt-1">
                      <span className="text-4xl sm:text-6xl md:text-7xl text-black font-['Caveat'] tracking-wide font-bold italic transform -rotate-2 inline-block">
                        The Chud Lab?
                      </span>
                    </div>
                  </div>

                  {/* Subtitle Statement */}
                  <div className="mt-6 max-w-lg mx-auto">
                    <div className="text-neutral-400 tracking-[0.3em] text-xs select-none">
                      ••••••••••••••••••••••••••••••••••••
                    </div>
                    
                    <p className="text-xs sm:text-sm font-['JetBrains_Mono'] tracking-wide uppercase text-neutral-800 font-medium mt-2">
                      THE INEVITABILITY OF CODE <span className="font-['Caveat'] text-lg font-bold lowercase italic text-black">that</span> ADULTHOOD CAN NEVER PREPARE ME FOR
                    </p>

                    <div className="text-neutral-400 tracking-[0.3em] text-xs select-none mt-2">
                      ••••••••••••••••••••••••••••••••••••
                    </div>
                  </div>

                  {/* Call-to-Actions */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="#projects"
                      onClick={() => sounds.playClick()}
                      className="px-6 py-2.5 bg-black text-[#f4f3ee] text-xs font-bold tracking-wider uppercase border border-black hover:bg-neutral-800 transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] flex items-center gap-2 group active:translate-y-0.5"
                    >
                      <span>EXPLORE PROJECTS & VIDEOS</span>
                      <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                    </a>

                    <button
                      onClick={() => handleFlip('B')}
                      className="px-5 py-2.5 bg-white text-black text-xs font-bold tracking-wider uppercase border-2 border-black hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 active:translate-y-0.5"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>FLIP CASSETTE (SIDE B)</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-6 border-t border-black/20 flex flex-wrap items-end justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <ButterflyGraphic className="w-12 h-12 text-black hover:scale-110 transition-transform cursor-pointer" />
                    <div className="text-[10px] leading-tight text-neutral-600">
                      <span className="font-bold text-black block uppercase">CREATIVE ENGINE</span>
                      <span>BUILDING IN PUBLIC</span>
                    </div>
                  </div>

                  <div className="mx-auto sm:mx-0">
                    <BarcodeGraphic code="TCL-LAB-2026-SIDE-A" />
                  </div>

                  <div className="flex items-center gap-4">
                    <CrosshairMatrix rows={2} cols={3} className="text-black" />
                    <button
                      onClick={handleStampClick}
                      className={`border border-black px-3 py-1 text-[10px] uppercase font-bold tracking-wider transition-all active:scale-95 ${
                        stampActive ? 'bg-red-600 text-white border-red-600' : 'bg-transparent text-black hover:bg-black hover:text-white'
                      }`}
                    >
                      {stampActive ? 'VERIFIED ✓' : 'STAMP CASSETTE'}
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* =========================================================
              SIDE B (BACK): THE CHUD VAULT & RAW UNFILTERED ARCHIVE
             ========================================================= */}
          <div
            className={`border-4 border-black bg-[#111114] text-[#f4f3ee] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] absolute inset-0 overflow-hidden transition-all duration-300 ${
              currentSide === 'B' ? 'block' : 'pointer-events-none'
            }`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Dark Halftone Overlay */}
            <div className="absolute inset-0 bg-halftone-light opacity-10 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] h-full">
              
              {/* LEFT SPINE (Side B Dark Inverted Spine) */}
              <div className="lg:col-span-4 bg-[#1a1a1f] p-6 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-neutral-800">
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-700 pb-2 mb-4">
                    <span className="text-[10px] tracking-wider font-bold text-amber-400 uppercase">
                      ✦ SIDE B: THE CHUD VAULT
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">EST. MIDNIGHT</span>
                  </div>

                  <h3 className="text-lg font-bold font-['Syne'] uppercase text-white mb-2">
                    PROCRASTINATION LOG
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-['JetBrains_Mono'] mb-4">
                    "I spent 12 weeks thinking about starting a YouTube channel, and 3 hours actually coding this prototype. The math is clear: just build."
                  </p>

                  <div className="space-y-2 text-xs border border-neutral-700 p-3 bg-black/50">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">BED-ROT HOURS:</span>
                      <span className="font-bold text-red-400">842 HRS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">CAFFEINE PEAK:</span>
                      <span className="font-bold text-amber-300">03:42 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">PROJECTS IN FLIGHT:</span>
                      <span className="font-bold text-emerald-400">4 READY</span>
                    </div>
                  </div>
                </div>

                {/* Flip Back Selector */}
                <div className="my-6 flex items-center justify-between border-t border-neutral-800 pt-4">
                  <button
                    onClick={() => handleFlip('A')}
                    className="flex items-center gap-2 text-xs font-bold bg-white text-black px-3 py-1.5 hover:bg-neutral-200 transition-all uppercase"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>RETURN TO SIDE A</span>
                  </button>
                  <span className="text-[10px] text-neutral-500 font-mono">B-SIDE ACTIVE</span>
                </div>
              </div>

              {/* RIGHT MAIN PANEL (Raw Midnight Archive) */}
              <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between bg-[#141417]">
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                      <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                        RAW UNRELEASED IDEAS & BRAINDUMPS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">TAPE: TCL-001-B</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold font-['Instrument_Serif'] uppercase text-white mb-4">
                    CANDID DISPATCHES FROM THE PROCRASTINATION WAR
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <div className="border border-neutral-800 bg-black/60 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-1">
                        <Flame className="w-3.5 h-3.5" />
                        <span>RULE #1: SHOW THE BUGS</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-['JetBrains_Mono']">
                        Nobody learns from pristine 5-minute tutorials where everything works on first try. I will leave the syntax errors and fried resistors in the YouTube cuts.
                      </p>
                    </div>

                    <div className="border border-neutral-800 bg-black/60 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>RULE #2: ZERO PAYWALLS</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-['JetBrains_Mono']">
                        Every single schematic, 3D mod STL, and line of code created on this channel will be open-sourced right here in the repository.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar on Side B */}
                <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <BarcodeGraphic code="TCL-VAULT-SIDE-B" className="text-neutral-400" />
                  </div>
                  <button
                    onClick={() => handleFlip('A')}
                    className="px-5 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] flex items-center gap-2"
                  >
                    <span>FLIP TO SIDE A (MAIN LAB)</span>
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
