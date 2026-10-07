import React, { useState } from 'react';
import {
  SparkleStar,
  SlenderStar,
  LilyIllustration,
  SpineFigures,
  ButterflyGraphic,
  BarcodeGraphic,
  OrbitRing,
  WireframeGlobe,
  CrosshairMatrix
} from '../assets/vectors';
import { Terminal, ArrowDownRight, Radio, Code2, Sparkles, ExternalLink } from 'lucide-react';

export default function JCardHero({ currentSide, setCurrentSide }) {
  const [stampActive, setStampActive] = useState(false);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Top Graphic Banner with Orbit & Sparkles */}
      <div className="flex items-center justify-between border-b border-black pb-2 mb-6 text-xs text-neutral-600">
        <div className="flex items-center gap-2">
          <SparkleStar className="w-4 h-4 text-black" />
          <span className="font-bold tracking-wider text-black uppercase">
            CASSETTE SLEEVE ARCHIVE NO. TCL-001
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-[11px] font-mono">FREQUENCY: 108.4 MHz</span>
          <span className="text-[11px] font-mono">EDITION: 01 / ∞</span>
        </div>
      </div>

      {/* Main J-Card Cassette Frame Container */}
      <div className="border-4 border-black bg-[#f4f3ee] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all duration-300">
        
        {/* Background Subtle Halftone Grid */}
        <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          
          {/* =========================================
              LEFT SPINE (Cassette Foldout Spine)
              Inspired directly by Reference Images 0 & 1
             ========================================= */}
          <div className="lg:col-span-4 bg-black text-[#f4f3ee] p-6 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black relative">
            
            {/* Top Spine Info */}
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
                <a href="#projects" className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                  <span className="text-neutral-500 font-bold group-hover:text-white">[01]</span>
                  <span className="font-bold tracking-wider uppercase">SYSTEM ENGINES & APPS</span>
                </a>
                <a href="#projects" className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                  <span className="text-neutral-500 font-bold group-hover:text-white">[02]</span>
                  <span className="font-bold tracking-wider uppercase">REVERSE ENGINEERING</span>
                </a>
                <a href="#experiments" className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                  <span className="text-neutral-500 font-bold group-hover:text-white">[03]</span>
                  <span className="font-bold tracking-wider uppercase">EXPERIMENTAL GRAPHICS</span>
                </a>
              </div>
            </div>

            {/* Center Spine Element: Side Indicator & Twin Wireframe Box */}
            <div className="my-8 flex items-center justify-between gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full border border-white flex items-center justify-center font-bold text-xs ${currentSide === 'A' ? 'bg-white text-black' : 'text-white'}`}>
                  A
                </div>
                <span className="text-[8px] mt-1 tracking-widest text-neutral-400">LAB</span>
              </div>

              {/* Surreal Twin Figures Box (From Ref 0) */}
              <div className="flex-1 flex justify-center">
                <SpineFigures className="w-28 h-20 text-white" />
              </div>

              <div className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full border border-white flex items-center justify-center font-bold text-xs ${currentSide === 'B' ? 'bg-white text-black' : 'text-white'}`}>
                  B
                </div>
                <span className="text-[8px] mt-1 tracking-widest text-neutral-400">ARCHIVE</span>
              </div>
            </div>

            {/* Bottom Spine Tracklist (Side B) */}
            <div>
              <div className="space-y-2 text-xs">
                <a href="#experiments" className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                  <span className="text-neutral-500 font-bold group-hover:text-white">[04]</span>
                  <span className="font-bold tracking-wider uppercase">HARDWARE & EMBEDDED</span>
                </a>
                <a href="#socials" className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                  <span className="text-neutral-500 font-bold group-hover:text-white">[05]</span>
                  <span className="font-bold tracking-wider uppercase">SOCIAL TRANSMISSIONS</span>
                </a>
                <a href="#experiments" className="flex items-start gap-2 hover:text-neutral-300 transition-colors group">
                  <span className="text-neutral-500 font-bold group-hover:text-white">[06]</span>
                  <span className="font-bold tracking-wider uppercase">RANDOM BRAIN ROT</span>
                </a>
              </div>

              {/* Spine Serial Stamp */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                <span>STEREO / DOLBY HX PRO</span>
                <span>TCL-CORE-V1</span>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT MAIN PANEL (Cassette Face Art)
              Editorial Serif, Lily Graphic, Script Annotations
             ========================================= */}
          <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between relative bg-[#f5f4ef]">
            
            {/* Top Metadata Header */}
            <div className="flex items-center justify-between border-b border-black/30 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest uppercase bg-black text-white px-2 py-0.5">
                  THE CHUD LAB // INCUBATOR
                </span>
                <span className="text-xs text-neutral-600 hidden sm:inline">
                  EST. 2026
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <SlenderStar className="w-5 h-5 text-black animate-spin-slow" />
                <span className="text-[11px] font-bold">SIDE {currentSide} ACTIVE</span>
              </div>
            </div>

            {/* Central Graphic & Big Typography Section */}
            <div className="my-8 relative flex flex-col items-center text-center">
              
              {/* Lily Botanical Graphic Illustration (From Ref 0 & 1) */}
              <div className="relative mb-6">
                <LilyIllustration className="w-48 h-48 sm:w-60 sm:h-60 text-black mx-auto transform hover:scale-105 transition-transform duration-500" />
                
                {/* Y2K Orbit Ring Overlay */}
                <div className="absolute -top-4 -right-8 opacity-70 hidden sm:block">
                  <OrbitRing className="w-28 h-16 text-black" />
                </div>
              </div>

              {/* Headline: High-Contrast Editorial Serif (Ref 0 style) */}
              <div className="relative max-w-2xl mx-auto">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black font-['Instrument_Serif'] leading-[1.05] uppercase">
                  WHAT IS THE POINT OF
                </h1>
                
                {/* Handwritten Cursive Script Overlay */}
                <div className="mt-1">
                  <span className="text-4xl sm:text-6xl md:text-7xl text-black font-['Caveat'] tracking-wide font-bold italic transform -rotate-2 inline-block">
                    The Chud Lab?
                  </span>
                </div>
              </div>

              {/* Dotted Separator and Subtitle Statement */}
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

              {/* Call-to-Actions & Quick Actions */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#projects"
                  className="px-6 py-2.5 bg-black text-[#f4f3ee] text-xs font-bold tracking-wider uppercase border border-black hover:bg-neutral-800 transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] flex items-center gap-2 group"
                >
                  <span>BROWSE UPCOMING PROJECTS</span>
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#signal"
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold tracking-wider uppercase border-2 border-black hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
                >
                  <Radio className="w-4 h-4" />
                  <span>TRANSMIT SIGNAL</span>
                </a>
              </div>
            </div>

            {/* Bottom Row: Butterfly Graphic, Streetwear Barcode, Coordinates */}
            <div className="pt-6 border-t border-black/20 flex flex-wrap items-end justify-between gap-4">
              
              {/* Engraved Butterfly with Sparkle (Ref 0 bottom) */}
              <div className="flex items-center gap-3">
                <ButterflyGraphic className="w-12 h-12 text-black hover:scale-110 transition-transform cursor-pointer" />
                <div className="text-[10px] leading-tight text-neutral-600">
                  <span className="font-bold text-black block uppercase">CHAOS ENGINE</span>
                  <span>PURE TECH PASSION</span>
                </div>
              </div>

              {/* Streetwear Barcode Graphic */}
              <div className="mx-auto sm:mx-0">
                <BarcodeGraphic code="TCL-LAB-2026-X7" />
              </div>

              {/* Crosshair Matrix & Stamp Button */}
              <div className="flex items-center gap-4">
                <CrosshairMatrix rows={2} cols={3} className="text-black" />
                <button
                  onClick={() => setStampActive(!stampActive)}
                  className={`border border-black px-2 py-1 text-[10px] uppercase font-bold tracking-wider transition-all ${
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
    </section>
  );
}
