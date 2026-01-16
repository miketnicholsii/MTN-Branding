import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Award, GraduationCap, Medal } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "K+", label: "LinkedIn Connections", isLinkedIn: true },
  { value: 6, suffix: "", label: "Industries" },
];

const achievements = [
  { icon: GraduationCap, text: "Notre Dame '14" },
  { icon: Award, text: "Certified Scrum Master" },
  { icon: Medal, text: "Vanguard Award Winner" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 sm:py-36 lg:py-44 relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-forest-sage/4 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-gold/4 rounded-full blur-[100px]" />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer className="text-center max-w-4xl mx-auto">
            {/* Section label */}
            <StaggerItem>
              <span className="inline-block text-orange-gold text-sm font-bold tracking-[0.2em] uppercase mb-6">About Me</span>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-forest-deep leading-[1.1] mb-12">
                I solve problems with{" "}
                <span className="text-gradient-brand">clarity.</span>
              </h2>
            </StaggerItem>
            
            {/* Description */}
            <StaggerItem>
              <div className="max-w-2xl mx-auto mb-20">
                <p className="text-body text-lg leading-relaxed mb-6 font-medium">
                  I'm a product and strategy leader who thrives on turning ambiguity into action. 
                  With over a decade of experience across fintech, enterprise software, and consulting, 
                  I've led cross-functional teams to ship complex platforms and deliver measurable results.
                </p>
                <p className="text-body text-lg leading-relaxed font-medium">
                  My work lives at the intersection of strategy, data, and user-centered design. 
                  Whether I'm roadmapping a product, coaching a team, or diving into data, I bring the 
                  same rigor and empathy to the table.
                </p>
              </div>
            </StaggerItem>

            {/* Stats grid */}
            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
                {stats.map((stat, index) => {
                  const CardWrapper = stat.isLinkedIn ? 'a' : 'div';
                  const cardProps = stat.isLinkedIn 
                    ? { href: 'https://www.linkedin.com/in/miketnicholsii/', target: '_blank', rel: 'noopener noreferrer' } 
                    : {};
                  
                  return (
                    <CardWrapper key={index} {...cardProps}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`text-center p-8 glass-card rounded-2xl ${stat.isLinkedIn ? 'cursor-pointer' : 'cursor-default'} hover:shadow-xl transition-shadow duration-500`}
                      >
                        <div className="text-4xl lg:text-5xl font-bold text-forest-deep mb-2 flex items-center justify-center gap-3">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          {stat.isLinkedIn && (
                            <Linkedin size={26} className="text-orange-gold" />
                          )}
                        </div>
                        <div className="text-forest-sage text-sm font-semibold">{stat.label}</div>
                      </motion.div>
                    </CardWrapper>
                  );
                })}
              </div>
            </StaggerItem>

            {/* Achievement pills */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center gap-4">
                {achievements.map((item) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-3 px-6 py-3.5 glass-card rounded-full"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon size={20} className="text-orange-gold" />
                    <span className="text-sm font-semibold text-forest-deep">{item.text}</span>
                  </motion.div>
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