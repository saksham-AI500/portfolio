import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_DATA, CONTACT_DATA } from '../data/portfolioData';
import { useCursor } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

interface CommandTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandTerminal: React.FC<CommandTerminalProps> = ({ isOpen, onClose }) => {
  const { setCursorMode, resetCursor } = useCursor();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ text: string; type: 'cmd' | 'output' | 'system' }>>([
    { text: 'SAKSHAM.OS v3.2.0 [AI-KERNEL INITIALIZED]', type: 'system' },
    { text: 'Type "help" for a list of available neural commands.', type: 'system' },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    soundManager.playClick();
    const newHistory = [...history, { text: `$ ${input}`, type: 'cmd' as const }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'AVAILABLE COMMANDS:', type: 'system' },
          { text: '  about      - Core profile and university information', type: 'output' },
          { text: '  projects   - Summary of key production repositories', type: 'output' },
          { text: '  skills     - Summary of technical capabilities', type: 'output' },
          { text: '  contact    - Communication endpoints', type: 'output' },
          { text: '  clear      - Clear terminal window buffer', type: 'output' },
          { text: '  exit       - Close this terminal session', type: 'output' }
        );
        break;

      case 'about':
        newHistory.push(
          { text: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`, type: 'output' },
          { text: `${PERSONAL_INFO.institution}`, type: 'output' },
          { text: `${PERSONAL_INFO.shortBio}`, type: 'output' }
        );
        break;

      case 'projects':
        newHistory.push({ text: 'FEATURED PROJECTS:', type: 'system' });
        PROJECTS_DATA.forEach((p) => {
          newHistory.push({ text: `• ${p.title} [${p.category}]: ${p.summary}`, type: 'output' });
        });
        break;

      case 'skills':
        newHistory.push({ text: 'PRIMARY TECHNICAL STACK:', type: 'system' });
        SKILLS_DATA.forEach((s) => {
          newHistory.push({ text: `[${s.category}]: ${s.skills.map(k => k.name).join(', ')}`, type: 'output' });
        });
        break;

      case 'contact':
        newHistory.push(
          { text: `Email: ${CONTACT_DATA.email}`, type: 'output' },
          { text: `GitHub: ${CONTACT_DATA.github}`, type: 'output' },
          { text: `LinkedIn: ${CONTACT_DATA.linkedin}`, type: 'output' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push({ text: `Unknown command "${cmd}". Type "help" for instructions.`, type: 'system' });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#080808] border border-[#ffffff15] rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden font-mono text-xs flex flex-col h-[480px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="bg-[#121212] border-b border-[#ffffff10] px-4 py-3 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#ff4e00]" />
            <span className="text-[#e0d8d0] font-medium text-[11px] tracking-wide">saksham@ai-core: ~</span>
          </div>

          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Terminal"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Terminal Output */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-[#8e9299]">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.type === 'cmd'
                  ? 'text-[#ff4e00] font-semibold'
                  : line.type === 'system'
                  ? 'text-[#e0d8d0]'
                  : 'text-[#8e9299]'
              }`}
            >
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input */}
        <form onSubmit={handleCommand} className="p-3 bg-black/60 border-t border-[#ffffff10] flex items-center gap-2">
          <span className="text-[#ff4e00] font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command ('help', 'projects', 'about', 'clear')..."
            className="flex-1 bg-transparent text-[#e0d8d0] placeholder:text-[#50555e] focus:outline-none text-xs"
          />
          <button
            type="submit"
            className="p-1.5 text-[#ff4e00] hover:text-[#ff621e]"
            aria-label="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
