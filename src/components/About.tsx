import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "K+", label: "LinkedIn Connections", isLinkedIn: true },
  { value: 6, suffix: "", label: "Industries" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer className="text-center">
            {/* Section label */}
            <StaggerItem>
              <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-6">About Me</span>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
                I solve problems with clarity.
              </h2>
            </StaggerItem>
            
            {/* Description */}
            <StaggerItem>
              <div className="max-w-2xl mx-auto mb-12 sm:mb-16 px-2">
                <p className="text-body text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                  I'm a product and strategy leader who thrives on turning ambiguity into action. 
                  With over a decade of experience across fintech, enterprise software, and consulting, 
                  I've led cross-functional teams to ship complex platforms and deliver measurable results.
                </p>
                <p className="text-body text-base sm:text-lg leading-relaxed">
                  My work lives at the intersection of strategy, data, and user-centered design. 
                  Whether I'm roadmapping a product, coaching a team, or diving into data, I bring the 
                  same rigor and empathy to the table.
                </p>
              </div>
            </StaggerItem>

            {/* Stats grid */}
            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-12 sm:mb-16 px-2">
                {stats.map((stat, index) => {
                  const CardWrapper = stat.isLinkedIn ? 'a' : 'div';
                  const cardProps = stat.isLinkedIn 
                    ? { href: 'https://www.linkedin.com/in/miketnicholsii/', target: '_blank', rel: 'noopener noreferrer' } 
                    : {};
                  
                  return (
                    <CardWrapper key={index} {...cardProps}>
                      <motion.div
                        whileHover={{ y: -8, scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className={`text-center p-4 sm:p-6 glass-card rounded-2xl ${stat.isLinkedIn ? 'cursor-pointer' : 'cursor-default'} hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300`}
                      >
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 flex items-center justify-center gap-2">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          {stat.isLinkedIn && (
                            <motion.div
                              animate={{ y: [0, -3, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <Linkedin size={20} className="opacity-70 sm:w-6 sm:h-6" />
                            </motion.div>
                          )}
                        </div>
                        <div className="text-subtle text-xs sm:text-sm font-medium">{stat.label}</div>
                      </motion.div>
                    </CardWrapper>
                  );
                })}
              </div>
            </StaggerItem>

            {/* Quick facts pills */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
                {[
                  "Notre Dame '14",
                  "Certified Scrum Master",
                  "Vanguard Award Winner",
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    className="px-3 sm:px-5 py-2 sm:py-2.5 glass-pill rounded-full text-body text-xs sm:text-sm font-medium cursor-default hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default About;