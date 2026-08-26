import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
  rotation: number;
}

const PARTICLE_COLORS = [
  'rgba(6, 182, 212, 0.75)',   // Cyan 500
  'rgba(14, 165, 233, 0.7)',   // Sky 500
  'rgba(99, 102, 241, 0.65)',  // Indigo 500
  'rgba(168, 85, 247, 0.6)',   // Purple 500
  'rgba(52, 211, 153, 0.65)',  // Emerald 400
];

export const CursorParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for primary cursor ring & glow
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const trailConfig = { damping: 20, stiffness: 180, mass: 0.8 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  const lastSpawnPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);

  const particleCounterRef = useRef(0);

  useEffect(() => {
    // Detect touch device to prevent intrusive overlay on mobile screens
    if (typeof window !== 'undefined') {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (hasTouch && window.innerWidth < 768) {
        setIsTouchDevice(true);
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check distance moved to spawn subtle trailing kinetic particles
      const dx = e.clientX - lastSpawnPos.current.x;
      const dy = e.clientY - lastSpawnPos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 16) {
        lastSpawnPos.current = { x: e.clientX, y: e.clientY };

        const newParticle: Particle = {
          id: ++particleCounterRef.current,
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          size: Math.random() * 3.5 + 2,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
          vx: (Math.random() - 0.5) * 1.5 - (dx * 0.05),
          vy: (Math.random() - 0.5) * 1.5 - (dy * 0.05) - 0.4, // subtle float
          opacity: 0.85,
          scale: 1,
          rotation: Math.random() * 360,
        };

        setParticles((prev) => [...prev.slice(-24), newParticle]);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Burst 6 energetic sparkle particles on click
      const clickParticles: Particle[] = Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2 + Math.random() * 0.5;
        const speed = Math.random() * 3.5 + 1.8;
        return {
          id: ++particleCounterRef.current,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4.5 + 2.5,
          color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          opacity: 1,
          scale: 1.4,
          rotation: Math.random() * 360,
        };
      });

      setParticles((prev) => [...prev.slice(-20), ...clickParticles]);
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor-hover]');
      setIsHovered(!!isInteractive);
    };

    // Physics update loop for emitted particles
    let lastTime = performance.now();
    const updatePhysics = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * 60 * dt,
            y: p.y + p.vy * 60 * dt,
            vx: p.vx * 0.94,
            vy: p.vy * 0.94 - 0.08, // gentle upwards dispersion
            opacity: p.opacity - dt * 1.6,
            scale: Math.max(0, p.scale - dt * 1.2),
            rotation: p.rotation + 45 * dt,
          }))
          .filter((p) => p.opacity > 0.02 && p.scale > 0.05)
      );

      animFrameId.current = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleOver, { passive: true });

    animFrameId.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleOver);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible, cursorX, cursorY]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Particle Trail & Sparkles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            opacity: p.opacity,
            transform: `translate(-50%, -50%) scale(${p.scale}) rotate(${p.rotation}deg)`,
            transition: 'none',
          }}
        />
      ))}

      {/* Floating Ambient Halo / Soft Trail (Follows with gentle delay) */}
      <motion.div
        className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: trailX,
          top: trailY,
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          background: isHovered
            ? 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(99,102,241,0.08) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
          border: isHovered ? '1px solid rgba(6,182,212,0.45)' : '1px solid rgba(6,182,212,0.2)',
          transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease',
        }}
      />

      {/* Precise Central Cursor Pip (Crisp & immediate) */}
      <motion.div
        className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: smoothX,
          top: smoothY,
          width: isClicking ? 10 : isHovered ? 8 : 5,
          height: isClicking ? 10 : isHovered ? 8 : 5,
          backgroundColor: isHovered ? '#38bdf8' : '#06b6d4',
          boxShadow: isHovered
            ? '0 0 12px #38bdf8, 0 0 4px #fff'
            : '0 0 8px #06b6d4',
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
        }}
      />
    </div>
  );
};
