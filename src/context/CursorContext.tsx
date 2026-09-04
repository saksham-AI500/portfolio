import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { CursorMode, CursorState } from '../types';

interface CursorContextType {
  cursorState: CursorState;
  setCursorMode: (mode: CursorMode, label?: string, color?: string) => void;
  resetCursor: () => void;
  isTouchDevice: boolean;
  prefersReducedMotion: boolean;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorState, setCursorState] = useState<CursorState>({
    mode: 'default',
    label: undefined,
    active: false,
    isClicking: false,
  });

  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check device capabilities on mount
  useEffect(() => {
    const checkCapabilities = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 768;
      const touchActive = hasTouch && (isCoarse || isSmallScreen);
      setIsTouchDevice(touchActive);

      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(motionQuery.matches);

      if (!touchActive && !motionQuery.matches) {
        document.body.classList.add('custom-cursor-enabled');
      } else {
        document.body.classList.remove('custom-cursor-enabled');
      }
    };

    checkCapabilities();

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        document.body.classList.remove('custom-cursor-enabled');
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);
    window.addEventListener('resize', checkCapabilities);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkCapabilities);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  const setCursorMode = useCallback((mode: CursorMode, label?: string, color?: string) => {
    setCursorState((prev) => ({
      ...prev,
      mode,
      label,
      color,
      active: true,
    }));
  }, []);

  const resetCursor = useCallback(() => {
    setCursorState((prev) => ({
      ...prev,
      mode: 'default',
      label: undefined,
      color: undefined,
      active: true,
    }));
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursorState,
        setCursorMode,
        resetCursor,
        isTouchDevice,
        prefersReducedMotion,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

/**
 * Hook to easily wire cursor hover triggers onto any element
 */
export const useCursorTrigger = (mode: CursorMode = 'pointer', label?: string, color?: string) => {
  const { setCursorMode, resetCursor, isTouchDevice } = useCursor();

  if (isTouchDevice) {
    return {};
  }

  return {
    onMouseEnter: () => setCursorMode(mode, label, color),
    onMouseLeave: () => resetCursor(),
  };
};

/**
 * Magnetic element hook for buttons & interactive badges.
 * Displaces target smoothly toward the mouse by a bounded offset (max 8px).
 */
export const useMagnetic = (intensity: number = 0.3, maxDisplacement: number = 8) => {
  const ref = useRef<HTMLElement | null>(null);
  const { prefersReducedMotion, isTouchDevice } = useCursor();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion || isTouchDevice) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Bound displacement
      targetX = Math.max(Math.min(dx * intensity, maxDisplacement), -maxDisplacement);
      targetY = Math.max(Math.min(dy * intensity, maxDisplacement), -maxDisplacement);
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      // Lerp back or towards target
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      if (Math.abs(currentX) > 0.05 || Math.abs(currentY) > 0.05 || Math.abs(targetX) > 0.05) {
        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      } else {
        el.style.transform = 'translate3d(0, 0, 0)';
      }

      animId = requestAnimationFrame(animate);
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
      if (el) el.style.transform = '';
    };
  }, [intensity, maxDisplacement, prefersReducedMotion, isTouchDevice]);

  return ref;
};
