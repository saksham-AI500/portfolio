import React, { useState } from 'react';
import { Network, Terminal, Brain, Database, Cloud, Smartphone, Sparkles, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { useCursor } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();
  const [activeCategory, setActiveCategory] = useState<string>('AI / Machine Learning');
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; tag: string; description: string } | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return <Terminal className="w-4 h-4" />;
      case 'AI / Machine Learning': return <Brain className="w-4 h-4" />;
      case 'AI Engineering': return <Sparkles className="w-4 h-4" />;
      case 'Backend / Data': return <Database className="w-4 h-4" />;
      case 'Cloud / DevOps': return <Cloud className="w-4 h-4" />;
      case 'App Development': return <Smartphone className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  const handleSkillHover = (skill: { name: string; tag: string; description: string }) => {
    setSelectedSkill(skill);
    soundManager.playHover();
    setCursorMode('pointer', skill.name.toUpperCase());
  };

  const handleSkillLeave = () => {
    resetCursor();
  };

  const currentCategoryData = SKILLS_DATA.find((c) => c.category === activeCategory) || SKILLS_DATA[1];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]" />
              <span>TECHNOLOGY NETWORK // 04</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
              Skills & <span className="italic font-serif text-[#ff4e00]">Engineering Stack.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff4e00] bg-[#ff4e0010] px-3.5 py-1.5 rounded-full border border-[#ff4e0030]">
            <Network className="w-3.5 h-3.5" />
            <span>Central Node: AI Engineering</span>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {SKILLS_DATA.map((cat) => {
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => {
                  setActiveCategory(cat.category);
                  soundManager.playModeChange();
                }}
                onMouseEnter={() => {
                  soundManager.playHover();
                  setCursorMode('pointer', cat.category.toUpperCase());
                }}
                onMouseLeave={resetCursor}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#ff4e0015] text-[#ff4e00] border-[#ff4e0040] shadow-[0_0_15px_rgba(255,78,0,0.2)]'
                    : 'bg-[#ffffff05] text-[#8e9299] border-[#ffffff10] hover:text-[#e0d8d0] hover:border-[#ffffff20]'
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
                <span className="text-[10px] text-[#ff4e00]/80 font-semibold ml-1">
                  ({cat.skills.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display & Skill Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Skills Cluster */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-light text-white flex items-center gap-2">
                  <span className="text-[#ff4e00]">{getCategoryIcon(currentCategoryData.category)}</span>
                  <span>{currentCategoryData.category}</span>
                </h3>
                <span className="text-xs font-mono text-[#ff4e00]">
                  {currentCategoryData.skills.length} Stack Items
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#8e9299] mt-1">
                {currentCategoryData.description}
              </p>
            </div>

            {/* Grid of Skill Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {currentCategoryData.skills.map((skill) => {
                const isHovered = selectedSkill?.name === skill.name;
                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => handleSkillHover(skill)}
                    onMouseLeave={handleSkillLeave}
                    className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? 'bg-[#ff4e0015] border-[#ff4e00]/60 shadow-[0_0_20px_rgba(255,78,0,0.25)] scale-[1.02]'
                        : 'bg-[#ffffff05] border-[#ffffff10] hover:border-[#ffffff20]'
                    }`}
                  >
                    <div className="font-medium text-sm text-[#e0d8d0]">
                      {skill.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#ff4e00] mt-0.5">
                      {skill.tag}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Node Telemetry Inspector */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff15] space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#ffffff10] pb-3">
              <span className="text-xs font-mono uppercase text-[#ff4e00] tracking-widest">
                NODE TELEMETRY
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ff4e00] animate-pulse" />
            </div>

            {selectedSkill ? (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-2xl font-light text-white">
                    {selectedSkill.name}
                  </h4>
                  <p className="text-xs font-mono text-[#ff4e00] mt-0.5">
                    {selectedSkill.tag}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-[#ffffff10]">
                  <span className="text-[10px] font-mono uppercase text-[#8e9299] block mb-1">
                    Application & Utility
                  </span>
                  <p className="text-xs text-[#8e9299] leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center space-y-2 text-[#8e9299]">
                <Sparkles className="w-6 h-6 mx-auto text-[#ff4e00]/60" />
                <p className="text-xs font-mono text-[#8e9299]">
                  Hover over any technology node to inspect its architectural role
                </p>
              </div>
            )}

            <div className="pt-3 border-t border-[#ffffff10] text-[11px] font-mono text-[#8e9299] flex items-center justify-between">
              <span>ACTIVE CLUSTER</span>
              <span className="text-[#ff4e00]">{activeCategory}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
