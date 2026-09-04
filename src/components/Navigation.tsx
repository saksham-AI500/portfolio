import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, Music } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

interface NavigationProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  onToggleTerminal?: () => void;
  onOpenMusicStudio?: () => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onNavigate,
  onToggleTerminal,
  onOpenMusicStudio,
}) => {
  const { setCursorMode, resetCursor } = useCursor();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundActive;
    soundManager.setEnabled(nextState);
    setSoundActive(nextState);
    if (nextState) {
      soundManager.playModeChange();
    }
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    soundManager.playClick();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 md:py-4 ${
        isScrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-[#ffffff08] shadow-lg shadow-black/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo (Editorial Serif + Clean Monospace) */}
        <MagneticButton
          onClick={() => handleNavClick('hero')}
          cursorLabel="HOME"
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#ffffff05] border border-[#ffffff15] flex items-center justify-center text-[#ff4e00] font-serif italic text-base tracking-wider shadow-[0_0_15px_rgba(255,78,0,0.2)] group-hover:border-[#ff4e00]/60 transition-colors">
            SG
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#8e9299] -mb-0.5">
              Neural Portfolio
            </span>
            <span className="text-base sm:text-lg font-light tracking-tight italic font-serif text-[#e0d8d0] group-hover:text-white transition-colors">
              Saksham Gupta
            </span>
          </div>
        </MagneticButton>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#ffffff05] backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-[#ffffff10] shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => {
                  soundManager.playHover();
                  setCursorMode('pointer', item.label.toUpperCase());
                }}
                onMouseLeave={resetCursor}
                className={`relative px-3.5 py-1.5 text-[11px] uppercase tracking-widest transition-all duration-200 rounded-full focus:outline-none ${
                  isActive
                    ? 'text-[#ff4e00] font-semibold'
                    : 'text-[#8e9299] hover:text-[#e0d8d0] hover:bg-[#ffffff08]'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#ff4e0015] border border-[#ff4e0040] rounded-full -z-10 shadow-[0_0_12px_rgba(255,78,0,0.25)]" />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Utilities (Audio, Easter Egg Terminal, Resume) */}
        <div className="flex items-center gap-2.5">
          {/* AI Music Studio Button */}
          {onOpenMusicStudio && (
            <MagneticButton
              onClick={onOpenMusicStudio}
              cursorLabel="AI MUSIC"
              title="Open AI Music Generator"
              className="h-9 px-3 rounded-full bg-[#ff4e00]/10 border border-[#ff4e00]/40 text-[#ff4e00] hover:bg-[#ff4e00]/20 hover:border-[#ff4e00] transition-all flex items-center gap-1.5 text-xs font-mono font-medium shadow-[0_0_15px_rgba(255,78,0,0.2)]"
              aria-label="Open AI Music Studio"
            >
              <Music className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AI Music</span>
            </MagneticButton>
          )}

          {/* Sound Toggle (Default OFF) */}
          <MagneticButton
            onClick={toggleSound}
            cursorLabel={soundActive ? 'MUTE' : 'UNMUTE'}
            title={soundActive ? 'Sound Synthesizer Active (Click to mute)' : 'Sound Synthesizer Off (Click to enable audio)'}
            className={`w-9 h-9 rounded-full border transition-all text-xs flex items-center justify-center ${
              soundActive
                ? 'bg-[#ff4e0015] border-[#ff4e00]/60 text-[#ff4e00] shadow-[0_0_15px_rgba(255,78,0,0.3)]'
                : 'bg-[#ffffff05] border-[#ffffff15] text-[#8e9299] hover:text-[#e0d8d0] hover:border-[#ffffff30]'
            }`}
            aria-label="Toggle Sound"
          >
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </MagneticButton>

          {/* Terminal / Easter Egg Toggle */}
          {onToggleTerminal && (
            <MagneticButton
              onClick={onToggleTerminal}
              cursorLabel="EXEC"
              title="Open Neural Command Console"
              className="w-9 h-9 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-[#ff4e00] hover:border-[#ff4e00]/50 transition-colors hidden sm:flex items-center justify-center"
              aria-label="Toggle Console"
            >
              <Terminal className="w-4 h-4" />
            </MagneticButton>
          )}

          {/* Contact CTA Button */}
          <MagneticButton
            onClick={() => handleNavClick('contact')}
            cursorLabel="CONNECT"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase text-[#e0d8d0] bg-[#ffffff05] border border-[#ffffff15] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0008] transition-all"
          >
            Connect
          </MagneticButton>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-[#e0d8d0]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-[#050505]/95 backdrop-blur-2xl border border-[#ffffff10] rounded-2xl shadow-2xl flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-widest transition-colors ${
                  isActive
                    ? 'bg-[#ff4e0015] text-[#ff4e00] border border-[#ff4e0040]'
                    : 'text-[#8e9299] hover:bg-[#ffffff08] hover:text-[#e0d8d0]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#ffffff10] flex flex-col gap-2">
            {onOpenMusicStudio && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMusicStudio();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#ff4e00]/15 border border-[#ff4e00]/40 text-[#ff4e00] text-xs font-mono font-bold uppercase tracking-wider"
              >
                <Music className="w-4 h-4" />
                <span>Open AI Music Studio</span>
              </button>
            )}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={toggleSound}
                className="flex items-center gap-2 text-xs text-[#8e9299] px-2 py-1.5 rounded-lg hover:text-white"
              >
                {soundActive ? <Volume2 className="w-4 h-4 text-[#ff4e00]" /> : <VolumeX className="w-4 h-4" />}
                <span>{soundActive ? 'Sound Enabled' : 'Sound Muted'}</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-1.5 text-xs font-semibold uppercase text-[#ff4e00] bg-[#ff4e00]/10 border border-[#ff4e00]/40 rounded-full"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
