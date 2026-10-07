import React from 'react';
import { SparkleStar, SlenderStar } from '../assets/vectors';
import { Layers, Terminal, Share2, Radio, Flame } from 'lucide-react';

export default function TracklistNav({ activeSection, setActiveSection }) {
  const tracks = [
    { id: 'projects', number: '[01]', label: 'PROJECT WORKS', icon: Layers, note: 'COOKING IN LAB' },
    { id: 'socials', number: '[02]', label: 'SOCIAL TRANSMISSIONS', icon: Share2, note: 'SIGNALS & LINKS' },
    { id: 'experiments', number: '[03]', label: 'LAB EXPERIMENTS', icon: Terminal, note: 'RANDOM TECH BUILDS' },
    { id: 'signal', number: '[04]', label: 'SIGNAL NOTIFY', icon: Radio, note: 'DROP ALERTS' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 font-mono">
      <div className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Navigation Bar Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-black pb-2 mb-3 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-black"></span>
            <span className="text-xs font-bold uppercase tracking-wider">
              SELECT MODULE // JUMP TO TRACK
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-neutral-600">
            <span className="hidden sm:inline">INDEX 01 - 04</span>
            <SlenderStar className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isActive = activeSection === track.id;
            return (
              <a
                key={track.id}
                href={`#${track.id}`}
                onClick={() => setActiveSection(track.id)}
                className={`p-3 border-2 transition-all flex flex-col justify-between relative group ${
                  isActive
                    ? 'border-black bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)]'
                    : 'border-black bg-[#fbfbfa] text-black hover:bg-neutral-100 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {track.number}
                  </span>
                  <Icon className="w-4 h-4 opacity-80 group-hover:scale-110 transition-transform" />
                </div>
                
                <div>
                  <div className="font-extrabold text-sm tracking-tight font-['Syne'] uppercase">
                    {track.label}
                  </div>
                  <div className={`text-[10px] mt-0.5 tracking-wider ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {track.note}
                  </div>
                </div>

                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <SparkleStar className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}
