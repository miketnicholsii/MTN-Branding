import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, ExternalLink } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
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

  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer>
          {/* Section header */}
          <StaggerItem>
            <div className="text-center mb-4">
              <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase">Where I've Been</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center mb-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                A Few Stops Along the Way
              </h2>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <div className="text-center mb-4">
              <p className="text-muted-foreground text-base">
                Currently crafting strategy at{" "}
                <a 
                  href="https://helloneko.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-gold font-semibold hover:underline"
                >
                  NÈKO
                </a>
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center mb-10">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-4 py-2 glass-pill rounded-full text-muted-foreground text-xs font-medium hover:text-foreground transition-colors"
              >
                <Download size={12} className="text-orange-gold" />
                View & Download Resume
              </Link>
            </div>
          </StaggerItem>

          {/* Experience list */}
          <div className="max-w-2xl mx-auto space-y-3">
            {experiences.map((exp, index) => {
              const CardWrapper = exp.link ? 'a' : 'div';
              const cardProps = exp.link ? { href: exp.link, target: '_blank', rel: 'noopener noreferrer' } : {};
              
              return (
                <StaggerItem key={index}>
                  <CardWrapper
                    {...cardProps}
                    className={`group block rounded-xl p-4 sm:p-5 transition-all duration-300 hover:translate-x-1 ${
                      exp.featured 
                        ? 'relative overflow-hidden card-featured text-white cursor-pointer' 
                        : 'glass-card'
                    }`}
                  >
                    {exp.featured && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/20 text-white text-[10px] font-semibold rounded-full">
                        Current
                      </div>
                    )}
                    <div className={`flex items-start gap-4 ${exp.featured ? 'pt-2' : ''}`}>
                      <div className={`text-xl sm:text-2xl font-bold ${
                        exp.featured ? 'text-white/50' : 'text-orange-gold/40 group-hover:text-orange-gold'
                      } transition-colors`}>
                        {exp.number}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <h3 className={`text-sm sm:text-base font-bold ${
                              exp.featured ? 'text-white' : 'text-foreground group-hover:text-orange-gold'
                            } transition-colors`}>{exp.company}</h3>
                            <p className={`text-xs font-medium ${exp.featured ? 'text-white/70' : 'text-orange-gold'}`}>{exp.role}</p>
                          </div>
                          <span className={`text-[10px] sm:text-xs shrink-0 ${exp.featured ? 'text-white/50' : 'text-muted-foreground'}`}>{exp.period}</span>
                        </div>
                        <p className={`text-xs sm:text-sm leading-relaxed ${exp.featured ? 'text-white/70' : 'text-muted-foreground'}`}>{exp.description}</p>
                      </div>

                      {exp.featured && (
                        <ExternalLink size={14} className="text-white/50 shrink-0 mt-1" />
                      )}
                    </div>
                  </CardWrapper>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Experience;
