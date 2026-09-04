import React from 'react';
import { X, Download, ExternalLink, GraduationCap, Award, Briefcase, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, PROJECTS_DATA, SKILLS_DATA, CERTIFICATIONS_DATA, CONTACT_DATA } from '../data/portfolioData';
import { useCursor } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { setCursorMode, resetCursor } = useCursor();

  if (!isOpen) return null;

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#0a0a0a] border border-[#ffffff15] rounded-2xl p-6 sm:p-10 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between border-b border-[#ffffff10] pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff4e00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]" />
            <span className="tracking-widest uppercase text-[10px]">CURRICULUM VITAE // SAKSHAM GUPTA</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              onMouseEnter={() => setCursorMode('pointer', 'PRINT')}
              onMouseLeave={resetCursor}
              className="px-4 py-1.5 rounded-full bg-[#ff4e0015] text-[#ff4e00] border border-[#ff4e0040] text-xs font-mono flex items-center gap-1.5 hover:bg-[#ff4e0025] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close CV"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-serif font-light text-white tracking-tight">
            {PERSONAL_INFO.name}
          </h2>
          <p className="text-xs font-mono text-[#ff4e00]">
            {PERSONAL_INFO.title} · {PERSONAL_INFO.institution}
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#8e9299] pt-1">
            <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-[#ff4e00]" /> {CONTACT_DATA.email}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#8e9299]" /> {CONTACT_DATA.location}</span>
            <span className="flex items-center gap-1"><Github className="w-3 h-3 text-[#8e9299]" /> github.com/saksham-AI500</span>
          </div>
        </div>

        {/* Education Block */}
        <div className="space-y-3 pt-3 border-t border-[#ffffff10]">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#ff4e00] flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </h3>
          <div className="p-4 rounded-xl bg-black/40 border border-[#ffffff10] space-y-1">
            <div className="flex justify-between items-start">
              <span className="font-light text-sm text-white">
                {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
              </span>
              <span className="font-mono text-xs text-[#ff4e00] font-semibold">{EDUCATION_DATA.timeline}</span>
            </div>
            <div className="text-xs text-[#8e9299]">{EDUCATION_DATA.institution}</div>
            <div className="text-xs text-[#8e9299]">Status: {EDUCATION_DATA.semesterInfo}</div>
            <div className="text-[11px] font-mono text-[#8e9299] pt-1">
              Coursework: Data Structures & Algorithms, Database Management Systems, Probability & Statistics, Machine Learning Fundamentals.
            </div>
          </div>
        </div>

        {/* Key Projects Block */}
        <div className="space-y-3 pt-3 border-t border-[#ffffff10]">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#ff4e00] flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>Engineering Projects</span>
          </h3>
          <div className="space-y-3">
            {PROJECTS_DATA.map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-black/40 border border-[#ffffff10] space-y-1.5">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm text-white">{proj.title}</span>
                  <span className="font-mono text-[10px] text-[#ff4e00] uppercase">{proj.category}</span>
                </div>
                <p className="text-xs text-[#8e9299] leading-relaxed">{proj.summary}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ffffff05] border border-[#ffffff10] text-[#8e9299]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Block */}
        <div className="space-y-3 pt-3 border-t border-[#ffffff10]">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#ff4e00] flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Verified Credentials</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {CERTIFICATIONS_DATA.map((c) => (
              <div key={c.id} className="p-3.5 rounded-xl bg-black/40 border border-[#ffffff10] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff4e00] shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">{c.title}</div>
                  <div className="text-[10px] font-mono text-[#8e9299]">{c.issuer} · Verified {c.issueYear}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
