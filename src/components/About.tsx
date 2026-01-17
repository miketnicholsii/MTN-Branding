import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Award, GraduationCap, Medal } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

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
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden section-dark" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: bgY }}
          className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-forest-sage/15 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: bgY }}
          className="absolute bottom-1/3 -right-24 w-[350px] h-[350px] bg-orange-gold/10 rounded-full blur-[80px]" 
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer className="text-center max-w-3xl mx-auto">
          {/* Section label */}
          <StaggerItem>
            <span className="inline-block text-orange-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">About Me</span>
          </StaggerItem>

          {/* Main headline */}
          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              I solve problems with{" "}
              <span className="text-gradient-brand">clarity.</span>
            </h2>
          </StaggerItem>
          
          {/* Description */}
          <StaggerItem>
            <div className="max-w-xl mx-auto mb-12">
              <p className="text-white/70 text-base leading-relaxed mb-4">
                As an Agile Product Manager and Business Analyst, I develop high-performance platforms 
                and innovative solutions that drive revenue growth and propel teams forward.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                I've led cross-functional teams across industries, uniting strategy, data, 
                and user-centered design to deliver measurable results.
              </p>
            </div>
          </StaggerItem>

          {/* Stats grid */}
          <StaggerItem>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
              {stats.map((stat, index) => {
                const CardWrapper = stat.isLinkedIn ? 'a' : 'div';
                const cardProps = stat.isLinkedIn 
                  ? { href: 'https://www.linkedin.com/in/miketnicholsii/', target: '_blank', rel: 'noopener noreferrer' } 
                  : {};
                
                return (
                  <CardWrapper key={index} {...cardProps}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className={`text-center p-4 glass-card-dark rounded-xl ${stat.isLinkedIn ? 'cursor-pointer' : ''}`}
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        {stat.isLinkedIn && <Linkedin size={18} className="text-orange-gold" />}
                      </div>
                      <div className="text-white/50 text-xs font-medium">{stat.label}</div>
                    </motion.div>
                  </CardWrapper>
                );
              })}
            </div>
          </StaggerItem>

          {/* Achievement pills */}
          <StaggerItem>
            <div className="flex flex-wrap justify-center gap-3">
              {achievements.map((item) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 glass-card-dark rounded-full"
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon size={14} className="text-orange-gold" />
                  <span className="text-xs font-medium text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
