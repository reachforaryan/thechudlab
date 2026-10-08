import React, { useState } from 'react';
import { Volume2, VolumeX, Tv, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function TextureOverlay({ crtEnabled, setCrtEnabled }) {
  const [soundActive, setSoundActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Subtle web audio cassette tape hiss
  const toggleHiss = () => {
    sounds.playClick();
    if (!soundActive) {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const bufferSize = audioCtx.sampleRate * 2;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = audioCtx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1600;
        filter.Q.value = 0.8;

        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.012; // ultra soft vintage cassette hiss

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        whiteNoise.start();
        window.__chudTapeHiss = { audioCtx, whiteNoise, gainNode };
        setSoundActive(true);
      } catch (e) {
        // audio fail safe
      }
    } else {
      if (window.__chudTapeHiss) {
        window.__chudTapeHiss.whiteNoise.stop();
        window.__chudTapeHiss.audioCtx.close();
        window.__chudTapeHiss = null;
      }
      setSoundActive(false);
    }
  };

  const toggleMute = () => {
    sounds.muted = !isMuted;
    setIsMuted(!isMuted);
    if (!isMuted) {
      sounds.playClick();
    }
  };

  return (
    <>
      {/* SVG Grain Noise Filter Overlay */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-20 z-40" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* CRT Scanline Overlay (Toggleable) */}
      {crtEnabled && (
        <div className="fixed inset-0 crt-scanlines z-40 pointer-events-none" />
      )}

      {/* Floating Retro Controls HUD at Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#111111]/95 text-[#f4f3ef] border-2 border-black px-3 py-1.5 backdrop-blur-md text-[11px] font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* CRT toggle */}
        <button
          onClick={() => {
            sounds.playClick();
            setCrtEnabled(!crtEnabled);
          }}
          className={`flex items-center gap-1.5 px-2 py-1 transition-all active:scale-95 ${
            crtEnabled ? 'bg-[#f4f3ef] text-black font-bold' : 'hover:text-white text-gray-400'
          }`}
          title="Toggle CRT Scanline Filter"
        >
          <Tv className="w-3.5 h-3.5" />
          <span>CRT {crtEnabled ? 'ON' : 'OFF'}</span>
        </button>

        <span className="text-gray-600">|</span>

        {/* Tape Hiss toggle */}
        <button
          onClick={toggleHiss}
          className={`flex items-center gap-1.5 px-2 py-1 transition-all active:scale-95 ${
            soundActive ? 'bg-[#f4f3ef] text-black font-bold' : 'hover:text-white text-gray-400'
          }`}
          title="Toggle Ambient Cassette Tape Hiss"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>HISS {soundActive ? 'ON' : 'OFF'}</span>
        </button>

        <span className="text-gray-600">|</span>

        {/* Audio FX mute */}
        <button
          onClick={toggleMute}
          className={`flex items-center gap-1 px-1.5 py-1 transition-all ${
            isMuted ? 'text-red-400' : 'text-gray-400 hover:text-white'
          }`}
          title={isMuted ? 'Unmute Mechanical Sound Effects' : 'Mute Mechanical Sound Effects'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          <span className="text-[9px]">{isMuted ? 'MUTED' : 'FX ON'}</span>
        </button>
      </div>
    </>
  );
}
