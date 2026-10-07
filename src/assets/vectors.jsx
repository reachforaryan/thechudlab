import React from 'react';

// 4-Point Y2K Sparkle Star (Filled / Outline)
export function SparkleStar({ className = "w-6 h-6", filled = true }) {
  if (filled) {
    return (
      <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
      <path d="M50 4 C50 36 64 50 96 50 C64 50 50 64 50 96 C50 64 36 50 4 50 C36 50 50 36 50 4 Z" />
    </svg>
  );
}

// Slender 4-point cross star
export function SlenderStar({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M50 0 L50 100 M0 50 L100 50 M25 25 L75 75 M25 75 L75 25" strokeLinecap="round" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

// Y2K Orbit Ring with Sparkle
export function OrbitRing({ className = "w-16 h-10" }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" className={className}>
      {/* Primary ellipse tilted */}
      <ellipse cx="60" cy="35" rx="52" ry="18" stroke="currentColor" strokeWidth="1.8" transform="rotate(-12 60 35)" />
      {/* Secondary ghost ring */}
      <ellipse cx="60" cy="35" rx="46" ry="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" transform="rotate(-12 60 35)" />
      {/* Axis Sparkles */}
      <g transform="translate(10, 38) scale(0.12)">
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" fill="currentColor" />
      </g>
      <g transform="translate(102, 22) scale(0.14)">
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

// 3D Wireframe Globe
export function WireframeGlobe({ className = "w-24 h-24" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      {/* Outer circle */}
      <circle cx="50" cy="50" r="46" />
      {/* Equator & Latitudes */}
      <line x1="4" y1="50" x2="96" y2="50" />
      <ellipse cx="50" cy="50" rx="46" ry="24" />
      <ellipse cx="50" cy="50" rx="46" ry="12" />
      {/* Longitudes */}
      <line x1="50" y1="4" x2="50" y2="96" />
      <ellipse cx="50" cy="50" rx="24" ry="46" />
      <ellipse cx="50" cy="50" rx="12" ry="46" />
      {/* Mini orbiting star */}
      <g transform="translate(78, 16) scale(0.1)">
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

// Perspective Distorted Grid Plane (Cyber Grunge)
export function WarpGrid({ className = "w-full h-32" }) {
  return (
    <svg viewBox="0 0 300 120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" className={className}>
      {/* Horizontal curved perspective lines */}
      <path d="M 0,20 Q 150,35 300,20" />
      <path d="M 0,40 Q 150,60 300,40" />
      <path d="M 0,65 Q 150,90 300,65" />
      <path d="M 0,95 Q 150,125 300,95" />
      
      {/* Vertical diverging lines */}
      <line x1="20" y1="10" x2="0" y2="120" />
      <line x1="60" y1="12" x2="40" y2="120" />
      <line x1="100" y1="15" x2="90" y2="120" />
      <line x1="150" y1="16" x2="150" y2="120" />
      <line x1="200" y1="15" x2="210" y2="120" />
      <line x1="240" y1="12" x2="260" y2="120" />
      <line x1="280" y1="10" x2="300" y2="120" />
    </svg>
  );
}

// Cassette J-Card Lily Botanical Graphic (Inspired by Ref 0 & 1)
export function LilyIllustration({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      {/* Circular backdrop boundary */}
      <circle cx="100" cy="95" r="72" stroke="currentColor" strokeWidth="1.5" strokeDasharray="none" />
      
      {/* Background Sparkles */}
      <g transform="translate(142, 60) scale(0.12)">
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" fill="currentColor" />
      </g>
      <g transform="translate(135, 85) scale(0.06)">
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" fill="currentColor" />
      </g>

      {/* Main Lily Petals (Silhouette & Stippling) */}
      <g fill="currentColor">
        {/* Top Flower */}
        <path d="M 140,25 C 130,45 145,55 150,70 C 142,62 130,68 120,60 C 122,48 132,35 140,25 Z" />
        <path d="M 150,70 C 165,65 175,50 180,38 C 172,50 162,55 150,70 Z" />

        {/* Big Central Bloom */}
        {/* Top Left Petal */}
        <path d="M 100,75 C 80,45 65,30 50,40 C 60,60 85,75 100,75 Z" />
        {/* Top Center Petal */}
        <path d="M 100,75 C 95,40 105,20 115,15 C 125,30 115,55 100,75 Z" />
        {/* Top Right Petal */}
        <path d="M 100,75 C 120,50 145,45 155,55 C 140,70 120,78 100,75 Z" />
        {/* Bottom Left Petal */}
        <path d="M 100,75 C 70,80 50,95 45,115 C 65,110 85,95 100,75 Z" />
        {/* Bottom Center Petal */}
        <path d="M 100,75 C 95,100 100,125 115,135 C 125,115 115,90 100,75 Z" />
        {/* Bottom Right Petal */}
        <path d="M 100,75 C 125,85 145,105 160,118 C 145,100 130,90 100,75 Z" />
        
        {/* Leaves & Stem */}
        <path d="M 98,110 Q 115,150 125,185 Q 120,150 102,110 Z" />
        <path d="M 115,140 C 135,140 160,130 175,115 C 155,130 135,135 115,140 Z" />
        <path d="M 105,130 C 85,135 60,150 40,165 C 65,150 90,140 105,130 Z" />
      </g>
      
      {/* Pistil & Stamen Details */}
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M 98,75 Q 92,62 88,58" />
        <circle cx="87" cy="57" r="1.5" fill="currentColor" />
        <path d="M 100,75 Q 102,60 105,52" />
        <circle cx="106" cy="51" r="1.5" fill="currentColor" />
        <path d="M 102,75 Q 112,65 118,60" />
        <circle cx="119" cy="59" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}

// Cassette J-Card Surreal Figures (From Ref 0 Left Spine)
export function SpineFigures({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <rect x="2" y="2" width="76" height="76" strokeWidth="1.5" />
      {/* Left Human Wireframe Silhouette */}
      <circle cx="30" cy="18" r="6" />
      <path d="M 30,24 L 30,45 M 30,30 L 20,38 M 30,30 L 40,38 M 30,45 L 23,68 M 30,45 L 37,68" strokeLinecap="round" />
      
      {/* Right Human Wireframe Silhouette */}
      <circle cx="50" cy="18" r="6" />
      <path d="M 50,24 L 50,45 M 50,30 L 40,38 M 50,30 L 60,38 M 50,45 L 43,68 M 50,45 L 57,68" strokeLinecap="round" />
      
      {/* Optical Distortion Lines across */}
      <line x1="12" y1="28" x2="68" y2="28" strokeDasharray="1 3" opacity="0.7" />
      <line x1="12" y1="36" x2="68" y2="36" strokeDasharray="2 2" opacity="0.7" />
      <line x1="12" y1="44" x2="68" y2="44" strokeDasharray="1 2" opacity="0.7" />
      <line x1="12" y1="52" x2="68" y2="52" strokeDasharray="3 3" opacity="0.7" />
      <line x1="12" y1="60" x2="68" y2="60" strokeDasharray="1 1" opacity="0.7" />
    </svg>
  );
}

// Engraved Butterfly Motif (From Ref 0)
export function ButterflyGraphic({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" className={className}>
      <g fill="currentColor">
        {/* Left Wings */}
        <path d="M 30,25 C 22,10 8,5 4,14 C 0,22 15,28 30,25 Z" />
        <path d="M 30,25 C 20,28 10,38 16,44 C 22,48 26,35 30,25 Z" />
        
        {/* Right Wings */}
        <path d="M 30,25 C 38,10 52,5 56,14 C 60,22 45,28 30,25 Z" />
        <path d="M 30,25 C 40,28 50,38 44,44 C 38,48 34,35 30,25 Z" />
        
        {/* Body & Antennae */}
        <ellipse cx="30" cy="25" rx="1.5" ry="8" />
        <circle cx="30" cy="16" r="1.5" />
      </g>
      <path d="M 29,15 Q 26,10 23,8 M 31,15 Q 34,10 37,8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      
      {/* Floating Star Accent */}
      <g transform="translate(44, 4) scale(0.06)">
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" fill="currentColor" />
      </g>
      
      {/* Drop shadow oval */}
      <ellipse cx="30" cy="48" rx="8" ry="2.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// Barcode Graphic with J-Card Serial
export function BarcodeGraphic({ code = "TCL-092-2026-ALPHA", className = "w-48 h-12" }) {
  return (
    <div className={`flex flex-col items-center select-none font-mono ${className}`}>
      <svg viewBox="0 0 160 40" fill="currentColor" className="w-full h-8">
        {/* Authentic-looking bar distribution */}
        <rect x="0" y="0" width="3" height="40" />
        <rect x="5" y="0" width="1.5" height="40" />
        <rect x="9" y="0" width="4" height="40" />
        <rect x="16" y="0" width="1.5" height="40" />
        <rect x="20" y="0" width="3" height="40" />
        <rect x="25" y="0" width="1" height="40" />
        <rect x="28" y="0" width="5" height="40" />
        <rect x="36" y="0" width="2" height="40" />
        <rect x="41" y="0" width="1" height="40" />
        <rect x="44" y="0" width="4" height="40" />
        <rect x="51" y="0" width="2" height="40" />
        <rect x="55" y="0" width="6" height="40" />
        <rect x="64" y="0" width="2" height="40" />
        <rect x="68" y="0" width="3" height="40" />
        <rect x="74" y="0" width="1.5" height="40" />
        <rect x="78" y="0" width="4" height="40" />
        <rect x="85" y="0" width="2" height="40" />
        <rect x="90" y="0" width="1" height="40" />
        <rect x="93" y="0" width="5" height="40" />
        <rect x="101" y="0" width="2" height="40" />
        <rect x="105" y="0" width="3" height="40" />
        <rect x="111" y="0" width="1.5" height="40" />
        <rect x="115" y="0" width="4" height="40" />
        <rect x="122" y="0" width="2" height="40" />
        <rect x="127" y="0" width="5" height="40" />
        <rect x="135" y="0" width="1" height="40" />
        <rect x="138" y="0" width="4" height="40" />
        <rect x="145" y="0" width="2" height="40" />
        <rect x="150" y="0" width="1" height="40" />
        <rect x="154" y="0" width="3" height="40" />
      </svg>
      <span className="text-[10px] tracking-widest uppercase opacity-80 mt-1">{code}</span>
    </div>
  );
}

// Streetwear Brutalist Crosshair Matrix (+ + + +)
export function CrosshairMatrix({ rows = 2, cols = 4, className = "" }) {
  return (
    <div className={`grid gap-2 opacity-50 select-none ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span key={i} className="text-xs font-mono font-bold leading-none text-center">
          +
        </span>
      ))}
    </div>
  );
}

// Vintage Cassette Tape Spool Graphic
export function CassetteMiniVisual({ className = "w-14 h-8", isPlaying = false }) {
  return (
    <div className={`border border-current p-1 relative flex items-center justify-between rounded-xs ${className}`}>
      <div className={`w-3.5 h-3.5 border border-current rounded-full flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
      </div>
      <div className="w-4 h-1.5 border-t border-b border-current"></div>
      <div className={`w-3.5 h-3.5 border border-current rounded-full flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
      </div>
    </div>
  );
}

// Brand SVG Icons
export function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function XTwitterIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function DiscordIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function TelegramIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
