import React, { useState } from 'react';
import { SparkleStar, SlenderStar, BarcodeGraphic, CrosshairMatrix, ButterflyGraphic } from '../assets/vectors';
import { Radio, Send, CheckCircle2, Ticket, Sparkles } from 'lucide-react';

export default function SignalSubscribe() {
  const [email, setEmail] = useState('');
  const [ticketData, setTicketData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const serial = 'TCL-' + Math.floor(100000 + Math.random() * 900000);
      setTicketData({
        email: email,
        serial: serial,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
      setIsSubmitting(false);
      setEmail('');
    }, 600);
  };

  return (
    <section id="signal" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-4 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
            <span>TRACK [04]</span>
            <span>•</span>
            <SparkleStar className="w-3.5 h-3.5 text-black" />
            <span>DIRECT SIGNAL DISPATCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black font-['Syne'] uppercase mt-1 tracking-tight">
            TRANSMIT SIGNAL // GET DROPS
          </h2>
        </div>

        <div className="text-right">
          <span className="font-['Caveat'] text-2xl font-bold text-neutral-800 italic block">
            "zero spam, only major drops & builds..."
          </span>
          <span className="text-[11px] text-neutral-500 font-mono uppercase">
            FREQUENCY BROADCAST CHANNEL
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Input Form Card */}
        <div className="lg:col-span-7 border-2 border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-black/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-black animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-black">
                  BROADCAST SUBSCRIPTION FORM
                </span>
              </div>
              <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold uppercase">
                ENCRYPTED
              </span>
            </div>

            <h3 className="text-2xl font-extrabold font-['Syne'] uppercase text-black mb-2">
              NEVER MISS A LAB RELEASE OR RANDOM CREATION.
            </h3>
            
            <p className="text-xs text-neutral-600 font-['JetBrains_Mono'] leading-relaxed mb-6">
              When projects, hardware schematics, or software tools are ready to ship, this channel receives the signal first. No marketing garbage. Pure technical transmissions.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-black uppercase tracking-wider block mb-1.5">
                  ENTER YOUR COMMUNICATION ADDRESS:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="architect@thechudlab.dev"
                    className="flex-1 border-2 border-black p-3 text-xs bg-[#f4f3ee] text-black font-mono focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all border-2 border-black flex items-center justify-center gap-2 disabled:opacity-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'SUBSCRIBE'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-8 pt-4 border-t border-black/20 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
            <span>TRANSMIT PROTOCOL: TLS 1.3</span>
            <span>UNSUBSCRIBE AT ANY TIME</span>
          </div>
        </div>

        {/* Right: Issued Boarding Pass / Ticket Receipt */}
        <div className="lg:col-span-5 border-2 border-black bg-[#f4f3ee] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative flex flex-col justify-between">
          
          {/* Subtle Halftone Pattern */}
          <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between border-b-2 border-dashed border-black pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4 text-black" />
                <span className="text-xs font-bold uppercase tracking-wider text-black">
                  OFFICIAL ACCESS PASS
                </span>
              </div>
              <SparkleStar className="w-4 h-4 text-black" />
            </div>

            {ticketData ? (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-100 p-2 border border-emerald-500 text-xs font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>TRANSMISSION CONFIRMED // ACCESS GRANTED</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-black/10 py-1">
                    <span className="text-neutral-500 uppercase">SUBJECT:</span>
                    <span className="font-bold text-black truncate max-w-[180px]">{ticketData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 py-1">
                    <span className="text-neutral-500 uppercase">SERIAL NO:</span>
                    <span className="font-bold text-black">{ticketData.serial}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 py-1">
                    <span className="text-neutral-500 uppercase">ISSUED AT:</span>
                    <span className="font-bold text-black">{ticketData.date} {ticketData.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 py-1">
                    <span className="text-neutral-500 uppercase">SECURITY LEVEL:</span>
                    <span className="font-bold text-black">LAB MEMBER [TIER-1]</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col items-center">
                  <BarcodeGraphic code={ticketData.serial} className="text-black" />
                </div>
              </div>
            ) : (
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <ButterflyGraphic className="w-16 h-16 text-black/70 mb-3" />
                <h4 className="text-sm font-bold uppercase text-black font-['Syne']">
                  PASS GENERATOR IDLE
                </h4>
                <p className="text-xs text-neutral-600 mt-1 max-w-xs">
                  Enter your address on the left to mint your authentic Chud Lab transmission ticket.
                </p>
                <div className="mt-4">
                  <BarcodeGraphic code="TCL-AWAITING-SIGNAL" />
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-black/20 flex items-center justify-between text-[10px] text-neutral-500">
            <span>THE CHUD LAB ARCHIVES</span>
            <span>VERIFIED DIGITAL PASS</span>
          </div>

        </div>

      </div>

    </section>
  );
}
