import React, { useState } from 'react';
import { Brain, Cpu, Database, Cloud, Network, Bot, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useCursor } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

const KEYWORD_PILLARS = [
  {
    name: 'Machine Learning',
    icon: Brain,
    description: 'Time-series forecasting with Prophet/ARIMA, gradient boosting via XGBoost, and neural modeling with PyTorch.',
    border: 'border-[#ff4e00]/60',
    textColor: 'text-[#ff4e00]',
  },
  {
    name: 'LLM & AI Engineering',
    icon: Bot,
    description: 'Autonomous multi-provider agents, structured prompt pipelines, RAG retrieval mechanisms, and custom Obsidian tooling.',
    border: 'border-[#ff4e00]/60',
    textColor: 'text-[#ff4e00]',
  },
  {
    name: 'NLP & Embeddings',
    icon: Sparkles,
    description: 'Text preprocessing, semantic embeddings, document summarization, and contextual keyword categorization.',
    border: 'border-[#ff4e00]/60',
    textColor: 'text-[#ff4e00]',
  },
  {
    name: 'Backend Architecture',
    icon: Database,
    description: 'High-throughput asynchronous FastAPI REST endpoints, SQLAlchemy ORM, and relational PostgreSQL database tuning.',
    border: 'border-[#ff4e00]/60',
    textColor: 'text-[#ff4e00]',
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Google Cloud Platform environments, GKE container deployments, reproducible environments, and GitHub CI/CD workflows.',
    border: 'border-[#ff4e00]/60',
    textColor: 'text-[#ff4e00]',
  },
  {
    name: 'System Architecture',
    icon: Network,
    description: 'Bridging deep learning research into resilient, fault-tolerant production applications with offline SQLite sync.',
    border: 'border-[#ff4e00]/60',
    textColor: 'text-[#ff4e00]',
  },
];

export const AboutSection: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const handlePillarHover = (name: string) => {
    setActivePillar(name);
    soundManager.playHover();
    setCursorMode('pointer', 'INSPECT');
  };

  const handlePillarLeave = () => {
    setActivePillar(null);
    resetCursor();
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]" />
              <span>KNOWLEDGE FIELD // 01</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
              Philosophy & <span className="italic font-serif text-[#ff4e00]">Pillars.</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#8e9299] max-w-sm uppercase tracking-wider">
            {PERSONAL_INFO.institution}
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] space-y-5">
            <h3 className="text-xl sm:text-2xl font-light text-[#e0d8d0] flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-[#ff4e00]" />
              <span>Engineering Practical Artificial Intelligence</span>
            </h3>

            <p className="text-sm sm:text-base text-[#8e9299] leading-relaxed">
              I am an AI/ML student at <span className="text-[#e0d8d0] font-medium">Delhi Technical Campus (GGSIPU, New Delhi)</span>, dedicated to the discipline of transforming algorithmic breakthroughs into production software.
            </p>

            <p className="text-sm sm:text-base text-[#8e9299] leading-relaxed">
              Rather than treating machine learning as isolated notebooks, my engineering ethos treats models as core backend systems. From orchestrating multi-provider LLM pipelines to architecting low-latency time-series prediction microservices, I design end-to-end applications that are scalable, verifiable, and resilient.
            </p>

            <div className="pt-3 border-t border-[#ffffff10] space-y-2.5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#ff4e00]">Core Engineering Principles:</div>
              <ul className="space-y-2 text-xs text-[#8e9299] font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4e00] shrink-0" />
                  <span>Production-grade modular code over prototype hacks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4e00] shrink-0" />
                  <span>Real-time benchmark verification and backtested metrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4e00] shrink-0" />
                  <span>Graceful offline resilience and local-first data privacy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KEYWORD_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === pillar.name;

              return (
                <div
                  key={pillar.name}
                  onMouseEnter={() => handlePillarHover(pillar.name)}
                  onMouseLeave={handlePillarLeave}
                  className={`p-5 rounded-2xl transition-all duration-300 border bg-[#ffffff05] backdrop-blur-xl relative overflow-hidden ${
                    isSelected
                      ? `${pillar.border} shadow-[0_0_25px_rgba(255,78,0,0.25)] scale-[1.02] bg-[#ffffff08]`
                      : 'border-[#ffffff10] hover:border-[#ffffff20]'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`p-2 rounded-xl bg-[#ffffff05] border border-[#ffffff15] ${pillar.textColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm text-[#e0d8d0]">
                      {pillar.name}
                    </span>
                  </div>

                  <p className="text-xs text-[#8e9299] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
