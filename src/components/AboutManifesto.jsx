import React, { useState } from 'react';
import { SparkleStar, SlenderStar, ButterflyGraphic, BarcodeGraphic, CrosshairMatrix, YoutubeIcon, InstagramIcon, GithubIcon } from '../assets/vectors';
import { Video, FileCode, ArrowUpRight, Flame, HeartHandshake, Zap, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function AboutManifesto() {
  const [chudMeter, setChudMeter] = useState(85); // 85% locked in

  return (
    <section id="manifesto" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-4 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
            <span>INDEX [02]</span>
            <span>•</span>
            <SparkleStar className="w-3.5 h-3.5 text-black" />
            <span>ORIGIN STORY & BRAND IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black font-['Instrument_Serif'] uppercase mt-1 tracking-tight">
            WHY "THE CHUD LAB"?
          </h2>
        </div>

        <div className="text-right">
          <span className="font-['Caveat'] text-2xl font-bold text-neutral-800 italic block">
            "turning lazy hours into shipped builds..."
          </span>
          <span className="text-[11px] text-neutral-500 font-mono uppercase">
            LINER NOTE NO. TCL-002
          </span>
        </div>
      </div>

      {/* Asymmetric Cassette Insert Layout */}
      <div className="border-4 border-black bg-[#f4f3ee] p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Subtle halftone background */}
        <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* Left Column: Origin Story & Candid Procrastinator Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                  MEME ORIGIN // SELF-AWARE REVOLUTION
                </span>
                <span className="text-xs text-neutral-600 font-bold">
                  [THE ANTI-PROCRASTINATION MACHINE]
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-black font-['Syne'] uppercase leading-snug mb-4">
                "CHUD" = A CANDID REMINDER TO NEVER ROT IN BED AGAIN.
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-800 leading-relaxed font-['JetBrains_Mono']">
                <p>
                  In internet culture and Gen-Z slang, a <strong>"Chud"</strong> is someone who is lazy, procrastinating, overthinking every step, and wasting whole weekends doomscrolling instead of building.
                </p>
                <p>
                  For the longest time, that was my exact struggle. I would dream up elaborate hardware setups, WebGPU shaders, and apps in the shower—only to let them sit in my notes app untouched.
                </p>
                <p>
                  <strong>The Chud Lab</strong> is the self-aware, ironic antidote. By publishing everything in public—recording honest YouTube videos, posting raw Reels/Shorts, and open-sourcing every schematic and repository—there is nowhere left to hide.
                </p>
              </div>

              {/* Taped Sticky Note */}
              <div className="mt-6 relative bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
                {/* Masking tape on top of sticky note */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-amber-100/90 border border-neutral-400 rotate-[1deg] opacity-90 pointer-events-none shadow-xs"></div>
                <div className="font-['Caveat'] text-xl sm:text-2xl text-neutral-900 font-bold leading-tight">
                  &ldquo;If you&apos;re going to be a chud, at least build cool things and publish the source code.&rdquo;
                </div>
                <div className="text-[10px] text-neutral-500 font-mono text-right mt-2">
                  — batakkh // creator & lead tinkerer
                </div>
              </div>
            </div>

            {/* Interactive Chud ⇄ Locked-In Dial / Progress Bar */}
            <div className="mt-8 pt-6 border-t border-black/20">
              <div className="flex items-center justify-between text-xs font-bold uppercase mb-2">
                <span className="flex items-center gap-1.5 text-neutral-600">
                  <span>BED-ROT / PROCRASTINATION</span>
                </span>
                <span className="flex items-center gap-1.5 text-black">
                  <Flame className="w-3.5 h-3.5 text-red-600" />
                  <span>LOCKED-IN OUTPUT: {chudMeter}%</span>
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={chudMeter}
                onChange={(e) => {
                  sounds.playClick();
                  setChudMeter(e.target.value);
                }}
                className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-black"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>0% (Doomscrolling)</span>
                <span>50% (Thinking About Building)</span>
                <span>100% (Shipping 4K Videos & Code)</span>
              </div>
            </div>
          </div>

          {/* Right Column: The 3 Creator Pillars */}
          <div className="lg:col-span-5 bg-white p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
                <span className="text-xs font-bold text-black uppercase tracking-wider">
                  THE 3 LAB OUTPUT PILLARS
                </span>
                <SparkleStar className="w-4 h-4 text-black" />
              </div>

              <div className="space-y-4">
                {/* Pillar 1 */}
                <div className="bg-[#f4f3ee] p-3.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 transition-transform">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center">
                      <YoutubeIcon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-bold uppercase text-black font-['Syne']">
                      1. YOUTUBE DEEP DIVES
                    </h4>
                  </div>
                  <p className="text-[11px] text-neutral-700 leading-relaxed font-['JetBrains_Mono']">
                    Comprehensive video breakdowns. Architecture decisions, live hardware builds, debugging failures, and final working prototypes.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="bg-[#f4f3ee] p-3.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 transition-transform">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center">
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-bold uppercase text-black font-['Syne']">
                      2. REELS & SHORTS
                    </h4>
                  </div>
                  <p className="text-[11px] text-neutral-700 leading-relaxed font-['JetBrains_Mono']">
                    Fast visual demos, quick 30-second circuit tests, behind-the-scenes laboratory chaos, and dev humor.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="bg-[#f4f3ee] p-3.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 transition-transform">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                      <GithubIcon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-bold uppercase text-black font-['Syne']">
                      3. OPEN REPOS & DOCS
                    </h4>
                  </div>
                  <p className="text-[11px] text-neutral-700 leading-relaxed font-['JetBrains_Mono']">
                    100% open access. Full KiCad schematics, 3D CAD files, and source code repositories published free for all builders.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro footer inside card */}
            <div className="mt-6 pt-4 border-t border-black/20 flex items-center justify-between text-[10px] text-neutral-500">
              <BarcodeGraphic code="TCL-ORIGIN-MANIFESTO" />
              <CrosshairMatrix rows={1} cols={3} className="text-black" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
