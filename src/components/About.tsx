import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for background elements
  const bg1Y = useTransform(scrollYProgress, [0, 1], [-100, 150]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [50, -120]);
  const bg3Y = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1]);
  const bg2Rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section id="about" className="py-28 sm:py-36 lg:py-44 relative overflow-hidden section-dark" ref={ref}>
      {/* Parallax background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          style={{ y: bg1Y, scale: bg1Scale }}
          className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-forest-sage/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: bg2Y, rotate: bg2Rotate }}
          className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-orange-gold/15 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: bg3Y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-forest-sage/10 rounded-full blur-[150px]" 
        />
      </div>
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer className="text-center max-w-4xl mx-auto">
            {/* Section label */}
            <StaggerItem>
              <span className="inline-block text-orange-gold text-sm font-bold tracking-[0.2em] uppercase mb-6">About Me</span>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-12">
                I solve problems with{" "}
                <span className="text-gradient-brand">clarity.</span>
              </h2>
            </StaggerItem>
            
            {/* Description */}
            <StaggerItem>
              <div className="max-w-2xl mx-auto mb-20">
                <p className="text-white/80 text-lg leading-relaxed mb-6 font-medium">
                  I'm a product and strategy leader who thrives on turning ambiguity into action. 
                  With over a decade of experience across fintech, enterprise software, and consulting, 
                  I've led cross-functional teams to ship complex platforms and deliver measurable results.
                </p>
                <p className="text-white/80 text-lg leading-relaxed font-medium">
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
                        className={`text-center p-8 glass-card-dark rounded-2xl ${stat.isLinkedIn ? 'cursor-pointer' : 'cursor-default'} hover:bg-forest-sage/20 transition-all duration-500`}
                      >
                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          {stat.isLinkedIn && (
                            <Linkedin size={26} className="text-orange-gold" />
                          )}
                        </div>
                        <div className="text-white/60 text-sm font-semibold">{stat.label}</div>
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
                    className="flex items-center gap-3 px-6 py-3.5 glass-card-dark rounded-full"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon size={20} className="text-orange-gold" />
                    <span className="text-sm font-semibold text-white">{item.text}</span>
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
