import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Brain, Palette, Rocket, Zap } from "lucide-react";

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

  return (
    <section id="capabilities" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blob opacity-40" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 blob opacity-30" />
      
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

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((cap, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cap.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {cap.title}
              </h3>
              <p className="text-body leading-relaxed">{cap.description}</p>
            </motion.article>
          ))}
        </div>

        {/* Tools section */}
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
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-6 py-3 bg-muted text-foreground text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
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