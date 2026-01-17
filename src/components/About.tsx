import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Award, GraduationCap, Medal } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

const stats = [
  { value: 2, suffix: "M+", label: "Revenue Generated", prefix: "$" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 18, suffix: "K+", label: "LinkedIn Network", isLinkedIn: true },
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
    <section 
      id="about" 
      className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" 
      ref={ref}
      style={{ background: 'hsl(var(--forest-900))' }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: bgY }}
          className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full blur-[100px]"
        >
          <div className="w-full h-full rounded-full" style={{ background: 'hsla(var(--forest-700) / 0.3)' }} />
        </motion.div>
        <motion.div 
          style={{ y: bgY }}
          className="absolute bottom-1/3 -right-24 w-[350px] h-[350px] rounded-full blur-[80px]"
        >
          <div className="w-full h-full rounded-full" style={{ background: 'hsla(var(--orange-500) / 0.15)' }} />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer className="text-center max-w-3xl mx-auto">
          {/* Section label */}
          <StaggerItem>
            <span 
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: 'hsl(var(--orange-500))' }}
            >
              About Me
            </span>
          </StaggerItem>

          {/* Main headline */}
          <StaggerItem>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8"
              style={{ color: 'hsl(var(--offwhite))' }}
            >
              I solve problems with{" "}
              <span className="text-gradient-brand">clarity.</span>
            </h2>
          </StaggerItem>
          
          {/* Description */}
          <StaggerItem>
            <div className="max-w-xl mx-auto mb-12">
              <p 
                className="text-base leading-relaxed mb-4"
                style={{ color: 'hsl(var(--softwhite))' }}
              >
                As an Agile Product Manager and Business Analyst, I develop high-performance platforms 
                and innovative solutions that drive revenue growth and propel teams forward.
              </p>
              <p 
                className="text-base leading-relaxed"
                style={{ color: 'hsl(var(--softwhite))' }}
              >
                I've led cross-functional teams across industries, uniting strategy, data, 
                and user-centered design to deliver measurable results.
              </p>
            </div>
          </StaggerItem>

          {/* Stats grid */}
          <StaggerItem>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
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
                      className={`text-center p-5 rounded-xl ${stat.isLinkedIn ? 'cursor-pointer' : ''}`}
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--forest-950)), hsla(var(--forest-900) / 0.8))',
                        border: '1px solid hsla(var(--offwhite) / 0.10)',
                        boxShadow: 'var(--shadow-1), inset 0 1px 0 hsla(var(--offwhite) / 0.05)',
                      }}
                    >
                      <div 
                        className="text-2xl sm:text-3xl font-bold mb-1 flex items-center justify-center gap-1"
                        style={{ color: 'hsl(var(--offwhite))' }}
                      >
                        {stat.prefix && <span>{stat.prefix}</span>}
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        {stat.isLinkedIn && <Linkedin size={16} style={{ color: 'hsl(var(--orange-500))' }} />}
                      </div>
                      <div 
                        className="text-xs font-medium"
                        style={{ color: 'hsl(var(--softwhite))' }}
                      >
                        {stat.label}
                      </div>
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: 'hsl(var(--forest-950))',
                    border: '1px solid hsla(var(--offwhite) / 0.10)',
                  }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon size={14} style={{ color: 'hsl(var(--orange-500))' }} />
                  <span 
                    className="text-xs font-medium"
                    style={{ color: 'hsl(var(--offwhite))' }}
                  >
                    {item.text}
                  </span>
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