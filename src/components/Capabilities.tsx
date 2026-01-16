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
    <section id="capabilities" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-forest-light/3 rounded-full blur-3xl" />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section label */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-orange-gold text-sm font-semibold tracking-widest uppercase">Capabilities</span>
              </div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-headline">
                  Everything you need.
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body text-lg text-center max-w-2xl mx-auto mb-16">
                From strategy to execution, I provide the tools and guidance for every stage.
              </p>
            </StaggerItem>

            {/* Capabilities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
              {capabilities.map((cap, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group glass-card rounded-2xl p-6 cursor-default h-full hover:shadow-lg transition-shadow duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-forest-deep/10 flex items-center justify-center mb-5 group-hover:bg-forest-deep/15 transition-colors duration-300">
                      <cap.icon size={24} className="text-forest-deep group-hover:text-forest-light transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-headline mb-2 group-hover:text-forest-light transition-colors duration-300">{cap.title}</h3>
                    <p className="text-body text-sm leading-relaxed">{cap.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>

            {/* Tools section */}
            <StaggerItem>
              <div className="text-center">
                <h3 className="text-lg font-bold text-headline mb-8">Tools & Frameworks</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {tools.map((tool) => (
                    <motion.span
                      key={tool}
                      className="px-5 py-2.5 glass-card rounded-full text-sm font-medium text-headline hover:text-forest-light transition-colors duration-300"
                      whileHover={{ y: -3 }}
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