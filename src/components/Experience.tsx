import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";
import { Link } from "react-router-dom";

const experiences = [
  {
    number: "01",
    company: "NÈKO",
    role: "Strategist",
    period: "2022 — Present",
    description: "Leading strategic initiatives and product development at a forward-thinking consultancy.",
    featured: true,
    link: "https://helloneko.co",
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
    <section id="experience" className="py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      <SectionTransition>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section label */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Where I've Been</span>
              </div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <div className="text-center mb-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  A Few Stops Along the Way
                </h2>
              </div>
            </StaggerItem>
            
            {/* Subtext with NÈKO link */}
            <StaggerItem>
              <div className="text-center mb-8">
                <p className="text-body text-lg">
                  Currently crafting strategy at{" "}
                  <a 
                    href="https://helloneko.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline transition-all"
                  >
                    NÈKO
                  </a>
                </p>
              </div>
            </StaggerItem>

            {/* Resume download button */}
            <StaggerItem>
              <div className="text-center mb-16">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 glass-pill rounded-full text-body text-sm font-medium hover:text-foreground hover:bg-white/10 transition-all duration-300"
                >
                  <Download size={16} className="text-primary" />
                  View & Download Resume
                </Link>
              </div>
            </StaggerItem>

            {/* Experience list */}
            <div className="max-w-3xl mx-auto space-y-4">
              {experiences.map((exp, index) => {
                const CardWrapper = exp.link ? 'a' : 'div';
                const cardProps = exp.link ? { href: exp.link, target: '_blank', rel: 'noopener noreferrer' } : {};
                
                return (
                  <StaggerItem key={index}>
                    <CardWrapper
                      {...cardProps}
                      className={`group block rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-x-2 ${
                        exp.featured 
                          ? 'relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent ring-2 ring-primary/40 shadow-lg shadow-primary/10 cursor-pointer hover:ring-primary/60 hover:shadow-primary/20' 
                          : 'glass-card cursor-default'
                      }`}
                    >
                      {/* Animated gradient overlay for featured */}
                      {exp.featured && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
                          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                        </>
                      )}
                      
                      {/* Featured badge for NÈKO */}
                      {exp.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full border border-primary/30">
                          Current
                        </div>
                      )}
                      <div className="flex items-start gap-6 relative z-10">
                        {/* Number */}
                        <div className={`text-4xl font-bold transition-colors duration-300 ${
                          exp.featured ? 'text-primary' : 'text-primary/30 group-hover:text-primary'
                        }`}>
                          {exp.number}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                            <div>
                              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                                exp.featured ? 'text-primary' : 'text-foreground group-hover:text-primary'
                              }`}>{exp.company}</h3>
                              <p className="text-primary text-sm font-medium">{exp.role}</p>
                            </div>
                            <span className="text-subtle text-sm">{exp.period}</span>
                          </div>
                          <p className="text-body leading-relaxed">{exp.description}</p>
                        </div>

                        {/* Hover arrow */}
                        <div className={`hidden md:block text-primary transition-opacity duration-300 ${
                          exp.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          →
                        </div>
                      </div>
                    </CardWrapper>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Experience;