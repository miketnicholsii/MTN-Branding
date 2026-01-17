import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

const clients = [
  { name: "Salesforce", industry: "CRM" },
  { name: "JPMorgan", industry: "Finance" },
  { name: "Deloitte", industry: "Consulting" },
  { name: "Microsoft", industry: "Tech" },
  { name: "Accenture", industry: "Consulting" },
  { name: "Oracle", industry: "Enterprise" },
  { name: "IBM", industry: "Tech" },
  { name: "Cisco", industry: "Networking" },
];

const LogoItem = ({ name, industry }: { name: string; industry: string }) => (
  <div 
    className="flex-shrink-0 px-8 sm:px-12 py-4 flex items-center justify-center"
  >
    <div className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300">
      <span 
        className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap"
        style={{ color: 'hsl(var(--offwhite))' }}
      >
        {name}
      </span>
      <span 
        className="text-[10px] uppercase tracking-widest"
        style={{ color: 'hsl(var(--softwhite))' }}
      >
        {industry}
      </span>
    </div>
  </div>
);

const ClientLogos = () => {
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
        <div className="flex overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
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
        <div className="flex overflow-hidden mt-4">
          <motion.div
            className="flex"
            animate={{ x: ["-50%", "0%"] }}
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
