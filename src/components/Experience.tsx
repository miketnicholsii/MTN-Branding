import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Building2 } from "lucide-react";

const experiences = [
  {
    company: "NÈKO",
    role: "Strategist",
    period: "2022 — Present",
    description: "Leading strategic initiatives and product development at a forward-thinking consultancy.",
    highlight: true,
  },
  {
    company: "Worldpay for Platforms",
    role: "Senior Product Manager",
    period: "2021 — 2022",
    description: "Led product management with a focus on UX. Spearheaded comprehensive rebranding strategy, revamping UI and standardizing backend code.",
  },
  {
    company: "Slalom",
    role: "Consultant",
    period: "2020 — 2021",
    description: "Managed $1M+ project budgets, designed innovative processes, and developed data-driven analytics for major telecom.",
  },
  {
    company: "Equifax",
    role: "Senior Product Manager",
    period: "2016 — 2019",
    description: "Led identity protection initiative with 300 employees. Launched Canadian products achieving 115% attainment and $500K revenue.",
  },
  {
    company: "Mercedes-Benz USA",
    role: "Business Analyst",
    period: "2015 — 2016",
    description: "Transformed dealer performance scorecard software deployed across 370 dealerships with custom UX interfaces.",
  },
  {
    company: "Target",
    role: "Scrum Master & Agile Coach",
    period: "2014 — 2015",
    description: "Spearheaded the company's transition to Agile, coaching 16 employees in developing strategic roadmaps.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 lg:py-40 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 geometric-grid opacity-50" />
      
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

        {/* Experience cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-8 rounded-3xl border transition-all duration-300 hover-lift ${
                exp.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  exp.highlight ? "bg-white/20" : "bg-primary/10"
                }`}>
                  <Building2 size={24} className={exp.highlight ? "text-white" : "text-primary"} />
                </div>
                <span className={`text-sm font-medium ${
                  exp.highlight ? "text-white/80" : "text-subtle"
                }`}>
                  {exp.period}
                </span>
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${
                exp.highlight ? "text-white" : "text-foreground"
              }`}>
                {exp.company}
              </h3>
              <p className={`text-sm font-semibold mb-4 ${
                exp.highlight ? "text-white/80" : "text-primary"
              }`}>
                {exp.role}
              </p>
              <p className={`leading-relaxed ${
                exp.highlight ? "text-white/90" : "text-body"
              }`}>
                {exp.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;