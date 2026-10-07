import React from 'react';
import { SparkleStar, SlenderStar, BarcodeGraphic, CrosshairMatrix, OrbitRing } from '../assets/vectors';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t-4 border-black bg-black text-[#f4f3ee] font-mono pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b-2 border-neutral-800 pb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center">
                <SparkleStar className="w-5 h-5 text-black" />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter uppercase font-['Syne'] text-white">
                THE CHUD LAB
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 font-['JetBrains_Mono'] leading-relaxed max-w-sm mb-4">
              A private digital forge and subculture archive for experimental systems, custom hardware controllers, web shaders, and random tech creations.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-neutral-900 border border-neutral-700 px-2 py-1 text-neutral-300">
                **NOT AN EXHAUSTIVE LIST
              </span>
              <span className="text-[10px] bg-neutral-900 border border-neutral-700 px-2 py-1 text-neutral-300">
                TCL-SYS-V0.1
              </span>
            </div>
          </div>

          {/* Quick Tracklist Nav */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 flex items-center gap-2">
              <SlenderStar className="w-3.5 h-3.5 text-white" />
              <span>CASSETTE TRACK INDEX</span>
            </h4>

            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-neutral-600">[01]</span>
                  <span>PROJECT WORKS (COMING SOON)</span>
                </a>
              </li>
              <li>
                <a href="#socials" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-neutral-600">[02]</span>
                  <span>SOCIAL TRANSMISSIONS & SIGNAL</span>
                </a>
              </li>
              <li>
                <a href="#experiments" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-neutral-600">[03]</span>
                  <span>LAB EXPERIMENTS & NOTES</span>
                </a>
              </li>
              <li>
                <a href="#signal" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-neutral-600">[04]</span>
                  <span>TRANSMIT SIGNAL / NOTIFICATIONS</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Barcode & Back To Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="w-full flex md:justify-end">
              <BarcodeGraphic code="TCL-CATALOGUE-2026" className="text-neutral-300" />
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 px-4 py-2 border border-neutral-700 bg-neutral-900 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase flex items-center gap-2"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Rights & Cursive Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© 2026 THE CHUD LAB. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="font-['Caveat'] text-lg text-neutral-300 tracking-wide">
            "the inevitability of code & sleepless nights"
          </div>

          <div className="flex items-center gap-2 text-[10px]">
            <span>STEREOPHONIC SOUND</span>
            <span>•</span>
            <span>DOLBY NOISE REDUCTION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
