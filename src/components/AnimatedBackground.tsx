const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(168,50%,16%)] via-[hsl(168,50%,10%)] to-[hsl(168,55%,6%)]" />
      
      {/* Static gradient orbs with CSS animations for better performance */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-drift-slow"
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-drift-slow-reverse"
      />

      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Single subtle ring */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full animate-rotate-slow"
      />
    </div>
  );
};

export default AnimatedBackground;
