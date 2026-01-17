import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

const clients = [
  { name: "Luminary Studio", industry: "Digital Product & Brand Design", initials: "LS", gradient: "from-amber-400 to-orange-500" },
  { name: "Offset Labs", industry: "UX, Motion & Experimental Design", initials: "OL", gradient: "from-violet-400 to-purple-600" },
  { name: "Pixel & Form", industry: "Visual Identity & Interface Design", initials: "P&F", gradient: "from-cyan-400 to-blue-500" },
  { name: "Northframe", industry: "Brand Systems for Startups", initials: "NF", gradient: "from-emerald-400 to-teal-600" },
  { name: "Crafted Collective", industry: "Strategy-Led Design Studio", initials: "CC", gradient: "from-rose-400 to-pink-600" },
  { name: "Echoform", industry: "Human-Centered Product Design", initials: "EF", gradient: "from-sky-400 to-indigo-500" },
  { name: "Brightline Works", industry: "Design + Engineering Hybrid", initials: "BW", gradient: "from-yellow-400 to-amber-500" },
  { name: "Folded Space", industry: "Minimalist Branding & Web Design", initials: "FS", gradient: "from-slate-400 to-zinc-600" },
  { name: "Aureon Group", industry: "Global Brand & Experience Consultancy", initials: "AG", gradient: "from-amber-300 to-yellow-500" },
  { name: "Vertex Design Systems", industry: "Enterprise UX & Platform Design", initials: "VDS", gradient: "from-blue-400 to-cyan-500" },
  { name: "Helios Creative", industry: "End-to-End Brand Transformation", initials: "HC", gradient: "from-orange-400 to-red-500" },
  { name: "Monument Design Co.", industry: "Large-Scale Corporate Identity", initials: "MDC", gradient: "from-stone-400 to-neutral-600" },
  { name: "Atlas & Co.", industry: "Strategy, Design & Innovation", initials: "A&C", gradient: "from-teal-400 to-emerald-600" },
  { name: "NovaWorks Global", industry: "Digital Experience at Scale", initials: "NW", gradient: "from-fuchsia-400 to-purple-600" },
  { name: "Crestline Industries", industry: "Design, Technology & Research", initials: "CI", gradient: "from-lime-400 to-green-600" },
];

interface ClientType {
  name: string;
  industry: string;
  initials: string;
  gradient: string;
}

const LogoItem = ({ name, industry, initials, gradient }: ClientType) => (
  <div 
    className="flex-shrink-0 px-6 sm:px-10 py-4 flex items-center justify-center"
  >
    <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-300 group">
      {/* Stylized Logo Icon */}
      <div 
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <span className="text-white font-bold text-xs sm:text-sm tracking-tight">
          {initials}
        </span>
      </div>
      
      {/* Company Info */}
      <div className="flex flex-col gap-0.5">
        <span 
          className="text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap"
          style={{ color: 'hsl(var(--offwhite))' }}
        >
          {name}
        </span>
        <span 
          className="text-[9px] sm:text-[10px] uppercase tracking-widest"
          style={{ color: 'hsl(var(--softwhite) / 0.7)' }}
        >
          {industry}
        </span>
      </div>
    </div>
  </div>
);

const GridLogoItem = ({ name, industry, initials, gradient }: ClientType) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:bg-forest-900/50 group"
  >
    {/* Stylized Logo Icon */}
    <div 
      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
    >
      <span className="text-white font-bold text-sm sm:text-base tracking-tight">
        {initials}
      </span>
    </div>
    
    {/* Company Info */}
    <div className="flex flex-col items-center gap-1 text-center">
      <span 
        className="text-sm sm:text-base font-semibold tracking-tight"
        style={{ color: 'hsl(var(--offwhite))' }}
      >
        {name}
      </span>
      <span 
        className="text-[8px] sm:text-[9px] uppercase tracking-widest max-w-[140px]"
        style={{ color: 'hsl(var(--softwhite) / 0.6)' }}
      >
        {industry}
      </span>
    </div>
  </motion.div>
);

const ClientLogos = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  // Double the clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section 
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: 'hsl(var(--forest-950))' }}
    >
      <div className="container mx-auto px-6 lg:px-8 mb-10">
        <StaggerContainer className="text-center">
          <StaggerItem>
            <span 
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: 'hsl(var(--orange-500))' }}
            >
              Trusted By
            </span>
          </StaggerItem>
          <StaggerItem>
            <h3 
              className="text-xl sm:text-2xl font-semibold"
              style={{ color: 'hsl(var(--offwhite))' }}
            >
              Companies I've Partnered With
            </h3>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <AnimatePresence mode="wait">
        {!showGrid ? (
          <motion.div
            key="marquee"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Marquee container */}
            <div className="relative">
              {/* Gradient fade edges */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
                style={{ 
                  background: 'linear-gradient(to right, hsl(var(--forest-950)), transparent)' 
                }}
              />
              <div 
                className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
                style={{ 
                  background: 'linear-gradient(to left, hsl(var(--forest-950)), transparent)' 
                }}
              />

              {/* Scrolling track */}
              <div 
                className="flex overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <motion.div
                  className="flex"
                  animate={isPaused ? {} : { x: ["0%", "-50%"] }}
                  transition={{
                    x: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  {duplicatedClients.map((client, idx) => (
                    <LogoItem key={`${client.name}-${idx}`} {...client} />
                  ))}
                </motion.div>
              </div>

              {/* Second row - reverse direction */}
              <div 
                className="flex overflow-hidden mt-4 cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <motion.div
                  className="flex"
                  animate={isPaused ? {} : { x: ["-50%", "0%"] }}
                  transition={{
                    x: {
                      duration: 35,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  {duplicatedClients.map((client, idx) => (
                    <LogoItem key={`${client.name}-reverse-${idx}`} {...client} />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="container mx-auto px-6 lg:px-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
              {clients.map((client, idx) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <GridLogoItem {...client} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View All Partners Button */}
      <div className="container mx-auto px-6 lg:px-8 mt-8">
        <div className="flex justify-center">
          <motion.button
            onClick={() => setShowGrid(!showGrid)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border"
            style={{ 
              color: 'hsl(var(--offwhite))',
              borderColor: 'hsl(var(--offwhite) / 0.2)',
              background: 'hsl(var(--forest-900) / 0.5)'
            }}
            whileHover={{ 
              scale: 1.02,
              borderColor: 'hsl(var(--orange-500) / 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            {showGrid ? (
              <>
                <ChevronUp size={18} style={{ color: 'hsl(var(--orange-500))' }} />
                <span>Hide Partners</span>
              </>
            ) : (
              <>
                <ChevronDown size={18} style={{ color: 'hsl(var(--orange-500))' }} />
                <span>View All {clients.length} Partners</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Subtle divider line */}
      <div className="container mx-auto px-6 lg:px-8 mt-12">
        <div 
          className="h-px w-full max-w-md mx-auto"
          style={{ 
            background: 'linear-gradient(to right, transparent, hsla(var(--offwhite) / 0.15), transparent)' 
          }}
        />
      </div>
    </section>
  );
};

export default ClientLogos;
