import React, { useState, useEffect, useRef } from 'react';
import { SparkleStar, SlenderStar, OrbitRing, WarpGrid, CrosshairMatrix } from '../assets/vectors';
import { Terminal, Cpu, Sparkles, RefreshCw, Code2, Wrench, Zap, Coffee, WrenchIcon } from 'lucide-react';

export default function LabExperiments() {
  const [activeTab, setActiveTab] = useState('notes');
  const [asciiInput, setAsciiInput] = useState('CHUD LAB');
  const [asciiOutput, setAsciiOutput] = useState('');
  const canvasRef = useRef(null);

  // Retro ASCII generator
  const generateAscii = (text) => {
    const lines = [];
    const clean = (text || 'TCL').toUpperCase().slice(0, 10);
    
    lines.push(`+----------------------------------------+`);
    lines.push(`| [TCL] EXPERIMENTAL ASCII MATRIX         |`);
    lines.push(`+----------------------------------------+`);
    lines.push(``);
    
    let banner = '';
    for (let char of clean) {
      banner += ` [${char}] `;
    }
    lines.push(`    ${banner}`);
    lines.push(``);
    lines.push(`    >> CHANNEL : THE CHUD LAB FORGE`);
    lines.push(`    >> STATUS  : LIVE EXPERIMENTATION`);
    lines.push(`    >> STAMP   : 0x7F9A_CHUD_2026`);
    lines.push(`+----------------------------------------+`);
    setAsciiOutput(lines.join('\n'));
  };

  useEffect(() => {
    generateAscii(asciiInput);
  }, [asciiInput]);

  // Interactive Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const particles = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.fillStyle = '#0f0f12';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = '#1e1e24';
      ctx.lineWidth = 1;
      const step = 25;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.strokeStyle = '#383842';
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          p.x -= dx * 0.02;
          p.y -= dy * 0.02;
        }

        ctx.fillStyle = '#f4f3ef';
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 65) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeTab]);

  const labNotes = [
    {
      id: 'note-01',
      date: 'OCT 08, 2026 // 03:14 AM',
      tag: 'TECH LOG',
      title: 'FIRST PROTOTYPE BUILD SETUP',
      body: 'Setting up the multi-angle recording rig for YouTube. Decided that rather than editing out all my mistakes and debug loops, I will leave the honest struggle in the video.',
      mood: '☕ MAXIMUM CAFFEINE',
    },
    {
      id: 'note-02',
      date: 'OCT 04, 2026 // 11:45 PM',
      tag: 'HARDWARE',
      title: 'CUSTOM MICRO-CONTROLLER TEST',
      body: 'Breadboarding dual rotary encoders and testing tactile response. Soldering in the middle of the night has a therapeutic quality that daylight just cannot replicate.',
      mood: '⚡ SOLDER FUMES',
    },
    {
      id: 'note-03',
      date: 'SEP 28, 2026 // 06:20 PM',
      tag: 'PHILOSOPHY',
      title: 'BEATING PROCRASTINATION BY SHIPPING',
      body: 'The only cure to overthinking a project for months is committing to publish the video and source repository. Perfectionism is the enemy of building.',
      mood: '🌀 HIGH FOCUS',
    },
  ];

  return (
    <section id="experiments" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-4 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
            <span>TRACK [04]</span>
            <span>•</span>
            <SparkleStar className="w-3.5 h-3.5 text-black" />
            <span>DEV NOTES & EXPERIMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black font-['Instrument_Serif'] uppercase mt-1 tracking-tight">
            LAB EXPERIMENTS & LOGS
          </h2>
        </div>

        <div className="text-right">
          <span className="font-['Caveat'] text-2xl font-bold text-neutral-800 italic block">
            "chaotic experiments made after midnight..."
          </span>
          <span className="text-[11px] text-neutral-500 font-mono uppercase">
            LIVE DISPATCHES FROM THE BENCH
          </span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-black pb-2">
        <button
          onClick={() => setActiveTab('notes')}
          className={`px-4 py-1.5 text-xs font-bold uppercase transition-all flex items-center gap-2 ${
            activeTab === 'notes'
              ? 'bg-black text-white'
              : 'border border-black bg-white hover:bg-neutral-100 text-black'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>CREATOR DEV LOGS ({labNotes.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('playground')}
          className={`px-4 py-1.5 text-xs font-bold uppercase transition-all flex items-center gap-2 ${
            activeTab === 'playground'
              ? 'bg-black text-white'
              : 'border border-black bg-white hover:bg-neutral-100 text-black'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>INTERACTIVE MATRIX SIMULATOR</span>
        </button>
      </div>

      {/* Tab 1: Lab Notes Grid */}
      {activeTab === 'notes' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labNotes.map((note) => (
            <div
              key={note.id}
              className="border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-y-[-2px] transition-transform relative group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-black/20 pb-2 mb-3">
                  <span className="text-[9px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-wider">
                    {note.tag}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    {note.date}
                  </span>
                </div>

                <h3 className="text-base font-extrabold font-['Syne'] uppercase text-black tracking-tight mb-2">
                  {note.title}
                </h3>
                
                <p className="text-xs text-neutral-700 leading-relaxed font-['JetBrains_Mono'] mb-4">
                  {note.body}
                </p>
              </div>

              <div className="pt-3 border-t border-black/20 flex items-center justify-between text-[10px] font-bold text-neutral-500">
                <span>MOOD: {note.mood}</span>
                <SparkleStar className="w-3.5 h-3.5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Interactive Matrix Canvas & ASCII Toy */}
      {activeTab === 'playground' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Interactive Particle Canvas */}
          <div className="lg:col-span-7 border-2 border-black bg-[#0f0f12] text-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2">
              <span className="text-xs font-bold text-neutral-400">
                [SIMULATOR] REAL-TIME NODE MESH (HOVER TO DEFLECT)
              </span>
              <span className="text-[10px] text-emerald-400">● 60 FPS</span>
            </div>
            
            <canvas
              ref={canvasRef}
              className="w-full h-64 cursor-crosshair border border-neutral-800"
            />

            <div className="mt-2 text-[10px] text-neutral-500 flex justify-between">
              <span>PHYSICS: VERLET INTEGRATION</span>
              <span>COORDINATE DISPLACEMENT ACTIVE</span>
            </div>
          </div>

          {/* ASCII Generator Toy */}
          <div className="lg:col-span-5 border-2 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-black/20 pb-2 mb-3">
                <span className="text-xs font-bold text-black uppercase">
                  ASCII TEXT MATRIX ENCODER
                </span>
                <SparkleStar className="w-3.5 h-3.5 text-black" />
              </div>

              <div className="mb-3">
                <label className="text-[10px] font-bold text-neutral-600 uppercase block mb-1">
                  TYPE INPUT TEXT:
                </label>
                <input
                  type="text"
                  maxLength={12}
                  value={asciiInput}
                  onChange={(e) => setAsciiInput(e.target.value)}
                  className="w-full border border-black p-1.5 text-xs font-mono uppercase bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <pre className="p-3 bg-black text-emerald-400 text-[11px] font-mono leading-tight overflow-x-auto border border-black">
                {asciiOutput}
              </pre>
            </div>

            <div className="mt-3 text-[10px] text-neutral-500 flex items-center justify-between">
              <span>OUTPUT: RAW MONO STREAM</span>
              <span>LIVE RENDER</span>
            </div>
          </div>

        </div>
      )}

      {/* Lab Arsenal & Tech Tools Stash */}
      <div className="mt-8 border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between border-b border-black/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <Wrench className="w-3.5 h-3.5 text-black" />
            <span className="text-xs font-bold uppercase tracking-wider text-black">
              LAB TOOLCHAIN & STACK
            </span>
          </div>
          <span className="text-[10px] text-neutral-500 uppercase">
            STRICTLY NO CORPORATE BLOAT
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {['REACT', 'TAILWIND CSS', 'YOUTUBE STUDIO', 'DAVINCI RESOLVE', 'TYPESCRIPT', 'PYTHON', 'RUST', 'RP2040', 'KICAD', 'OBS STUDIO', 'NEOVIM', 'GLSL SHADERS'].map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-bold px-3 py-1 bg-[#f4f3ee] text-black border border-black hover:bg-black hover:text-white transition-colors cursor-default"
            >
              ✦ {tool}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
