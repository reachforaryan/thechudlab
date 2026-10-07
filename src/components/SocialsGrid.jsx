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
  MailIcon
} from '../assets/vectors';
import { Copy, Check, ExternalLink } from 'lucide-react';

export default function SocialsGrid() {
  const [copiedKey, setCopiedKey] = useState(null);

  const socials = [
    {
      key: 'github',
      name: 'GITHUB',
      handle: 'github.com/thechudlab',
      url: 'https://github.com',
      icon: GithubIcon,
      desc: 'Source code repositories, experimental compilers & open algorithms.',
      badge: 'DEV REPO',
      tag: 'GIT-HUB//01',
    },
    {
      key: 'twitter',
      name: 'X // TWITTER',
      handle: '@thechudlab',
      url: 'https://x.com',
      icon: XTwitterIcon,
      desc: 'Daily build logs, technical rants, WIP previews & dev memes.',
      badge: 'TRANSMISSION',
      tag: 'X-FEED//02',
    },
    {
      key: 'discord',
      name: 'DISCORD SYNDICATE',
      handle: 'discord.gg/thechudlab',
      url: 'https://discord.com',
      icon: DiscordIcon,
      desc: 'Live pair programming voice channels, agent hacking & tech discussions.',
      badge: 'COMMUNITY',
      tag: 'DSC-SRV//03',
    },
    {
      key: 'telegram',
      name: 'TELEGRAM SIGNAL',
      handle: 't.me/thechudlab',
      url: 'https://telegram.org',
      icon: TelegramIcon,
      desc: 'Encrypted flash drop alerts, release binaries & direct hardware news.',
      badge: 'FLASH DROP',
      tag: 'TG-CHAN//04',
    },
    {
      key: 'youtube',
      name: 'YOUTUBE ARCHIVE',
      handle: 'youtube.com/@thechudlab',
      url: 'https://youtube.com',
      icon: YoutubeIcon,
      desc: 'Deep architecture dives, retro hardware builds & live teardowns.',
      badge: 'BROADCAST',
      tag: 'YT-STREAM//05',
    },
    {
      key: 'email',
      name: 'DIRECT FREQUENCY',
      handle: 'batakkh@thechudlab.dev',
      url: 'mailto:batakkh@thechudlab.dev',
      icon: MailIcon,
      desc: 'Direct collaborations, consulting, and private inquiries.',
      badge: 'PGP/DIRECT',
      tag: 'MAIL-GATE//06',
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
            <span>TRACK [02]</span>
            <span>•</span>
            <SparkleStar className="w-3.5 h-3.5 text-black" />
            <span>EXTERNAL FREQUENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black font-['Syne'] uppercase mt-1 tracking-tight">
            SOCIAL TRANSMISSIONS // CHANNELS
          </h2>
        </div>

        <div className="text-right">
          <span className="font-['Caveat'] text-2xl font-bold text-neutral-800 italic block">
            "stay connected to the signal..."
          </span>
          <span className="text-[11px] text-neutral-500 font-mono uppercase">
            6 TRANSMISSION RELAYS ACTIVE
          </span>
        </div>
      </div>

      {/* Streetwear / Y2K Pill Grid Inspired by Ref 2 & 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {socials.map((social) => {
          const Icon = social.icon;
          const isCopied = copiedKey === social.key;

          return (
            <div
              key={social.key}
              className="border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent with Streetwear Tag & Icon */}
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
                  className="px-3 py-1 bg-black text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                >
                  <span>CONNECT</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Streetwear Footer Banner */}
      <div className="mt-8 border border-black bg-[#f4f3ee] p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CrosshairMatrix rows={1} cols={4} className="text-black" />
          <span className="text-xs font-bold uppercase tracking-wider text-black">
            SIGNAL ENCRYPTION: 4096-BIT RSA // CHUD PROTOCOL
          </span>
        </div>
        <div className="text-[10px] font-mono text-neutral-600 uppercase">
          ALL HANDLES OFFICIAL & VERIFIED
        </div>
      </div>

    </section>
  );
}
