import { memo } from "react";

const AnimatedBackground = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 will-change-auto">
      {/* Clean light gradient - GPU accelerated */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "linear-gradient(to bottom, hsl(60 10% 98%), hsl(60 10% 97%), hsl(60 8% 95%))",
          transform: "translateZ(0)",
        }} 
      />
      
      {/* Subtle accent orbs - use transform for GPU acceleration */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />

      {/* Subtle grid - simplified for performance */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: "translateZ(0)",
        }}
      />

      {/* Decorative shapes - hidden on mobile for performance */}
      <svg 
        className="absolute top-20 left-10 w-32 h-48 opacity-10 text-primary hidden md:block" 
        viewBox="0 0 100 150"
        aria-hidden="true"
      >
        <path d="M50 150 Q30 100 50 50 Q70 100 50 150 Z" fill="currentColor" />
      </svg>
      <svg 
        className="absolute top-40 right-16 w-24 h-36 opacity-10 text-primary hidden md:block" 
        viewBox="0 0 100 150"
        aria-hidden="true"
      >
        <path d="M50 150 Q20 80 50 30 Q80 80 50 150 Z" fill="currentColor" />
      </svg>
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
