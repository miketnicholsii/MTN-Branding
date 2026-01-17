import { memo } from "react";

const AnimatedBackground = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 will-change-auto">
      {/* Rich gradient base - forest-700 primary - GPU accelerated */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--forest-950) / 0.4), transparent),
            radial-gradient(ellipse 60% 40% at 100% 50%, hsl(var(--orange-500) / 0.08), transparent),
            radial-gradient(ellipse 70% 60% at 0% 80%, hsl(var(--forest-900) / 0.3), transparent),
            hsl(var(--forest-700))
          `,
          transform: "translateZ(0)",
        }} 
      />
      
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full blur-[150px] animate-float-gentle"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--forest-900) / 0.5), transparent 70%)",
          transform: "translate3d(0, 0, 0)" 
        }}
      />
      <div 
        className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] animate-breathe"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--orange-500) / 0.12), transparent 70%)",
          transform: "translate3d(0, 0, 0)",
          animationDelay: "-2s"
        }}
      />
      <div 
        className="absolute bottom-[-5%] right-[20%] w-[500px] h-[500px] rounded-full blur-[100px] animate-float-gentle"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--forest-950) / 0.4), transparent 70%)",
          transform: "translate3d(0, 0, 0)",
          animationDelay: "-4s"
        }}
      />
      <div 
        className="absolute bottom-[30%] left-[30%] w-[400px] h-[400px] rounded-full blur-[80px] animate-breathe"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--forest-900) / 0.3), transparent 70%)",
          transform: "translate3d(0, 0, 0)",
          animationDelay: "-3s"
        }}
      />

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          transform: "translateZ(0)",
        }}
      />

      {/* Refined grid pattern - subtle on dark background */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--offwhite) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--offwhite) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: "translateZ(0)",
        }}
      />
      
      {/* Accent grid intersections */}
      <div 
        className="absolute inset-0 opacity-[0.06] hidden md:block"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--orange-500) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          transform: "translateZ(0)",
        }}
      />

      {/* Decorative botanical shapes - hidden on mobile */}
      <svg 
        className="absolute top-16 left-8 w-40 h-56 opacity-[0.08] hidden lg:block animate-float-gentle" 
        viewBox="0 0 100 150"
        aria-hidden="true"
        style={{ animationDuration: "8s", color: 'hsl(var(--forest-950))' }}
      >
        <path d="M50 150 Q25 110 35 70 Q45 30 50 10 Q55 30 65 70 Q75 110 50 150 Z" fill="currentColor" />
        <path d="M50 140 Q30 100 50 60 Q70 100 50 140 Z" fill="currentColor" opacity="0.5" />
      </svg>
      <svg 
        className="absolute top-32 right-12 w-32 h-44 opacity-[0.06] hidden lg:block animate-breathe" 
        viewBox="0 0 100 150"
        aria-hidden="true"
        style={{ animationDelay: "-2s", animationDuration: "10s", color: 'hsl(var(--forest-900))' }}
      >
        <path d="M50 150 Q15 90 40 40 Q50 20 60 40 Q85 90 50 150 Z" fill="currentColor" />
      </svg>
      <svg 
        className="absolute bottom-32 left-20 w-28 h-40 opacity-[0.08] hidden lg:block animate-float-gentle" 
        viewBox="0 0 100 150"
        aria-hidden="true"
        style={{ animationDelay: "-5s", animationDuration: "12s", color: 'hsl(var(--orange-500))' }}
      >
        <ellipse cx="50" cy="75" rx="30" ry="60" fill="currentColor" />
      </svg>

      {/* Geometric accents */}
      <div className="absolute top-[15%] right-[15%] w-64 h-64 opacity-[0.05] hidden md:block">
        <div className="absolute inset-0 rounded-full animate-pulse-soft" style={{ border: '1px solid hsl(var(--offwhite) / 0.2)' }} />
        <div className="absolute inset-4 rounded-full animate-pulse-soft" style={{ border: '1px solid hsl(var(--offwhite) / 0.15)', animationDelay: "-1s" }} />
        <div className="absolute inset-8 rounded-full animate-pulse-soft" style={{ border: '1px solid hsl(var(--orange-500) / 0.2)', animationDelay: "-2s" }} />
      </div>
      
      <div className="absolute bottom-[20%] right-[8%] w-48 h-48 opacity-[0.03] hidden lg:block">
        <div className="absolute inset-0 rotate-45 animate-breathe" style={{ border: '1px solid hsl(var(--offwhite) / 0.2)' }} />
        <div className="absolute inset-4 rotate-45 animate-breathe" style={{ border: '1px solid hsl(var(--offwhite) / 0.15)', animationDelay: "-1.5s" }} />
      </div>
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;