import React, { useEffect, useRef, useState } from 'react';
import { useCursor } from '../context/CursorContext';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const { cursorState, isTouchDevice, prefersReducedMotion } = useCursor();

  // Mouse coordinates (immediate target)
  const targetPos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  // Dot position (follows closely)
  const dotPos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  // Ring position (smooth trailing lerp)
  const ringPos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [autoHover, setAutoHover] = useState<{ mode: 'pointer' | 'external' | 'project'; label: string } | null>(null);

  useEffect(() => {
    // If on mobile or touch device, do not mount cursor logic
    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const rippleId = Date.now();
      const x = e.clientX;
      const y = e.clientY;
      setRipples((prev) => [...prev.slice(-4), { id: rippleId, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 450);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setAutoHover(null);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
        setAutoHover(null);
      }
    };

    const handleWindowBlur = () => {
      setIsVisible(false);
      setAutoHover(null);
    };

    // Auto-detect interactive targets under cursor
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactiveEl = target.closest('a, button, [role="button"], [data-cursor], [data-cursor-label]') as HTMLElement | null;
      if (interactiveEl) {
        const explicitLabel = interactiveEl.getAttribute('data-cursor-label');
        const isExternal = interactiveEl.tagName === 'A' && (
          interactiveEl.getAttribute('target') === '_blank' ||
          (interactiveEl.getAttribute('href') || '').startsWith('http')
        );
        const isProject = interactiveEl.closest('#projects') !== null || interactiveEl.getAttribute('data-cursor') === 'project';

        if (explicitLabel) {
          setAutoHover({ mode: isExternal ? 'external' : 'pointer', label: explicitLabel });
        } else if (isExternal) {
          setAutoHover({ mode: 'external', label: '↗' });
        } else if (isProject) {
          setAutoHover({ mode: 'project', label: 'VIEW' });
        } else {
          setAutoHover({ mode: 'pointer', label: 'OPEN' });
        }
      } else {
        setAutoHover(null);
      }
    };

    // Main 60 FPS GPU-accelerated render loop using lerp
    const render = () => {
      const lerpFactorDot = 0.45; // Dot follows closely
      const lerpFactorRing = 0.16; // Ring trails smoothly

      dotPos.current.x += (targetPos.current.x - dotPos.current.x) * lerpFactorDot;
      dotPos.current.y += (targetPos.current.y - dotPos.current.y) * lerpFactorDot;

      ringPos.current.x += (targetPos.current.x - ringPos.current.x) * lerpFactorRing;
      ringPos.current.y += (targetPos.current.y - ringPos.current.y) * lerpFactorRing;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      cancelAnimationFrame(animId);
    };
  }, [isTouchDevice, prefersReducedMotion, isVisible]);

  // Do not render if touch device or reduced motion
  if (isTouchDevice || prefersReducedMotion) {
    return null;
  }

  // Active mode and label resolution (Context takes precedence, auto-hover is fallback)
  const activeMode = cursorState.mode !== 'default'
    ? cursorState.mode
    : (autoHover?.mode || 'default');

  const activeLabel = cursorState.label || autoHover?.label || '';

  // Determine state-based sizing & styling matching the Immersive UI theme
  let ringSize = 'w-11 h-11 -ml-[22px] -mt-[22px]';
  let ringBorder = 'border-[#ff4e00]/60 bg-[#ff4e0005] backdrop-blur-[2px]';
  let dotSize = 'w-1.5 h-1.5 -ml-[3px] -mt-[3px]';
  let dotColor = 'bg-[#ff4e00] shadow-[0_0_10px_#ff4e00]';
  let hasGlow = 'shadow-[0_0_20px_rgba(255,78,0,0.25)]';
  let showInnerContent = false;

  if (activeMode === 'pointer') {
    // Ring expands to show label (e.g. 'OPEN', 'CLICK')
    ringSize = activeLabel ? 'w-16 h-16 -ml-8 -mt-8' : 'w-13 h-13 -ml-[26px] -mt-[26px]';
    ringBorder = 'border-[#ff4e00] bg-[#ff4e0020] backdrop-blur-[3px]';
    dotSize = activeLabel ? 'w-0 h-0 opacity-0' : 'w-2 h-2 -ml-1 -mt-1';
    dotColor = 'bg-[#ff4e00] shadow-[0_0_12px_#ff4e00]';
    hasGlow = 'shadow-[0_0_28px_rgba(255,78,0,0.5)]';
    showInnerContent = Boolean(activeLabel);
  } else if (activeMode === 'project') {
    // Ring expands to show 'VIEW'
    ringSize = 'w-18 h-18 -ml-9 -mt-9';
    ringBorder = 'border-[#ff4e00] bg-[#ff4e0025] backdrop-blur-[4px]';
    dotSize = 'w-0 h-0 opacity-0';
    dotColor = 'bg-[#ff4e00]';
    hasGlow = 'shadow-[0_0_35px_rgba(255,78,0,0.6)]';
    showInnerContent = true;
  } else if (activeMode === 'external') {
    // External link: displays small '↗' indicator inside ring
    ringSize = 'w-14 h-14 -ml-7 -mt-7';
    ringBorder = 'border-[#ff4e00] bg-[#ff4e0018] backdrop-blur-[3px]';
    dotSize = 'w-0 h-0 opacity-0';
    dotColor = 'bg-[#ff4e00]';
    hasGlow = 'shadow-[0_0_25px_rgba(255,78,0,0.45)]';
    showInnerContent = true;
  } else if (activeMode === 'three') {
    // Three.js 3D hover: dramatic intense radial glow and pulsing inspection state
    ringSize = 'w-24 h-24 -ml-12 -mt-12 scale-105';
    ringBorder = 'border-2 border-dashed border-[#ff4e00] bg-[#ff4e0020] backdrop-blur-[4px] animate-[spin_8s_linear_infinite]';
    dotSize = 'w-2.5 h-2.5 -ml-[5px] -mt-[5px]';
    dotColor = 'bg-[#ffffff] shadow-[0_0_16px_#ff4e00] animate-pulse';
    hasGlow = 'shadow-[0_0_50px_rgba(255,78,0,0.85),inset_0_0_20px_rgba(255,78,0,0.4)]';
    showInnerContent = false;
  } else if (activeMode === 'hidden') {
    ringSize = 'w-0 h-0 opacity-0';
    dotSize = 'w-0 h-0 opacity-0';
  }

  return (
    <div
      id="custom-cursor-container"
      className={`fixed inset-0 pointer-events-none z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute top-0 left-0 -ml-7 -mt-7 w-14 h-14 rounded-full border-2 border-[#ff4e00] bg-[#ff4e00]/25 animate-cursor-ripple pointer-events-none will-change-transform"
          style={{ transform: `translate3d(${ripple.x}px, ${ripple.y}px, 0)` }}
        />
      ))}

      {/* Outer Soft Ring with brief click scale-down */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full border will-change-transform flex items-center justify-center transition-[width,height,margin,border-color,background-color,transform] duration-200 ease-out ${
          isClicking ? 'scale-80' : 'scale-100'
        } ${ringSize} ${ringBorder} ${hasGlow}`}
      >
        {/* Inner Content (Text like 'VIEW', 'OPEN', or external '↗') */}
        {showInnerContent && (
          <div className="flex items-center justify-center select-none animate-in fade-in zoom-in-75 duration-150">
            {activeMode === 'external' ? (
              <span className="text-[#ff4e00] text-base font-black leading-none drop-shadow-[0_0_8px_rgba(255,78,0,0.8)]">
                ↗
              </span>
            ) : (
              <span className="text-white text-[9px] font-mono font-bold tracking-widest uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {activeLabel || (activeMode === 'project' ? 'VIEW' : 'OPEN')}
              </span>
            )}
          </div>
        )}

        {/* Floating Top Badge Tag for explicit or 3D inspection */}
        {!showInnerContent && activeLabel && (
          <div className="absolute -top-7 whitespace-nowrap bg-[#ff4e00] text-black text-[9px] font-bold px-2 py-0.5 rounded tracking-widest uppercase shadow-lg select-none">
            {activeLabel}
          </div>
        )}

        {/* Telemetry Micro-Indicator for 3D or Project Inspection */}
        {(activeMode === 'three' || activeMode === 'project') && (
          <div className="absolute -bottom-5 text-[#ff4e00] text-[8px] tracking-[0.2em] font-mono font-bold opacity-90 whitespace-nowrap select-none drop-shadow-[0_0_6px_#ff4e00]">
            {activeMode === 'three' ? 'CORE // ACTIVE 3D' : 'EXPLORE // READY'}
          </div>
        )}
      </div>

      {/* Small Central Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full will-change-transform pointer-events-none transition-[width,height,margin,background-color,transform] duration-150 ${
          isClicking ? 'scale-125' : 'scale-100'
        } ${dotSize} ${dotColor}`}
      />
    </div>
  );
};

