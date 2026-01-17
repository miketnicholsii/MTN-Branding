import { useMemo, memo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const ParticleField = memo(() => {
  const prefersReducedMotion = useReducedMotion();

  // Reduced particle count for better performance
  const particles = useMemo(() => {
    // Skip particles entirely if user prefers reduced motion
    if (prefersReducedMotion) return [];
    
    const count = window.innerWidth < 768 ? 5 : 10; // Fewer particles on mobile
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 5,
      });
    }
    return newParticles;
  }, [prefersReducedMotion]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/10 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
      ))}
    </div>
  );
});

ParticleField.displayName = "ParticleField";

export default ParticleField;
