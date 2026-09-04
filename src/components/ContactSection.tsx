import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, Copy, Check, MapPin, Sparkles } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const { setCursorMode, resetCursor } = useCursor();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setCopiedEmail(true);
    soundManager.playClick();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Collaborator'}`);
    const body = encodeURIComponent(senderMessage || 'Hello Saksham, I would like to discuss an opportunity with you.');
    window.location.href = `mailto:${CONTACT_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]" />
              <span>COMMUNICATION PORTAL // 06</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
              Let's Build <span className="italic font-serif text-[#ff4e00]">Together.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff4e00] bg-[#ff4e0010] px-3.5 py-1.5 rounded-full border border-[#ff4e0030]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for AI/ML Internships & Collaborations</span>
          </div>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Channels & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] space-y-6">
              <p className="text-base sm:text-lg text-[#e0d8d0] font-light leading-relaxed">
                {CONTACT_DATA.tagline}
              </p>

              <div className="space-y-4 pt-2 border-t border-[#ffffff10]">
                {/* Email Item */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-black/40 border border-[#ffffff10] gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#ff4e00]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#8e9299]">Direct Email</div>
                      <a
                        href={`mailto:${CONTACT_DATA.email}`}
                        onMouseEnter={() => setCursorMode('external', 'EMAIL')}
                        onMouseLeave={resetCursor}
                        className="text-xs sm:text-sm font-mono text-[#e0d8d0] hover:text-[#ff4e00] transition-colors"
                      >
                        {CONTACT_DATA.email}
                      </a>
                    </div>
                  </div>

                  <MagneticButton
                    onClick={copyToClipboard}
                    cursorLabel={copiedEmail ? 'COPIED' : 'COPY'}
                    className="self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#ffffff05] hover:bg-[#ffffff10] border border-[#ffffff15] text-[#e0d8d0] flex items-center gap-1.5 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#ff4e00]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </MagneticButton>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-[#ffffff10]">
                  <div className="p-2.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#8e9299]">Current Base</div>
                    <div className="text-xs sm:text-sm text-[#e0d8d0]">
                      {CONTACT_DATA.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-2 border-t border-[#ffffff10] flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorMode('external', 'GH')}
                  onMouseLeave={resetCursor}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ffffff05] border border-[#ffffff15] hover:border-[#ff4e00]/50 text-[#8e9299] hover:text-[#ff4e00] text-xs font-mono transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={CONTACT_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorMode('external', 'IN')}
                  onMouseLeave={resetCursor}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ffffff05] border border-[#ffffff15] hover:border-[#ff4e00]/50 text-[#8e9299] hover:text-[#ff4e00] text-xs font-mono transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <MagneticButton
                  onClick={onOpenResume}
                  cursorLabel="RESUME"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ff4e0015] border border-[#ff4e0040] text-[#ff4e00] hover:bg-[#ff4e0025] text-xs font-mono transition-all shadow-[0_0_15px_rgba(255,78,0,0.2)]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Curriculum Vitae</span>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Transmission Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] space-y-5">
            <div>
              <h3 className="text-xl font-light text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-[#ff4e00]" />
                <span>Transmit Message</span>
              </h3>
              <p className="text-xs text-[#8e9299] mt-1">
                Direct transmission dispatched directly to Saksham Gupta's primary inbox.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono text-[#8e9299] uppercase tracking-wider block mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Dr. Alex Vance / DeepMind / DTC Lab"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#ffffff15] text-[#e0d8d0] text-xs placeholder:text-[#50555e] focus:outline-none focus:border-[#ff4e00] transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-[#8e9299] uppercase tracking-wider block mb-1.5">
                  Message / Opportunity Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Describe your research project, internship opening, or engineering collaboration..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#ffffff15] text-[#e0d8d0] text-xs placeholder:text-[#50555e] focus:outline-none focus:border-[#ff4e00] transition-colors resize-none"
                />
              </div>

              <MagneticButton
                type="submit"
                cursorLabel="SEND"
                className="w-full py-3 rounded-full bg-[#ff4e00] hover:bg-[#ff621e] text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,78,0,0.35)] flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Transmit to Mailbox</span>
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
