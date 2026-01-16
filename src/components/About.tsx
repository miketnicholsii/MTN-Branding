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
    <section id="about" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-forest-light/3 rounded-full blur-3xl -translate-y-1/2" />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer className="text-center max-w-4xl mx-auto">
            {/* Section label */}
            <StaggerItem>
              <span className="inline-block text-orange-gold text-sm font-semibold tracking-widest uppercase mb-6">About Me</span>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-headline leading-tight mb-10">
                I solve problems with{" "}
                <span className="text-gradient-brand">clarity.</span>
              </h2>
            </StaggerItem>
            
            {/* Description */}
            <StaggerItem>
              <div className="max-w-2xl mx-auto mb-16">
                <p className="text-body text-lg leading-relaxed mb-6">
                  I'm a product and strategy leader who thrives on turning ambiguity into action. 
                  With over a decade of experience across fintech, enterprise software, and consulting, 
                  I've led cross-functional teams to ship complex platforms and deliver measurable results.
                </p>
                <p className="text-body text-lg leading-relaxed">
                  My work lives at the intersection of strategy, data, and user-centered design. 
                  Whether I'm roadmapping a product, coaching a team, or diving into data, I bring the 
                  same rigor and empathy to the table.
                </p>
              </div>
            </StaggerItem>

            {/* Stats grid */}
            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
                {stats.map((stat, index) => {
                  const CardWrapper = stat.isLinkedIn ? 'a' : 'div';
                  const cardProps = stat.isLinkedIn 
                    ? { href: 'https://www.linkedin.com/in/miketnicholsii/', target: '_blank', rel: 'noopener noreferrer' } 
                    : {};
                  
                  return (
                    <CardWrapper key={index} {...cardProps}>
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`text-center p-6 glass-card rounded-2xl ${stat.isLinkedIn ? 'cursor-pointer' : 'cursor-default'} hover:shadow-lg transition-shadow duration-500`}
                      >
                        <div className="text-3xl lg:text-4xl font-bold text-forest-deep mb-2 flex items-center justify-center gap-2">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          {stat.isLinkedIn && (
                            <Linkedin size={22} className="text-orange-gold" />
                          )}
                        </div>
                        <div className="text-subtle text-sm font-medium">{stat.label}</div>
                      </motion.div>
                    </CardWrapper>
                  );
                })}
              </div>
            </StaggerItem>

            {/* Achievement pills */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center gap-3">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-2.5 px-5 py-3 glass-card rounded-full"
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon size={18} className="text-orange-gold" />
                    <span className="text-sm font-medium text-headline">{item.text}</span>
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