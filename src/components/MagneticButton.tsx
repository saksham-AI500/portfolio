import React, { useRef, useEffect } from 'react';
import { useCursor, useMagnetic } from '../context/CursorContext';
import { soundManager } from '../utils/audio';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  cursorMode?: 'pointer' | 'project' | 'external' | 'three' | 'default';
  cursorLabel?: string;
  cursorColor?: string;
  className?: string;
  intensity?: number;
  maxDistance?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  cursorMode = 'pointer',
  cursorLabel,
  cursorColor,
  className = '',
  intensity = 0.25,
  maxDistance = 8,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const { setCursorMode, resetCursor, isTouchDevice, prefersReducedMotion } = useCursor();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || isTouchDevice || prefersReducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;

    // Subtle magnetic radius around the button
    const proximityThreshold = 70;

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Skip if button is completely off-screen
      if (rect.bottom < 0 || rect.top > window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) {
        targetX = 0;
        targetY = 0;
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy);

      const effectiveRadius = Math.max(rect.width, rect.height) * 0.5 + proximityThreshold;

      if (dist < effectiveRadius) {
        // Smooth non-linear falloff so movement is minimal and natural
        const factor = (1 - dist / effectiveRadius);
        const pull = factor * factor;
        targetX = Math.max(Math.min(dx * intensity * pull, maxDistance), -maxDistance);
        targetY = Math.max(Math.min(dy * intensity * pull, maxDistance), -maxDistance);
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const handleWindowMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const loop = () => {
      // Smooth lerp back to 0 or towards target
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      if (Math.abs(currentX) > 0.04 || Math.abs(currentY) > 0.04 || Math.abs(targetX) > 0.04) {
        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      } else if (el.style.transform && el.style.transform !== 'translate3d(0px, 0px, 0px)') {
        el.style.transform = 'translate3d(0px, 0px, 0px)';
      }

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleWindowMouseLeave);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      document.removeEventListener('mouseleave', handleWindowMouseLeave);
      cancelAnimationFrame(animId);
      if (el) el.style.transform = '';
    };
  }, [intensity, maxDistance, isTouchDevice, prefersReducedMotion]);

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundManager.playHover();
    setCursorMode(cursorMode, cursorLabel, cursorColor);
    onMouseEnter?.(e);
  };

  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    resetCursor();
    onMouseLeave?.(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundManager.playClick();
    onClick?.(e);
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={`transition-[box-shadow,background-color,border-color,color] will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
