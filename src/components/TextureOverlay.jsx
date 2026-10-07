import React, { useState } from 'react';
import { Volume2, VolumeX, Tv, Sparkles } from 'lucide-react';

export default function TextureOverlay({ crtEnabled, setCrtEnabled, grainIntensity = 'normal' }) {
  const [soundActive, setSoundActive] = useState(false);

  // Subtle web audio white noise generator for authentic vintage tape hiss
  const toggleHiss = () => {
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

        // Bandpass filter for warm analog cassette tape sound
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1800;
        filter.Q.value = 0.7;

        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.012; // ultra low ambient hiss

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        whiteNoise.start();
        window.__chudTapeHiss = { audioCtx, whiteNoise, gainNode };
        setSoundActive(true);
      } catch (e) {
        console.log("Audio not allowed yet", e);
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

  return (
    <>
      {/* SVG Grain Noise Filter Overlay */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-25 z-40" aria-hidden="true">
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
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#111111]/90 text-[#f4f3ef] border border-[#333] px-3 py-1.5 backdrop-blur-md text-[11px] font-mono shadow-2xl">
        <button
          onClick={() => setCrtEnabled(!crtEnabled)}
          className={`flex items-center gap-1.5 px-2 py-1 transition-colors ${
            crtEnabled ? 'bg-[#f4f3ef] text-black font-bold' : 'hover:text-white text-gray-400'
          }`}
          title="Toggle CRT Scanline Filter"
        >
          <Tv className="w-3.5 h-3.5" />
          <span>CRT {crtEnabled ? 'ON' : 'OFF'}</span>
        </button>

        <span className="text-gray-600">|</span>

        <button
          onClick={toggleHiss}
          className={`flex items-center gap-1.5 px-2 py-1 transition-colors ${
            soundActive ? 'bg-[#f4f3ef] text-black font-bold' : 'hover:text-white text-gray-400'
          }`}
          title="Toggle Ambient Cassette Tape Hiss"
        >
          {soundActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span>TAPE HISS {soundActive ? 'ON' : 'OFF'}</span>
        </button>
      </div>
    </>
  );
}
