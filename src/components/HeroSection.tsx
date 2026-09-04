import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Cpu, Terminal as TerminalIcon, Music } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_DATA } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../context/CursorContext';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onOpenResume: () => void;
  onOpenMusicStudio?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onContactClick,
  onOpenResume,
  onOpenMusicStudio,
}) => {
  const { setCursorMode, resetCursor } = useCursor();

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 px-6 md:px-12 z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status Badge */}
          <div
            onMouseEnter={() => setCursorMode('pointer', 'STATUS')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#ffffff15] bg-[#ffffff05] text-[9px] uppercase tracking-[0.2em] text-[#8e9299]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00] animate-ping inline-block" />
            <span className="font-semibold text-[#e0d8d0]">AI Interaction & Systems</span>
            <span className="text-[#ffffff20]">|</span>
            <span className="text-[#8e9299]">B.Tech AI / ML</span>
          </div>

          {/* Main Title & Identity */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.88] text-white">
              Architecting <br />
              Intelligent <br />
              <span className="italic font-serif text-[#ff4e00]">Systems.</span>
            </h1>
            <p className="text-lg sm:text-xl font-light text-[#e0d8d0] pt-2">
              Saksham Gupta <span className="text-[#ff4e00]">·</span> AI/ML Engineer
            </p>
            <p className="text-xs font-mono text-[#8e9299] tracking-widest uppercase">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Bio Summary */}
          <p className="text-sm sm:text-base text-[#8e9299] max-w-xl leading-relaxed">
            {PERSONAL_INFO.shortBio}
          </p>

          {/* Status line divider */}
          <div className="flex items-center gap-4 py-1">
            <div className="w-36 sm:w-48 h-[1px] bg-gradient-to-r from-[#ff4e00] to-transparent" />
            <span className="text-[10px] uppercase tracking-widest text-[#ff4e00] font-mono">
              Current Status: Open for Collaboration
            </span>
          </div>

          {/* Quick Metrics / Key Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-1">
            <div
              onMouseEnter={() => setCursorMode('pointer', 'ACADEMIC')}
              onMouseLeave={resetCursor}
              className="p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:border-[#ff4e00]/40 transition-colors"
            >
              <div className="text-[10px] text-[#8e9299] font-mono tracking-wider">DEGREE</div>
              <div className="text-sm font-semibold text-[#e0d8d0] mt-0.5">B.Tech AI / ML</div>
              <div className="text-[11px] text-[#ff4e00]">3rd Year · DTC GGSIPU</div>
            </div>

            <div
              onMouseEnter={() => setCursorMode('pointer', 'SPECIALTY')}
              onMouseLeave={resetCursor}
              className="p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:border-[#ff4e00]/40 transition-colors"
            >
              <div className="text-[10px] text-[#8e9299] font-mono tracking-wider">FOCUS</div>
              <div className="text-sm font-semibold text-[#e0d8d0] mt-0.5">Deep Learning</div>
              <div className="text-[11px] text-[#8e9299]">LLMs & Time-Series</div>
            </div>

            <div
              onMouseEnter={() => setCursorMode('pointer', 'CERTS')}
              onMouseLeave={resetCursor}
              className="p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:border-[#ff4e00]/40 transition-colors col-span-2 sm:col-span-1"
            >
              <div className="text-[10px] text-[#8e9299] font-mono tracking-wider">CREDENTIALS</div>
              <div className="text-sm font-semibold text-[#e0d8d0] mt-0.5">4 Verified</div>
              <div className="text-[11px] text-[#ff4e00]">GitHub · Oracle · Google</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <MagneticButton
              onClick={onExploreProjects}
              cursorLabel="EXPLORE"
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff4e00] text-black shadow-[0_0_25px_rgba(255,78,0,0.4)] hover:bg-[#ff621e] flex items-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              <span>Explore Projects</span>
            </MagneticButton>

            <MagneticButton
              onClick={onOpenResume}
              cursorLabel="RESUME"
              className="px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest bg-[#ffffff05] border border-[#ffffff15] text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0008] transition-all flex items-center gap-2"
            >
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </MagneticButton>

            <MagneticButton
              onClick={onContactClick}
              cursorLabel="CONNECT"
              className="px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest bg-[#ffffff05] border border-[#ffffff15] text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0008] transition-all flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </MagneticButton>

            {onOpenMusicStudio && (
              <MagneticButton
                onClick={onOpenMusicStudio}
                cursorLabel="MUSIC"
                className="px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest bg-[#ff4e00]/10 border border-[#ff4e00]/40 text-[#ff4e00] hover:bg-[#ff4e00]/20 hover:border-[#ff4e00] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,78,0,0.2)]"
              >
                <Music className="w-3.5 h-3.5" />
                <span>AI Music Lab</span>
              </MagneticButton>
            )}
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3.5 pt-2 text-[#8e9299]">
            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorMode('external', 'GH')}
              onMouseLeave={resetCursor}
              className="w-11 h-11 rounded-full border border-[#ffffff15] bg-[#ffffff05] flex items-center justify-center text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0010] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorMode('external', 'IN')}
              onMouseLeave={resetCursor}
              className="w-11 h-11 rounded-full border border-[#ffffff15] bg-[#ffffff05] flex items-center justify-center text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0010] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${CONTACT_DATA.email}`}
              onMouseEnter={() => setCursorMode('external', 'MAIL')}
              onMouseLeave={resetCursor}
              className="w-11 h-11 rounded-full border border-[#ffffff15] bg-[#ffffff05] flex items-center justify-center text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0010] transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <span className="text-xs font-mono text-[#8e9299] pl-2 hidden sm:inline">
              saksham-AI500
            </span>
          </div>
        </div>

        {/* Right Column: 3D Core Interactive HUD Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div
            onMouseEnter={() => setCursorMode('three', 'NEURAL CORE')}
            onMouseLeave={resetCursor}
            className="w-full max-w-md p-6 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl shadow-2xl hover:border-[#ff4e00]/50 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#ffffff10] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff4e00]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff20]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff20]" />
                <span className="text-xs font-mono text-[#8e9299] ml-2">neural_gravity.sys</span>
              </div>
              <span className="text-[10px] font-mono text-[#ff4e00] tracking-wider uppercase bg-[#ff4e0015] px-2 py-0.5 rounded border border-[#ff4e0040]">
                ACTIVE
              </span>
            </div>

            {/* Neural Telemetry readout */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-[#e0d8d0]">
                <span className="text-[#8e9299]">OPERATING ENVIRONMENT</span>
                <span className="text-[#ff4e00]">Three.js / WebGL</span>
              </div>
              <div className="flex justify-between items-center text-[#e0d8d0]">
                <span className="text-[#8e9299]">INFERENCE ENGINE</span>
                <span className="text-[#e0d8d0]">PyTorch + FastAPI</span>
              </div>
              <div className="flex justify-between items-center text-[#e0d8d0]">
                <span className="text-[#8e9299]">STORAGE & VECTOR</span>
                <span className="text-[#e0d8d0]">PostgreSQL + FAISS</span>
              </div>
              <div className="flex justify-between items-center text-[#e0d8d0]">
                <span className="text-[#8e9299]">CLOUD DEPLOYMENT</span>
                <span className="text-[#ff4e00]">Google Cloud Platform</span>
              </div>
            </div>

            {/* Interactive hint */}
            <div className="mt-5 pt-3 border-t border-[#ffffff10] flex items-center justify-between text-[11px] text-[#8e9299]">
              <div className="flex items-center gap-1.5 text-[#ff4e00]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Move cursor to orient 3D core</span>
              </div>
              <span className="font-mono text-[#ff4e00]">60 FPS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8e9299] pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#8e9299]">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#ff4e00]" />
      </div>
    </section>
  );
};
