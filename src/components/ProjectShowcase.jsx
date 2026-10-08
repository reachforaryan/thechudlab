import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SparkleStar,
  SlenderStar,
  WireframeGlobe,
  OrbitRing,
  BarcodeGraphic,
  YoutubeIcon,
  InstagramIcon,
  GithubIcon,
  CrosshairMatrix
} from '../assets/vectors';
import {
  Play,
  FileText,
  BellRing,
  Check,
  ExternalLink,
  Video,
  Layers,
  Sparkles,
  Info,
  Clock,
  Share2,
  Tv,
  Film,
  Flame,
  Volume2
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [notifiedProjects, setNotifiedProjects] = useState({});
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeAlertModal, setActiveAlertModal] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [activeChapter, setActiveChapter] = useState(0);

  // Structured Creator Hub Placeholders
  const projects = [
    {
      id: 'proj-01',
      code: 'FLAGSHIP-01',
      featured: true,
      title: '[PROJECT TITLE: FLAGSHIP TECH & CODE ENGINE]',
      subtitle: 'MAIN YOUTUBE VIDEO BUILD + DOCUMENTATION SUITE',
      category: 'SYSTEMS / CREATIVE TECH',
      status: 'RECORDING YOUTUBE VIDEO',
      statusColor: 'bg-red-500 text-white',
      description: 'Your primary build walkthrough. Covers architectural blueprints, raw debugging sessions, performance benchmarks, and full repository documentation.',
      tags: ['[FRAMEWORK]', '[SOURCE REPO]', '[SCHEMATIC]', '[4K VIDEO]'],
      hasYoutube: true,
      youtubeDuration: '16:40 min',
      hasReel: true,
      reelCount: '3 Reels/Shorts',
      hasDocs: true,
      docsPages: 'Full Step-by-Step Specs',
      githubUrl: 'https://github.com',
      chapters: [
        { time: '00:00', title: 'The Problem & Initial Overthinking' },
        { time: '03:15', title: 'System Blueprint & Architecture' },
        { time: '08:40', title: 'Live Hardware & Code Assembly' },
        { time: '13:20', title: 'Debugging Failure & Final Breakthrough' },
      ],
      placeholderNote: 'Slot for your main YouTube video link & interactive embed',
    },
    {
      id: 'proj-02',
      code: 'HW-MOD-02',
      featured: false,
      title: '[PROJECT TITLE: HARDWARE CONTROLLER / PCB]',
      subtitle: 'EMBEDDED MICRO-CONTROLLER & 3D CHASSIS',
      category: 'HARDWARE & EMBEDDED',
      status: 'PROTOTYPING ON BREADBOARD',
      statusColor: 'bg-blue-500 text-white',
      description: 'Custom microcontroller build, PCB fabrication walkthrough, CAD 3D casing, and low-latency C++ firmware.',
      tags: ['[RP2040]', '[KICAD]', '[C/C++]', '[CIRCUITS]'],
      hasYoutube: true,
      youtubeDuration: '09:20 min',
      hasReel: true,
      reelCount: '2 Shorts',
      hasDocs: true,
      docsPages: 'Schematics + Gerbers',
      githubUrl: 'https://github.com',
      placeholderNote: 'Hardware schematics & teardown video slot',
      tapeAngle: 'rotate-[-1deg]',
    },
    {
      id: 'proj-03',
      code: 'TOOL-03',
      featured: false,
      title: '[PROJECT TITLE: WEBGPU CREATIVE SHADER]',
      subtitle: 'REAL-TIME GENERATIVE VISUAL TOOL',
      category: 'GRAPHICS & TOOLS',
      status: 'WRITING DOCUMENTATION',
      statusColor: 'bg-emerald-500 text-white',
      description: 'Interactive shader experiments, post-processing CRT passes, and developer tools ready for open-source use.',
      tags: ['[WEBGPU]', '[GLSL]', '[REACT]', '[NPM PKG]'],
      hasYoutube: true,
      youtubeDuration: '11:15 min',
      hasReel: false,
      reelCount: '1 Reel',
      hasDocs: true,
      docsPages: 'Interactive API Docs',
      githubUrl: 'https://github.com',
      placeholderNote: 'Interactive demo playground & code repo',
      tapeAngle: 'rotate-[1.2deg]',
    },
    {
      id: 'proj-04',
      code: 'CLI-04',
      featured: false,
      title: '[PROJECT TITLE: AGENTIC TERMINAL PIPELINE]',
      subtitle: 'AUTOMATION & SHELL SCRIPTS',
      category: 'AI & AUTOMATION',
      status: 'CONCEPT BENCHMARK',
      statusColor: 'bg-purple-500 text-white',
      description: 'Local LLM orchestrator, keyboard-first developer terminal interface, and zero-distraction tooling.',
      tags: ['[RUST/PYTHON]', '[LOCAL LLM]', '[TUI]', '[DEV LOG]'],
      hasYoutube: false,
      youtubeDuration: 'Drop Soon',
      hasReel: true,
      reelCount: '2 Reels',
      hasDocs: true,
      docsPages: 'Terminal Specs',
      githubUrl: 'https://github.com',
      placeholderNote: 'Dev log & video dispatch slot',
      tapeAngle: 'rotate-[-0.8deg]',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'youtube') return p.hasYoutube;
    if (activeFilter === 'reels') return p.hasReel;
    if (activeFilter === 'docs') return p.hasDocs;
    return true;
  });

  const flagship = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const secondaryProjects = filteredProjects.filter((p) => p.id !== flagship?.id);

  const handleNotifySubmit = (e, project) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    sounds.playStamp();
    setNotifiedProjects((prev) => ({ ...prev, [project.id]: true }));
    setActiveAlertModal(null);
    setEmailInput('');
  };

  const handleFilterClick = (key) => {
    sounds.playClick();
    setActiveFilter(key);
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
            <span>PRIMARY CREATOR HUB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black font-['Instrument_Serif'] uppercase mt-1 tracking-tight">
            PROJECT WORKS & VIDEOS
          </h2>
        </div>

        <div className="text-right">
          <span className="font-['Caveat'] text-2xl font-bold text-neutral-800 italic block">
            "currently cooking in the lab..."
          </span>
          <span className="text-[11px] text-neutral-500 font-mono uppercase">
            {projects.length} CREATOR SLOTS READY FOR DROPS
          </span>
        </div>
      </div>

      {/* Filter Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { key: 'all', label: 'ALL BUILDS' },
            { key: 'youtube', label: 'YOUTUBE VIDEOS' },
            { key: 'reels', label: 'REELS & SHORTS' },
            { key: 'docs', label: 'OPEN REPOS & DOCS' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleFilterClick(tab.key)}
              className={`px-3 py-1.5 text-xs font-bold uppercase transition-all active:scale-95 ${
                activeFilter === tab.key
                  ? 'bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]'
                  : 'bg-white text-black border-2 border-black hover:bg-neutral-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs bg-white border border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Info className="w-3.5 h-3.5 text-black" />
          <span className="text-neutral-700 font-bold">
            Interactive Deck: Click video slots to preview player
          </span>
        </div>
      </div>

      {/* =========================================================
          ASYMMETRIC LAYOUT:
          1. Featured Flagship Video Cassette Deck (Full Width)
          2. Staggered Asymmetrical Secondary Cards
         ========================================================= */}
      
      {/* 1. Flagship Featured Media Deck */}
      {flagship && (
        <div className="mb-8 border-4 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          {/* Subtle background halftone */}
          <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>

          {/* Top Status Header */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-3 mb-6 gap-3">
            <div className="flex items-center gap-3">
              <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                FLAGSHIP DROP #01
              </span>
              <span className="text-xs font-bold uppercase text-neutral-600">
                {flagship.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 border border-black uppercase ${flagship.statusColor}`}>
                ● {flagship.status}
              </span>
            </div>
          </div>

          {/* Main Flagship Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Video Player Scrubber Shelf */}
            <div className="lg:col-span-7">
              <div
                onClick={() => {
                  sounds.playClick();
                  setActiveVideoModal(flagship);
                }}
                className="cursor-pointer bg-[#0f0f12] text-white border-3 border-black p-4 relative group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-halftone-light opacity-15 pointer-events-none"></div>

                {/* Video HUD Top */}
                <div className="flex items-center justify-between z-10 relative mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 uppercase flex items-center gap-1">
                      <YoutubeIcon className="w-3 h-3" />
                      YOUTUBE DEEP DIVE
                    </span>
                    <span className="bg-pink-600 text-white text-[9px] font-bold px-2 py-0.5 uppercase flex items-center gap-1">
                      <InstagramIcon className="w-3 h-3" />
                      REELS
                    </span>
                  </div>
                  <span className="text-[10px] bg-black/80 border border-neutral-700 px-2 py-0.5 text-neutral-300 font-mono">
                    {flagship.youtubeDuration}
                  </span>
                </div>

                {/* Central Play Button */}
                <div className="py-12 flex flex-col items-center justify-center text-center z-10 relative">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-3">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Syne']">
                    CLICK TO PREVIEW VIDEO PLAYER & CHAPTERS
                  </h4>
                  <span className="text-[10px] text-neutral-400 mt-1">
                    {flagship.placeholderNote}
                  </span>
                </div>

                {/* Scrubber Bar at Bottom */}
                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400 z-10 relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span>READY FOR VIDEO EMBED</span>
                  </div>
                  <span className="underline group-hover:text-white">OPEN CRT MODAL →</span>
                </div>
              </div>
            </div>

            {/* Right: Flagship Specs & Links */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black font-['Syne'] uppercase tracking-tight mb-2">
                  {flagship.title}
                </h3>
                <div className="text-xs font-bold text-neutral-600 uppercase mb-3">
                  {flagship.subtitle}
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-['JetBrains_Mono'] mb-4">
                  {flagship.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {flagship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold px-2.5 py-1 border border-black bg-[#f4f3ee] text-black tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-black/20">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveVideoModal(flagship);
                    }}
                    className="p-2.5 border-2 border-black bg-[#f4f3ee] hover:bg-black hover:text-white text-black text-xs font-bold uppercase transition-colors flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>[READ DOCS]</span>
                  </button>

                  <a
                    href={flagship.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="p-2.5 border-2 border-black bg-[#f4f3ee] hover:bg-black hover:text-white text-black text-xs font-bold uppercase transition-colors flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>[VIEW REPO]</span>
                  </a>
                </div>

                {notifiedProjects[flagship.id] ? (
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 p-2 border-2 border-emerald-600">
                    <Check className="w-3.5 h-3.5" />
                    <span>REGISTERED FOR DROP NOTIFICATION</span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveAlertModal(flagship);
                    }}
                    className="w-full py-2.5 bg-black text-white text-xs font-bold uppercase hover:bg-neutral-800 transition-colors border-2 border-black flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] active:scale-95"
                  >
                    <BellRing className="w-3.5 h-3.5" />
                    <span>GET EARLY VIDEO DROP ALERT</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. Secondary Projects - Asymmetric Taped Sticky Deck */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {secondaryProjects.map((project) => {
          const isNotified = notifiedProjects[project.id];

          return (
            <div
              key={project.id}
              className={`border-3 border-black bg-white p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between relative group ${project.tapeAngle || ''}`}
            >
              {/* Masking Tape Graphic at top corner */}
              <div className="absolute -top-3 left-6 w-16 h-5 bg-amber-100/90 border border-neutral-400 rotate-[-4deg] opacity-80 pointer-events-none shadow-xs"></div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-black/20 pb-2 mb-3">
                  <span className="text-[10px] font-bold bg-black text-white px-2 py-0.5 uppercase">
                    {project.code}
                  </span>
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 border border-black uppercase ${project.statusColor}`}>
                    ● {project.status}
                  </span>
                </div>

                {/* Media preview button */}
                <div
                  onClick={() => {
                    sounds.playClick();
                    setActiveVideoModal(project);
                  }}
                  className="cursor-pointer h-28 bg-[#18181b] text-white p-3 border-2 border-black mb-3 flex flex-col justify-between relative group/slot overflow-hidden"
                >
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-neutral-400">{project.category}</span>
                    <span className="text-amber-300 font-bold font-mono">{project.youtubeDuration}</span>
                  </div>

                  <div className="flex items-center justify-center my-auto">
                    <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center group-hover/slot:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="text-[8px] text-neutral-400 font-mono flex justify-between">
                    <span>{project.placeholderNote}</span>
                    <span className="underline">VIEW →</span>
                  </div>
                </div>

                <h4 className="text-base font-bold font-['Syne'] uppercase text-black mb-1 leading-tight">
                  {project.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-['JetBrains_Mono'] mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[8px] font-bold px-1.5 py-0.5 bg-[#f4f3ee] border border-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-black/20">
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveVideoModal(project);
                    }}
                    className="flex-1 py-1.5 border border-black bg-[#f4f3ee] hover:bg-black hover:text-white text-black text-[10px] font-bold uppercase transition-colors flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3 h-3" />
                    <span>DOCS</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex-1 py-1.5 border border-black bg-[#f4f3ee] hover:bg-black hover:text-white text-black text-[10px] font-bold uppercase transition-colors flex items-center justify-center gap-1"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>CODE</span>
                  </a>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveAlertModal(project);
                    }}
                    className="p-1.5 bg-black text-white hover:bg-neutral-800 border border-black"
                    title="Get Drop Alert"
                  >
                    <BellRing className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Interactive Video & Chapters Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-mono">
          <div className="border-4 border-black bg-[#f4f3ee] max-w-3xl w-full p-6 sm:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative max-h-[92vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
              <div className="flex items-center gap-2">
                <SparkleStar className="w-4 h-4 text-black" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  YOUTUBE VIDEO PLAYER & DOCUMENTATION VIEWER
                </span>
              </div>
              <button
                onClick={() => {
                  sounds.playClick();
                  setActiveVideoModal(null);
                }}
                className="w-7 h-7 border-2 border-black bg-black text-white flex items-center justify-center text-xs font-bold hover:bg-neutral-800"
              >
                ✕
              </button>
            </div>

            {/* Simulated Video Player Screen */}
            <div className="aspect-video bg-black border-3 border-black mb-4 flex flex-col justify-between p-6 text-white relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5">
                  ● 4K VIDEO EMBED READY
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  {activeVideoModal.youtubeDuration}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center my-auto z-10">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-3 shadow-lg">
                  <Play className="w-7 h-7 fill-white ml-1 text-white" />
                </div>
                <h4 className="text-base font-bold font-['Syne'] uppercase">
                  {activeVideoModal.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 max-w-md">
                  When you upload the video on YouTube, replace this iframe with your embed ID.
                </p>
              </div>

              {/* Progress Scrubber Bar */}
              <div className="z-10 pt-2 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>00:00 / {activeVideoModal.youtubeDuration}</span>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  <span>STEREO</span>
                </div>
              </div>
            </div>

            {/* Chapter Selection (if available) */}
            {activeVideoModal.chapters && (
              <div className="border-2 border-black bg-white p-4 mb-4">
                <div className="text-xs font-bold uppercase text-black mb-2 flex items-center justify-between">
                  <span>VIDEO TIMELINE CHAPTERS:</span>
                  <span className="text-[10px] text-neutral-500 font-mono">CLICK TO JUMP</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeVideoModal.chapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        sounds.playClick();
                        setActiveChapter(idx);
                      }}
                      className={`p-2 border text-left text-xs font-mono flex items-center justify-between transition-colors ${
                        activeChapter === idx
                          ? 'border-black bg-black text-white'
                          : 'border-neutral-300 hover:border-black bg-neutral-50'
                      }`}
                    >
                      <span className="truncate">{ch.title}</span>
                      <span className="font-bold ml-2">{ch.time}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Documentation Overview */}
            <div className="border-2 border-black bg-white p-4 mb-4">
              <span className="text-xs font-bold uppercase text-black block mb-1">
                PROJECT REPOSITORY & DOCUMENTATION:
              </span>
              <p className="text-xs text-neutral-700 leading-relaxed font-['JetBrains_Mono']">
                {activeVideoModal.description}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-[10px] text-neutral-500 uppercase">
                THE CHUD LAB CREATOR HUB
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setActiveVideoModal(null);
                  }}
                  className="px-4 py-2 border-2 border-black bg-white hover:bg-neutral-100 text-xs font-bold uppercase"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setActiveAlertModal(activeVideoModal);
                    setActiveVideoModal(null);
                  }}
                  className="px-4 py-2 bg-black text-white text-xs font-bold uppercase hover:bg-neutral-800 flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                >
                  <BellRing className="w-3.5 h-3.5" />
                  <span>NOTIFY ON DROP</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Early Drop Notification Alert Modal */}
      {activeAlertModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-mono">
          <div className="border-4 border-black bg-[#f4f3ee] max-w-md w-full p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
              <div className="flex items-center gap-2">
                <SparkleStar className="w-4 h-4 text-black" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  REGISTER FOR PROJECT DROP
                </span>
              </div>
              <button
                onClick={() => {
                  sounds.playClick();
                  setActiveAlertModal(null);
                }}
                className="w-6 h-6 border-2 border-black bg-black text-white flex items-center justify-center text-xs font-bold hover:bg-neutral-800"
              >
                ✕
              </button>
            </div>

            <div className="mb-4">
              <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold uppercase">
                {activeAlertModal.code}
              </span>
              <h4 className="text-lg font-bold font-['Syne'] uppercase text-black mt-1">
                {activeAlertModal.title}
              </h4>
              <p className="text-xs text-neutral-600 mt-1">
                Enter your email address to get notified when this video, documentation, and repository are officially uploaded.
              </p>
            </div>

            <form onSubmit={(e) => handleNotifySubmit(e, activeAlertModal)} className="space-y-3">
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
                  onClick={() => {
                    sounds.playClick();
                    setActiveAlertModal(null);
                  }}
                  className="px-3 py-1.5 border-2 border-black text-xs font-bold uppercase hover:bg-neutral-200"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-black text-white text-xs font-bold uppercase hover:bg-neutral-800 flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                >
                  <Check className="w-3.5 h-3.5" />
                  CONFIRM NOTIFICATION
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
