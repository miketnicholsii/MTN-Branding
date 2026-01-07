import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";

const experiences = [
  {
    number: "01",
    company: "NÈKO",
    role: "Strategist",
    period: "2022 — Present",
    description: "Leading strategic initiatives and product development at a forward-thinking consultancy.",
  },
  {
    number: "02",
    company: "Worldpay for Platforms",
    role: "Senior Product Manager",
    period: "2021 — 2022",
    description: "Led product management with a focus on UX. Spearheaded comprehensive rebranding strategy.",
  },
  {
    number: "03",
    company: "Slalom",
    role: "Consultant",
    period: "2020 — 2021",
    description: "Managed $1M+ project budgets, designed innovative processes for major telecom.",
  },
  {
    number: "04",
    company: "Equifax",
    role: "Senior Product Manager",
    period: "2016 — 2019",
    description: "Led identity protection initiative. Launched products achieving 115% attainment.",
  },
  {
    number: "05",
    company: "Mercedes-Benz USA",
    role: "Business Analyst",
    period: "2015 — 2016",
    description: "Transformed dealer performance software deployed across 370 dealerships.",
  },
  {
    number: "06",
    company: "Target",
    role: "Scrum Master & Agile Coach",
    period: "2014 — 2015",
    description: "Spearheaded the company's transition to Agile, coaching 16 employees.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
        </motion.div>

        {/* Main headline */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Your Journey
            </h2>
          </TextReveal>
        </div>

        {/* Experience list - NEKO numbered style */}
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all cursor-default"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <div className="text-4xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                  {exp.number}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-primary text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-subtle text-sm">{exp.period}</span>
                  </div>
                  <p className="text-body leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;