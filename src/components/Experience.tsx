import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "NÈKO",
    role: "Strategist",
    period: "2022 — Present",
    description: "Leading strategic initiatives and product development at a forward-thinking consultancy.",
    highlight: true,
    color: "from-primary to-accent",
  },
  {
    company: "Worldpay for Platforms",
    role: "Senior Product Manager",
    period: "2021 — 2022",
    description: "Led product management with a focus on UX. Spearheaded comprehensive rebranding strategy.",
    color: "from-accent to-secondary",
  },
  {
    company: "Slalom",
    role: "Consultant",
    period: "2020 — 2021",
    description: "Managed $1M+ project budgets, designed innovative processes for major telecom.",
    color: "from-secondary to-coral",
  },
  {
    company: "Equifax",
    role: "Senior Product Manager",
    period: "2016 — 2019",
    description: "Led identity protection initiative. Launched products achieving 115% attainment.",
    color: "from-coral to-primary",
  },
  {
    company: "Mercedes-Benz USA",
    role: "Business Analyst",
    period: "2015 — 2016",
    description: "Transformed dealer performance software deployed across 370 dealerships.",
    color: "from-primary to-secondary",
  },
  {
    company: "Target",
    role: "Scrum Master & Agile Coach",
    period: "2014 — 2015",
    description: "Spearheaded the company's transition to Agile, coaching 16 employees.",
    color: "from-secondary to-accent",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 lg:py-40 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 geometric-grid opacity-50" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            A decade of building
            <br />
            <span className="text-gradient">and leading</span>
          </h2>
        </motion.div>

        {/* Experience cards - Bento grid style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                exp.highlight
                  ? "md:col-span-2 lg:col-span-1 bg-foreground text-background border-foreground"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Animated gradient border on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-10 pointer-events-none`}
              />
              
              {/* Animated corner accent */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      exp.highlight ? "bg-background/20" : "bg-primary/10"
                    }`}
                  >
                    <Building2 size={24} className={exp.highlight ? "text-background" : "text-primary"} />
                  </motion.div>
                  <span className={`text-sm font-medium ${exp.highlight ? "text-background/60" : "text-subtle"}`}>
                    {exp.period}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${exp.highlight ? "text-background" : "text-foreground"}`}>
                  {exp.company}
                </h3>
                <p className={`text-sm font-semibold mb-4 ${exp.highlight ? "text-secondary" : "text-primary"}`}>
                  {exp.role}
                </p>
                <p className={`leading-relaxed ${exp.highlight ? "text-background/80" : "text-body"}`}>
                  {exp.description}
                </p>

                {/* Hover arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                  className={`absolute bottom-8 right-8 ${exp.highlight ? "text-background/60" : "text-primary"}`}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;