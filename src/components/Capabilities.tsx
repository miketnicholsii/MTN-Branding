import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Target, Users, Brain, Palette, Rocket, Zap } from "lucide-react";
import ParallaxText from "./ParallaxText";

const capabilities = [
  {
    icon: Target,
    title: "Product Strategy",
    description: "Translating vision into actionable roadmaps that align business objectives with user needs.",
  },
  {
    icon: Users,
    title: "Agile Leadership",
    description: "Coaching teams and driving efficient delivery through Scrum, Kanban, and hybrid methodologies.",
  },
  {
    icon: Brain,
    title: "Systems Thinking",
    description: "Breaking down complex systems into clear requirements, data flows, and actionable specs.",
  },
  {
    icon: Palette,
    title: "UX Collaboration",
    description: "Partnering with designers to create intuitive experiences backed by research and data.",
  },
  {
    icon: Rocket,
    title: "Go-to-Market",
    description: "Orchestrating teams to bring products from beta to successful market launch.",
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Identifying inefficiencies and implementing scalable solutions and automations.",
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
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="capabilities" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-80 h-80 border border-secondary/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-60 h-60 border border-accent/20 rounded-full"
      />
      
      {/* Parallax scrolling text */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none opacity-50">
        <ParallaxText baseVelocity={1}>STRATEGY • PRODUCT • DESIGN •</ParallaxText>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground text-sm font-semibold rounded-full mb-6">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            What I bring to the table
          </h2>
          <p className="text-body text-xl max-w-2xl mx-auto">
            A blend of strategic thinking, technical understanding, and people skills.
          </p>
        </motion.div>

        {/* Capabilities grid with 3D tilt effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((cap, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              whileHover={{ y: -12, rotateX: 5, rotateY: -5 }}
              className="group p-8 bg-card rounded-3xl border border-border relative overflow-hidden cursor-pointer"
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            >
              {/* Animated gradient background */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: activeCard === index ? 0.1 : 0,
                  scale: activeCard === index ? 2 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-accent rounded-full"
              />

              {/* Icon with animated background */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg shadow-primary/20"
              >
                <cap.icon size={28} className="text-white" />
                
                {/* Pulsing ring effect */}
                <motion.div
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl border-2 border-primary"
                />
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-3 relative">
                {cap.title}
              </h3>
              <p className="text-body leading-relaxed relative">{cap.description}</p>

              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Tools section with stagger animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Tools & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-6 py-3 bg-muted text-foreground text-sm font-medium rounded-full cursor-default hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;