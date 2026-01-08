import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, ExternalLink } from "lucide-react";
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
    <section id="experience" className="py-20 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section label */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Where I've Been</span>
              </div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <div className="text-center mb-4 px-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
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
              <div className="text-center mb-10 sm:mb-16">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 glass-pill rounded-full text-body text-xs sm:text-sm font-medium hover:text-foreground hover:shadow-md transition-all duration-300"
                >
                  <Download size={14} className="text-primary sm:w-4 sm:h-4" />
                  View & Download Resume
                </Link>
              </div>
            </StaggerItem>

            {/* Experience list */}
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {experiences.map((exp, index) => {
                const CardWrapper = exp.link ? 'a' : 'div';
                const cardProps = exp.link ? { href: exp.link, target: '_blank', rel: 'noopener noreferrer' } : {};
                
                return (
                  <StaggerItem key={index}>
                    <CardWrapper
                      {...cardProps}
                      className={`group block rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 ${
                        exp.featured 
                          ? 'relative overflow-hidden card-featured text-white cursor-pointer hover:shadow-xl' 
                          : 'glass-card cursor-default hover:shadow-md'
                      }`}
                    >
                      {/* Featured badge for NÈKO */}
                      {exp.featured && (
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 text-white text-[10px] sm:text-xs font-semibold rounded-full">
                          Current
                        </div>
                      )}
                      <div className={`flex items-start gap-3 sm:gap-6 relative z-10 ${exp.featured ? 'pt-4 sm:pt-6' : ''}`}>
                        {/* Number */}
                        <div className={`text-2xl sm:text-4xl font-bold transition-colors duration-300 ${
                          exp.featured ? 'text-white/60' : 'text-primary/30 group-hover:text-primary'
                        }`}>
                          {exp.number}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col gap-1 sm:gap-2 mb-2 sm:mb-3">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className={`text-base sm:text-xl font-bold transition-colors duration-300 ${
                                  exp.featured ? 'text-white' : 'text-foreground group-hover:text-primary'
                                }`}>{exp.company}</h3>
                                <p className={`text-xs sm:text-sm font-medium ${exp.featured ? 'text-white/70' : 'text-primary'}`}>{exp.role}</p>
                              </div>
                              <span className={`text-[10px] sm:text-sm whitespace-nowrap ${exp.featured ? 'text-white/50' : 'text-subtle'}`}>{exp.period}</span>
                            </div>
                          </div>
                          <p className={`text-sm sm:text-base leading-relaxed ${exp.featured ? 'text-white/80' : 'text-body'}`}>{exp.description}</p>
                        </div>

                        {/* External link icon for featured, hover arrow for others */}
                        {exp.featured ? (
                          <div className="hidden sm:flex items-center gap-1 text-white/70">
                            <ExternalLink size={18} />
                          </div>
                        ) : (
                          <div className="hidden md:block text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </div>
                        )}
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