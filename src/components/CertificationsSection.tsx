import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Code2, Layers, Sparkles, Terminal, X } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';
import { useCursor } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

export const CertificationsSection: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  const handleCertClick = (cert: Certification) => {
    setSelectedCert(cert);
    soundManager.playClick();
  };

  const handleClose = () => {
    setSelectedCert(null);
    soundManager.playClick();
  };

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]" />
              <span>CREDENTIAL VAULT // 05</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
              Verified <span className="italic font-serif text-[#ff4e00]">Credentials.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff4e00] bg-[#ff4e0010] px-3.5 py-1.5 rounded-full border border-[#ff4e0030]">
            <ShieldCheck className="w-4 h-4" />
            <span>4 Industry Verified Credentials</span>
          </div>
        </div>

        {/* Certifications Vault Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleCertClick(cert)}
              onMouseEnter={() => {
                soundManager.playHover();
                setCursorMode('pointer', 'CREDENTIAL');
              }}
              onMouseLeave={resetCursor}
              className="p-6 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] hover:border-[#ff4e00]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg hover:shadow-[0_0_25px_rgba(255,78,0,0.2)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header with Issuer & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#ff4e00] group-hover:border-[#ff4e00]/50 transition-colors">
                    {getBadgeIcon(cert.badge)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#ff4e00] bg-[#ff4e0010] px-2.5 py-0.5 rounded-full border border-[#ff4e0030]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <span className="text-[10px] font-mono text-[#8e9299] uppercase tracking-wider block">
                    {cert.issuer}
                  </span>
                  <h3 className="font-medium text-base sm:text-lg text-white group-hover:text-[#ff4e00] transition-colors mt-1">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-[#8e9299] line-clamp-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Info */}
              <div className="pt-4 mt-4 border-t border-[#ffffff10] flex items-center justify-between text-xs font-mono text-[#8e9299]">
                <span>Issued {cert.issueYear}</span>
                <span className="text-[#ff4e00] group-hover:translate-x-0.5 transition-transform">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Detail Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-lg bg-[#0a0a0a] border border-[#ffffff15] rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#ff4e00]">
                {getBadgeIcon(selectedCert.badge)}
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff4e00] uppercase tracking-wider">
                  {selectedCert.issuer} Credential
                </span>
                <h3 className="text-xl font-light text-white">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-[#ffffff10] space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#8e9299]">ISSUING AUTHORITY:</span>
                <span className="text-[#e0d8d0] font-medium">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#8e9299]">STATUS:</span>
                <span className="text-[#ff4e00] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Credential
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#8e9299]">ISSUE YEAR:</span>
                <span className="text-[#e0d8d0]">{selectedCert.issueYear}</span>
              </div>
            </div>

            <p className="text-sm text-[#8e9299] leading-relaxed">
              {selectedCert.description}
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleClose}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff4e00] text-black hover:bg-[#ff621e] transition-colors shadow-[0_0_20px_rgba(255,78,0,0.3)]"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
