import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Brain, Palette, Rocket, Zap } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const capabilities = [
  {
    icon: Target,
    title: "Product Strategy",
    description: "Translating vision into actionable roadmaps aligned with user needs.",
  },
  {
    icon: Users,
    title: "Agile Leadership",
    description: "Coaching teams through Scrum, Kanban, and hybrid methodologies.",
  },
  {
    icon: Brain,
    title: "Systems Thinking",
    description: "Breaking down complexity into clear requirements and specs.",
  },
  {
    icon: Palette,
    title: "UX Collaboration",
    description: "Creating intuitive experiences backed by research and data.",
  },
  {
    icon: Rocket,
    title: "Go-to-Market",
    description: "Orchestrating teams from beta to successful market launch.",
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Implementing scalable solutions and automations.",
  },
];

const tools = [
  "Jira & Confluence",
  "Scrum & Kanban",
  "UX Prototyping",
  "Data Analysis",
  "Technical Docs",
  "Stakeholder Comms",
];

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const bg1Y = useTransform(scrollYProgress, [0, 1], [-120, 180]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [80, -140]);
  const bg3Y = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.95]);
  const bg2Rotate = useTransform(scrollYProgress, [0, 1], [-10, 20]);

  return (
    <section id="capabilities" className="py-28 sm:py-36 lg:py-44 relative overflow-hidden section-dark" ref={ref}>
      {/* Parallax background with green tones */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          style={{ y: bg1Y, scale: bg1Scale }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-forest-sage/25 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: bg2Y, rotate: bg2Rotate }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-gold/12 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: bg3Y }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-forest-dark/20 rounded-full blur-[80px]" 
        />
      </div>
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section label */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-orange-gold text-sm font-bold tracking-[0.2em] uppercase">Capabilities</span>
              </div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Everything you need.
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-20 font-medium">
                From strategy to execution, I provide the tools and guidance for every stage.
              </p>
            </StaggerItem>

            {/* Capabilities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 max-w-5xl mx-auto">
              {capabilities.map((cap, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group glass-card-dark rounded-3xl p-8 cursor-default h-full hover:bg-forest-sage/20 transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange-gold/20 border border-orange-gold/30 flex items-center justify-center mb-6 group-hover:bg-orange-gold/30 transition-colors duration-300">
                      <cap.icon size={26} className="text-orange-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed font-medium">{cap.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>

            {/* Tools section */}
            <StaggerItem>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-10">Tools & Frameworks</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {tools.map((tool) => (
                    <motion.span
                      key={tool}
                      className="px-6 py-3 glass-card-dark rounded-full text-sm font-semibold text-white/90 hover:text-white hover:bg-forest-sage/20 transition-all duration-300"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Capabilities;
