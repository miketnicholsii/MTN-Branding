import { motion, useInView } from "framer-motion";
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

  return (
    <section id="capabilities" className="py-20 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section label */}
            <StaggerItem>
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">Capabilities</span>
              </div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <div className="text-center mb-4 sm:mb-6 px-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Everything you need.
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body text-base sm:text-lg text-center max-w-2xl mx-auto mb-10 sm:mb-16 px-4">
                From strategy to execution, I provide the tools and guidance for every stage.
              </p>
            </StaggerItem>

            {/* Capabilities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-16">
              {capabilities.map((cap, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-default h-full"
                  >
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      <cap.icon size={20} className="text-primary sm:w-6 sm:h-6" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">{cap.title}</h3>
                    <p className="text-body text-xs sm:text-sm leading-relaxed">{cap.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>

            {/* Tools section */}
            <StaggerItem>
              <div className="text-center px-2">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Tools & Frameworks</h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 sm:px-5 py-2 sm:py-2.5 glass-pill rounded-full text-body text-xs sm:text-sm font-medium hover:text-foreground hover:bg-white/10 transition-all cursor-default"
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