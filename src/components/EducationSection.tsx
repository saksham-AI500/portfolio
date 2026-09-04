import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { useCursor } from '../context/CursorContext';

export const EducationSection: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();

  return (
    <section id="education" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]" />
              <span>ACADEMIC TRAJECTORY // 02</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
              Education & <span className="italic font-serif text-[#ff4e00]">Foundations.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff4e00] bg-[#ff4e0010] px-3.5 py-1.5 rounded-full border border-[#ff4e0030]">
            <Award className="w-3.5 h-3.5" />
            <span>B.Tech AI & ML (2024 – 2028)</span>
          </div>
        </div>

        {/* Timeline Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Institution Card */}
          <div
            onMouseEnter={() => setCursorMode('pointer', 'DEGREE')}
            onMouseLeave={resetCursor}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] hover:border-[#ff4e00]/40 transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#ff4e00]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ff4e0015] text-[#ff4e00] font-mono text-xs font-semibold border border-[#ff4e0040]">
                  {EDUCATION_DATA.semesterInfo}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-light text-white group-hover:text-[#ff4e00] transition-colors">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-base text-[#e0d8d0] font-light mt-0.5">
                  {EDUCATION_DATA.field}
                </p>
                <p className="text-sm text-[#8e9299] mt-2">
                  {EDUCATION_DATA.institution}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#8e9299] pt-3 border-t border-[#ffffff10]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ff4e00]" />
                  <span>{EDUCATION_DATA.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8e9299]" />
                  <span>{EDUCATION_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Timeline progress indicator */}
            <div className="mt-8 pt-4 border-t border-[#ffffff10]">
              <div className="flex justify-between text-xs font-mono text-[#8e9299] mb-1.5">
                <span>Progression to 2028 Graduation</span>
                <span className="text-[#ff4e00] font-bold">5th Semester</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#ffffff10] overflow-hidden relative">
                <div
                  className="h-full bg-[#ff4e00] rounded-full shadow-[0_0_12px_rgba(255,78,0,0.6)]"
                  style={{ width: '62%' }}
                />
              </div>
            </div>
          </div>

          {/* Core Coursework Matrix */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8e9299]">
              <BookOpen className="w-4 h-4 text-[#ff4e00]" />
              <span>Rigorous Foundational Coursework</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {EDUCATION_DATA.coursework.map((course) => (
                <div
                  key={course.code}
                  onMouseEnter={() => setCursorMode('pointer', course.code)}
                  onMouseLeave={resetCursor}
                  className="p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:border-[#ff4e00]/40 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#ff4e00] font-bold tracking-wider">
                      {course.code}
                    </span>
                    <CheckCircle className="w-3 h-3 text-[#ff4e00]" />
                  </div>
                  <h4 className="font-medium text-sm text-[#e0d8d0]">
                    {course.title}
                  </h4>
                  <p className="text-[11px] font-mono text-[#8e9299]">
                    {course.category}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] text-xs text-[#8e9299] leading-relaxed">
              <span className="font-mono text-[#ff4e00] font-bold tracking-wider uppercase">ACADEMIC EMPHASIS: </span>
              Rigorous grounding in algorithmic complexity, relational data integrity, probability theory for machine learning inference, and empirical loss convergence.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
