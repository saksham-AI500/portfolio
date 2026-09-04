import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_DATA } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../context/CursorContext';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const { setCursorMode, resetCursor } = useCursor();

  return (
    <footer className="relative z-10 border-t border-[#ffffff10] bg-[#050505] py-12 px-6 md:px-12 text-xs font-mono text-[#8e9299]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-white font-serif font-light text-base tracking-wide flex items-center justify-center md:justify-start gap-2">
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-[#ff4e00]">·</span>
            <span className="text-xs font-mono text-[#8e9299] font-normal">AI/ML Engineer</span>
          </div>
          <p className="text-[11px] text-[#555a64]">
            Engineered with Three.js, React, TypeScript & WebGL.
          </p>
        </div>

        {/* Center: Repository & Live Deployment Reference */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/saksham-AI500/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorMode('external', 'GH')}
              onMouseLeave={resetCursor}
              className="text-[#8e9299] hover:text-[#ff4e00] transition-colors"
            >
              GitHub Source
            </a>
            <span className="text-[#ffffff20]">•</span>
            <a
              href="https://saksham-ai500.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorMode('external', 'LIVE')}
              onMouseLeave={resetCursor}
              className="text-[#8e9299] hover:text-[#ff4e00] transition-colors"
            >
              GitHub Pages Live
            </a>
          </div>
          <span className="text-[10px] text-[#555a64]">
            Delhi Technical Campus (GGSIPU) · 2024 – 2028
          </span>
        </div>

        {/* Right: Back to Top */}
        <MagneticButton
          onClick={onBackToTop}
          cursorLabel="TOP"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-[#ff4e00] hover:border-[#ff4e00]/50 transition-all text-xs"
        >
          <span>Return to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </MagneticButton>
      </div>
    </footer>
  );
};
