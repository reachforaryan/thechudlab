import React, { useState } from 'react';
import { SparkleStar, SlenderStar, WireframeGlobe, OrbitRing, WarpGrid, BarcodeGraphic } from '../assets/vectors';
import { Cpu, Terminal, Sparkles, Layers, ArrowUpRight, BellRing, Check, Flame, Box, Code } from 'lucide-react';

export default function ProjectShowcase() {
  const [notifiedProjects, setNotifiedProjects] = useState({});
  const [activeModal, setActiveModal] = useState(null);
  const [emailInput, setEmailInput] = useState('');

  const projects = [
    {
      id: 'chud-os',
      code: 'PRJ-01',
      title: 'CHUD-OS // AGENTIC TERMINAL',
      category: 'SYSTEMS / AI TOOLS',
      status: 'HEAVY DEVELOPMENT',
      statusColor: 'bg-emerald-500',
      description: 'A keyboard-first workspace orchestrating autonomous agents, local LLMs, and shell pipelines inside a hyper-responsive retro TUI environment.',
      tags: ['REACT', 'RUST', 'TAILWIND', 'LOCAL-LLM'],
      stage: 'ALPHA V0.3',
      visualType: 'grid',
    },
    {
      id: 'kronos-shader',
      code: 'PRJ-02',
      title: 'KRONOS // WEBGPU SHADER ENGINE',
      category: 'GRAPHICS / CREATIVE CODING',
      status: 'PROTOTYPE V0.4',
      statusColor: 'bg-amber-500',
      description: 'Real-time generative glitch visuals, CRT post-processing passes, and retro audio-reactive shaders for web applications and digital art.',
      tags: ['WEBGPU', 'GLSL', 'THREE.JS', 'TYPESCRIPT'],
      stage: 'INTERNAL BENCHMARK',
      visualType: 'orbit',
    },
    {
      id: 'void-sync',
      code: 'PRJ-03',
      title: 'VOID-SYNC // DECENTRALIZED SIGNAL',
      category: 'NETWORKING / SECURITY',
      status: 'IN DESIGN & ARCHITECTURE',
      statusColor: 'bg-blue-500',
      description: 'Encrypted peer-to-peer file sharing and decentralized signaling protocol built for resilient, zero-knowledge offline-first mesh networks.',
      tags: ['WEBRTC', 'GO', 'P2P', 'CRYPTOGRAPHY'],
      stage: 'SPECIFICATION PHASE',
      visualType: 'globe',
    },
    {
      id: 'mecha-deck',
      code: 'PRJ-04',
      title: 'MECHA-DECK // HARDWARE CONTROLLER',
      category: 'HARDWARE / EMBEDDED',
      status: 'PCB IN FABRICATION',
      statusColor: 'bg-purple-500',
      description: 'Custom RP2040 open-hardware macro-pad and mini cyberdeck controller featuring dual rotary encoders and an ultra-fast monochrome e-ink display.',
      tags: ['RP2040', 'KICAD', 'C/C++', 'CIRCUITPY'],
      stage: 'HARDWARE PROTO #2',
      visualType: 'barcode',
    },
  ];

  const handleNotify = (e, project) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setNotifiedProjects(prev => ({ ...prev, [project.id]: true }));
    setActiveModal(null);
    setEmailInput('');
  };

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-4 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
            <span>TRACK [01]</span>
            <span>•</span>
            <SparkleStar className="w-3.5 h-3.5 text-black" />
            <span>PRIMARY REPOSITORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black font-['Syne'] uppercase mt-1 tracking-tight">
            PROJECT WORKS // COMING SOON
          </h2>
        </div>
        
        <div className="text-right">
          <span className="font-['Caveat'] text-2xl font-bold text-neutral-800 italic block">
            "currently cooking in the lab..."
          </span>
          <span className="text-[11px] text-neutral-500 font-mono uppercase">
            STATUS: 4 MODULES IN PIPELINE
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const isNotified = notifiedProjects[project.id];

          return (
            <div
              key={project.id}
              className="border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all relative overflow-hidden group"
            >
              {/* Corner Sparkle on Hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <SparkleStar className="w-4 h-4 text-black" />
              </div>

              <div>
                {/* Top Code & Status Bar */}
                <div className="flex items-center justify-between border-b border-black/20 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-black text-white px-2 py-0.5 tracking-wider">
                      {project.code}
                    </span>
                    <span className="text-[10px] text-neutral-600 font-bold uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                    <span className={`w-2 h-2 rounded-full ${project.statusColor} animate-pulse`}></span>
                    <span className="text-neutral-800 uppercase">{project.status}</span>
                  </div>
                </div>

                {/* Project Visual Area */}
                <div className="h-28 bg-[#121214] text-[#f4f3ee] border border-black mb-4 flex items-center justify-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-halftone-light opacity-15"></div>
                  
                  {project.visualType === 'grid' && (
                    <div className="flex items-center gap-4 z-10 w-full justify-between">
                      <Terminal className="w-10 h-10 text-emerald-400 opacity-90" />
                      <div className="font-mono text-[10px] leading-tight text-right text-emerald-300/80">
                        <div>&gt; chud_core.init()</div>
                        <div>&gt; memory_mapped: 100%</div>
                        <div>&gt; agents_online: [OK]</div>
                      </div>
                    </div>
                  )}

                  {project.visualType === 'orbit' && (
                    <div className="flex items-center justify-center z-10">
                      <OrbitRing className="w-36 h-20 text-amber-300 animate-spin-slow" />
                    </div>
                  )}

                  {project.visualType === 'globe' && (
                    <div className="flex items-center justify-center z-10">
                      <WireframeGlobe className="w-20 h-20 text-blue-300 opacity-90" />
                    </div>
                  )}

                  {project.visualType === 'barcode' && (
                    <div className="flex flex-col items-center justify-center z-10 text-purple-300">
                      <BarcodeGraphic code="HW-RP2040-REV2" className="text-purple-300" />
                    </div>
                  )}

                  <div className="absolute bottom-1 left-2 text-[9px] text-neutral-400 font-mono tracking-widest">
                    STAGE: {project.stage}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-extrabold text-black font-['Syne'] uppercase tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-['JetBrains_Mono'] mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold px-2 py-0.5 border border-black bg-neutral-100 text-black tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-black/20 flex items-center justify-between">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  EARLY ACCESS QUEUE
                </span>

                {isNotified ? (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 border border-emerald-500">
                    <Check className="w-3.5 h-3.5" />
                    <span>SIGNAL REGISTERED</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveModal(project)}
                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-black text-white hover:bg-neutral-800 transition-colors border border-black uppercase"
                  >
                    <BellRing className="w-3.5 h-3.5" />
                    <span>GET DROP ALERT</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Early Access Alert Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 font-mono">
          <div className="border-4 border-black bg-[#f4f3ee] max-w-md w-full p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
              <div className="flex items-center gap-2">
                <SparkleStar className="w-4 h-4 text-black" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  REGISTER FOR DROP NOTIFICATION
                </span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-6 h-6 border border-black bg-black text-white flex items-center justify-center text-xs font-bold hover:bg-neutral-800"
              >
                ✕
              </button>
            </div>

            <div className="mb-4">
              <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold uppercase">
                {activeModal.code}
              </span>
              <h4 className="text-lg font-bold font-['Syne'] uppercase text-black mt-1">
                {activeModal.title}
              </h4>
              <p className="text-xs text-neutral-600 mt-1">
                Enter your transmission email. You'll receive a ping the exact second this project goes live or opens beta slots.
              </p>
            </div>

            <form onSubmit={(e) => handleNotify(e, activeModal)} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-1">
                  COMMUNICATION ADDRESS:
                </label>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full border-2 border-black p-2 text-xs bg-white text-black font-mono focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-3 py-1.5 border border-black text-xs font-bold uppercase hover:bg-neutral-200"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-black text-white text-xs font-bold uppercase hover:bg-neutral-800 flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  CONFIRM TRANSMISSION
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
