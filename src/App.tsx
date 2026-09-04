import React, { useState, useEffect, useRef } from 'react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandTerminal } from './components/CommandTerminal';
import { MusicStudioModal } from './components/MusicStudioModal';
import { MagneticButton } from './components/MagneticButton';
import { Music, Disc3 } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [musicStudioOpen, setMusicStudioOpen] = useState<boolean>(false);
  const [backgroundMusicUrl, setBackgroundMusicUrl] = useState<string | null>(null);
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);

  // Scroll spy to detect active section
  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'projects', 'skills', 'certifications', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section occupies viewport center
          if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.25) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Keyboard shortcut to open easter egg terminal (Ctrl+K or `) or Music studio (Ctrl+M)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || e.key === '`') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      } else if (e.ctrlKey && e.key.toLowerCase() === 'm') {
        e.preventDefault();
        setMusicStudioOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Background audio handler
  const handleSetGlobalBackgroundMusic = (url: string | null) => {
    setBackgroundMusicUrl(url);
    if (!bgAudioRef.current) return;
    if (url) {
      bgAudioRef.current.src = url;
      bgAudioRef.current.volume = 0.35; // Gentle background level
      bgAudioRef.current.play().catch(() => {});
    } else {
      bgAudioRef.current.pause();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CursorProvider>
      <div className="relative min-h-screen bg-[#050505] text-[#e0d8d0] selection:bg-[#ff4e00]/25 selection:text-[#ff7a38] overflow-x-hidden font-sans">
        {/* Background Audio Player */}
        <audio ref={bgAudioRef} loop />

        {/* Immersive UI Atmospheric Radial Gradients */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[65%] h-[65%] rounded-full bg-radial-gradient from-[#1a0f0a] to-transparent opacity-50 blur-[110px]" />
          <div className="absolute -bottom-[10%] -right-[5%] w-[55%] h-[55%] rounded-full bg-radial-gradient from-[#0a151a] to-transparent opacity-35 blur-[90px]" />
          <div className="absolute top-[45%] right-[15%] w-[35%] h-[35%] rounded-full bg-radial-gradient from-[#1f1008] to-transparent opacity-20 blur-[100px]" />
        </div>

        {/* Custom Cursor System (Automatically disabled on touch / reduced motion) */}
        <CustomCursor />

        {/* Persistent Three.js WebGL Environment */}
        <ThreeCanvas currentSection={currentSection} />

        {/* Top Floating Glass Navigation */}
        <Navigation
          currentSection={currentSection}
          onNavigate={scrollToSection}
          onToggleTerminal={() => setTerminalOpen(true)}
          onOpenMusicStudio={() => setMusicStudioOpen(true)}
        />

        {/* Main Content Layers */}
        <main className="relative z-10">
          <HeroSection
            onExploreProjects={() => scrollToSection('projects')}
            onContactClick={() => scrollToSection('contact')}
            onOpenResume={() => setResumeOpen(true)}
            onOpenMusicStudio={() => setMusicStudioOpen(true)}
          />

          <AboutSection />

          <EducationSection />

          <ProjectsSection />

          <SkillsSection />

          <CertificationsSection />

          <ContactSection onOpenResume={() => setResumeOpen(true)} />
        </main>

        {/* Footer */}
        <Footer onBackToTop={() => scrollToSection('hero')} />

        {/* Floating Quick Music Dock (Bottom Left) */}
        <div className="fixed bottom-6 left-6 z-40">
          <MagneticButton
            onClick={() => setMusicStudioOpen(true)}
            cursorLabel="MUSIC"
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#121212]/90 border border-[#ff4e00]/40 text-[#e0d8d0] backdrop-blur-xl shadow-[0_0_25px_rgba(255,78,0,0.25)] hover:border-[#ff4e00] hover:shadow-[0_0_35px_rgba(255,78,0,0.4)] transition-all"
            title="Open AI Music Studio (Ctrl+M)"
          >
            <div className="w-5 h-5 rounded-full bg-[#ff4e00]/20 flex items-center justify-center text-[#ff4e00]">
              {backgroundMusicUrl ? (
                <Disc3 className="w-3.5 h-3.5 animate-[spin_4s_linear_infinite]" />
              ) : (
                <Music className="w-3.5 h-3.5" />
              )}
            </div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#e0d8d0] group-hover:text-[#ff4e00] transition-colors">
              {backgroundMusicUrl ? 'BG Music Active' : 'AI Music Lab'}
            </span>
            <span className="hidden sm:inline text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#8e9299]">
              ^M
            </span>
          </MagneticButton>
        </div>

        {/* Modals & Dialogs */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        <CommandTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
        <MusicStudioModal
          isOpen={musicStudioOpen}
          onClose={() => setMusicStudioOpen(false)}
          onSetGlobalBackgroundMusic={handleSetGlobalBackgroundMusic}
          isGlobalPlaying={Boolean(backgroundMusicUrl)}
        />
      </div>
    </CursorProvider>
  );
}
