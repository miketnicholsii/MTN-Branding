import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Brain, Palette, Rocket, Zap } from "lucide-react";
import TextReveal from "./TextReveal";

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
    <section id="capabilities" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Capabilities</span>
        </motion.div>

        {/* Main headline */}
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Everything you need.
            </h2>
          </TextReveal>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body text-lg text-center max-w-2xl mx-auto mb-16"
        >
          From strategy to execution, I provide the tools and guidance for every stage.
        </motion.p>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:bg-white/5 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <cap.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{cap.title}</h3>
              <p className="text-body text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Tools & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2.5 glass-pill rounded-full text-body text-sm font-medium hover:text-foreground hover:bg-white/10 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;