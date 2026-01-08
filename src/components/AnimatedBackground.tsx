const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Clean light gradient - NÈKO style */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(60,10%,98%)] via-[hsl(60,10%,97%)] to-[hsl(60,8%,95%)]" />
      
      {/* Subtle teal accent orbs */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-drift-slow"
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] animate-drift-slow-reverse"
      />

      {/* Subtle grid - NÈKO style */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Decorative plant/leaf shapes like NÈKO - simplified */}
      <svg className="absolute top-20 left-10 w-32 h-48 opacity-10 text-primary" viewBox="0 0 100 150">
        <path d="M50 150 Q30 100 50 50 Q70 100 50 150 Z" fill="currentColor" />
      </svg>
      <svg className="absolute top-40 right-16 w-24 h-36 opacity-10 text-primary" viewBox="0 0 100 150">
        <path d="M50 150 Q20 80 50 30 Q80 80 50 150 Z" fill="currentColor" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
