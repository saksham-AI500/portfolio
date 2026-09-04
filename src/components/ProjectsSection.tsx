import React, { useState } from 'react';
import { Github, ExternalLink, TrendingUp, Shield, BrainCircuit, PackageSearch, Layers, Sparkles, X, Check } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

const CATEGORIES = ['All', 'AI / ML', 'AI Engineering', 'Backend', 'Mobile'] as const;

export const ProjectsSection: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory || (activeCategory === 'Backend' && (p.category === 'Backend' || p.technologies.includes('FastAPI'))));

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'PackageSearch': return <PackageSearch className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    soundManager.playModeChange();
  };

  const openProjectModal = (proj: Project) => {
    setSelectedProject(proj);
    soundManager.playClick();
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    soundManager.playClick();
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#ffffff10] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]" />
              <span>FEATURED WORK // 03</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
              Project <span className="italic font-serif text-[#ff4e00]">Universe.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#ffffff05] backdrop-blur-xl p-1.5 rounded-full border border-[#ffffff10]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  onMouseEnter={() => {
                    soundManager.playHover();
                    setCursorMode('pointer', cat.toUpperCase());
                  }}
                  onMouseLeave={resetCursor}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#ff4e0015] text-[#ff4e00] font-semibold border border-[#ff4e0040] shadow-[0_0_12px_rgba(255,78,0,0.25)]'
                      : 'text-[#8e9299] hover:text-[#e0d8d0]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setCursorMode('project', 'VIEW')}
              onMouseLeave={resetCursor}
              className="group p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] hover:border-[#ff4e00]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(255,78,0,0.15)]"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded-xl border flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${project.accent}15`,
                        borderColor: `${project.accent}40`,
                        color: project.accent,
                      }}
                    >
                      {getIcon(project.icon)}
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#ff4e00] bg-[#ff4e0010] px-3 py-1 rounded-full border border-[#ff4e0030]">
                      {project.category}
                    </span>
                  </div>

                  {project.stats && (
                    <span className="text-[11px] font-mono text-[#8e9299] hidden sm:inline-block">
                      {project.stats}
                    </span>
                  )}
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-[#ff4e00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#8e9299] mt-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-[#ffffff05] border border-[#ffffff10] text-[11px] font-mono text-[#8e9299]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-[#ffffff10] flex items-center justify-between">
                <MagneticButton
                  onClick={() => openProjectModal(project)}
                  cursorLabel="SPECS"
                  className="text-xs font-medium uppercase tracking-widest text-[#e0d8d0] hover:text-[#ff4e00] flex items-center gap-1.5 focus:outline-none transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#ff4e00]" />
                  <span>Architecture & Features</span>
                </MagneticButton>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursorMode('external', 'GH')}
                    onMouseLeave={resetCursor}
                    className="w-9 h-9 rounded-full bg-[#ffffff05] hover:bg-[#ffffff10] border border-[#ffffff15] flex items-center justify-center text-[#8e9299] hover:text-[#ff4e00] hover:border-[#ff4e00]/50 transition-colors"
                    title="View GitHub Repository"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closeProjectModal}
        >
          <div
            className="w-full max-w-2xl bg-[#0a0a0a] border border-[#ffffff15] rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white hover:border-[#ffffff30] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3">
              <div
                className="p-3 rounded-xl border"
                style={{
                  backgroundColor: `${selectedProject.accent}20`,
                  borderColor: `${selectedProject.accent}50`,
                  color: selectedProject.accent,
                }}
              >
                {getIcon(selectedProject.icon)}
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#ff4e00]">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-light text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#8e9299] leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Key Features */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8e9299]">
                Key Engineering Features
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#e0d8d0]">
                    <Check className="w-4 h-4 text-[#ff4e00] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8e9299]">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-xs font-mono text-[#e0d8d0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="pt-4 border-t border-[#ffffff10] flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff4e00] text-black hover:bg-[#ff621e] shadow-[0_0_20px_rgba(255,78,0,0.4)] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <button
                onClick={closeProjectModal}
                className="px-4 py-2 text-xs font-mono text-[#8e9299] hover:text-white uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
