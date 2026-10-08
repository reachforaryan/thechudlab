import React, { useState } from 'react';
import {
  SparkleStar,
  SlenderStar,
  BarcodeGraphic,
  CrosshairMatrix,
  GithubIcon,
  XTwitterIcon,
  DiscordIcon,
  TelegramIcon,
  YoutubeIcon,
  InstagramIcon,
  MailIcon
} from '../assets/vectors';
import { Copy, Check, ExternalLink } from 'lucide-react';

export default function SocialsGrid() {
  const [copiedKey, setCopiedKey] = useState(null);

  const socials = [
    {
      key: 'youtube',
      name: 'YOUTUBE CHANNEL',
      handle: 'youtube.com/@thechudlab',
      url: 'https://youtube.com',
      icon: YoutubeIcon,
      desc: 'Full build documentation, in-depth hardware & software breakdowns, and tech walkthroughs.',
      badge: 'MAIN VIDEOS',
      tag: 'YT-VIDEO//01',
      primary: true,
    },
    {
      key: 'instagram',
      name: 'INSTAGRAM & REELS',
      handle: '@thechudlab',
      url: 'https://instagram.com',
      icon: InstagramIcon,
      desc: 'Short-form demos, behind-the-scenes laboratory moments, and quick engineering experiments.',
      badge: 'REELS & BTS',
      tag: 'IG-REEL//02',
      primary: true,
    },
    {
      key: 'github',
      name: 'GITHUB CODE REPOS',
      handle: 'github.com/thechudlab',
      url: 'https://github.com',
      icon: GithubIcon,
      desc: 'Open-source repositories, project documentation, schematics, and experimental snippets.',
      badge: 'OPEN SOURCE',
      tag: 'GH-REPO//03',
      primary: true,
    },
    {
      key: 'discord',
      name: 'DISCORD COMMUNITY',
      handle: 'discord.gg/thechudlab',
      url: 'https://discord.com',
      icon: DiscordIcon,
      desc: 'Chat directly with me and fellow builders, share your own projects, and pair program.',
      badge: 'COMMUNITY',
      tag: 'DSC-SRV//04',
      primary: false,
    },
    {
      key: 'twitter',
      name: 'X // TWITTER',
      handle: '@thechudlab',
      url: 'https://x.com',
      icon: XTwitterIcon,
      desc: 'Daily progress updates, late-night screenshots, hot takes, and project teaser threads.',
      badge: 'UPDATES',
      tag: 'X-FEED//05',
      primary: false,
    },
    {
      key: 'email',
      name: 'DIRECT EMAIL',
      handle: 'batakkh@thechudlab.dev',
      url: 'mailto:batakkh@thechudlab.dev',
      icon: MailIcon,
      desc: 'Collaborations, sponsorships, inquiries, or just reaching out directly.',
      badge: 'INQUIRIES',
      tag: 'MAIL-BOX//06',
      primary: false,
    },
  ];

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="socials" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-4 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
            <span>TRACK [03]</span>
            <span>•</span>
            <SparkleStar className="w-3.5 h-3.5 text-black" />
            <span>CONNECT WITH ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black font-['Instrument_Serif'] uppercase mt-1 tracking-tight">
            COMMUNITY & SOCIALS
          </h2>
        </div>

        <div className="text-right">
          <span className="font-['Caveat'] text-2xl font-bold text-neutral-800 italic block">
            "stay connected to the signal..."
          </span>
          <span className="text-[11px] text-neutral-500 font-mono uppercase">
            6 ACTIVE CHANNELS & HUBS
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {socials.map((social) => {
          const Icon = social.icon;
          const isCopied = copiedKey === social.key;

          return (
            <div
              key={social.key}
              className={`border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group relative overflow-hidden ${
                social.primary ? 'border-2 ring-1 ring-black/10' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-black/20 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-wider">
                      {social.badge}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      {social.tag}
                    </span>
                  </div>
                  <SparkleStar className="w-3.5 h-3.5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Social Title & Handle */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 border border-black bg-[#f4f3ee] flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold font-['Syne'] uppercase tracking-tight text-black">
                      {social.name}
                    </h3>
                    <p className="text-xs text-neutral-600 font-bold truncate max-w-[200px]">
                      {social.handle}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed font-['JetBrains_Mono'] my-3">
                  {social.desc}
                </p>
              </div>

              {/* Action Buttons: Visit & Copy */}
              <div className="pt-3 border-t border-black/20 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopy(social.key, social.handle)}
                  className={`px-2.5 py-1 text-[10px] font-bold border border-black uppercase flex items-center gap-1 transition-all ${
                    isCopied ? 'bg-black text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-black'
                  }`}
                  title="Copy Handle"
                >
                  {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{isCopied ? 'COPIED' : 'COPY'}</span>
                </button>

                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-black text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                >
                  <span>VISIT LINK</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="mt-8 border border-black bg-[#f4f3ee] p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CrosshairMatrix rows={1} cols={4} className="text-black" />
          <span className="text-xs font-bold uppercase tracking-wider text-black">
            AUTHENTIC SOCIAL CHANNELS // THE CHUD LAB
          </span>
        </div>
        <div className="text-[10px] font-mono text-neutral-600 uppercase">
          COMMUNITY FEED & DIRECT DISPATCHES
        </div>
      </div>

    </section>
  );
}
