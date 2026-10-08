import React, { useState, useEffect } from 'react';
import { SparkleStar } from '../assets/vectors';

export default function ScrollRibbon() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [timecode, setTimecode] = useState('00:00');

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollPercent(Math.min(100, Math.max(0, progress)));

      // Calculate spool rotation
      const delta = currentScroll - lastScroll;
      setRotation((prev) => (prev + delta * 0.4) % 360);
      lastScroll = currentScroll;

      // Retro audio timecode (minutes : seconds)
      const totalSeconds = Math.floor((progress / 100) * 240); // 4 min tape length
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      setTimecode(`0${mins}:${secs < 10 ? '0' : ''}${secs}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-3 top-24 bottom-24 z-20 hidden 2xl:flex flex-col items-center justify-between pointer-events-none select-none font-mono">
      {/* Top Spool Reel */}
      <div className="flex flex-col items-center">
        <div
          className="w-8 h-8 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          {/* Spool teeth */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-0.5 bg-black/40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-0.5 bg-black/40"></div>
          </div>
        </div>
        <span className="text-[8px] font-bold mt-1 bg-black text-white px-1">
          A-SIDE
        </span>
      </div>

      {/* Magnetic Tape Ribbon Progress Track */}
      <div className="flex-1 w-1 bg-neutral-300 relative my-2 overflow-hidden rounded-full">
        {/* Animated unspooling dark magnetic tape */}
        <div
          className="w-full bg-black transition-all duration-75"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      {/* Bottom Spool Reel & Digital Counter */}
      <div className="flex flex-col items-center">
        <div className="text-[9px] font-bold bg-[#f4f3ee] border border-black px-1.5 py-0.5 mb-1 text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
          {timecode}
        </div>
        <div
          className="w-8 h-8 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
          style={{ transform: `rotate(${rotation * -1}deg)` }}
        >
          <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-0.5 bg-black/40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-0.5 bg-black/40"></div>
          </div>
        </div>
        <span className="text-[8px] text-neutral-500 font-bold mt-1">
          {Math.round(scrollPercent)}% TAPE
        </span>
      </div>
    </div>
  );
}
