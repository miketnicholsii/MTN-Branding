import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Award, GraduationCap, Medal } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";
import headshot from "@/assets/headshot.png";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "K+", label: "LinkedIn Connections", isLinkedIn: true },
  { value: 6, suffix: "", label: "Industries" },
];

const achievements = [
  { icon: GraduationCap, text: "Notre Dame '14", color: "from-blue-500/20 to-blue-600/20" },
  { icon: Award, text: "Certified Scrum Master", color: "from-primary/20 to-primary/30" },
  { icon: Medal, text: "Vanguard Award Winner", color: "from-amber-500/20 to-amber-600/20" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <motion.div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section label */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
              </div>
            </StaggerItem>

            {/* Main content with image */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Left: Image with effects */}
              <StaggerItem>
                <div className="relative flex justify-center lg:justify-start">
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-8 -left-8 w-24 h-24 border-2 border-primary/20 rounded-2xl"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Stats overlay cards */}
                  <motion.div
                    className="absolute -right-4 top-1/4 glass-card rounded-xl p-3 shadow-lg hidden sm:block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-subtle">Years</div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -left-4 bottom-1/4 glass-card rounded-xl p-3 shadow-lg hidden sm:block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-xs text-subtle">Industries</div>
                  </motion.div>
                  
                  {/* Main image */}
                  <motion.div
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={headshot}
                      alt="Mike T. Nichols II"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  </motion.div>
                </div>
              </StaggerItem>

              {/* Right: Content */}
              <div className="text-center lg:text-left">
                <StaggerItem>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                    I solve problems with{" "}
                    <motion.span 
                      className="text-gradient-brand"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                      clarity.
                    </motion.span>
                  </h2>
                </StaggerItem>
                
                <StaggerItem>
                  <p className="text-body text-base sm:text-lg leading-relaxed mb-5">
                    I'm a product and strategy leader who thrives on turning ambiguity into action. 
                    With over a decade of experience across fintech, enterprise software, and consulting, 
                    I've led cross-functional teams to ship complex platforms and deliver measurable results.
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <p className="text-body text-base sm:text-lg leading-relaxed mb-8">
                    My work lives at the intersection of strategy, data, and user-centered design. 
                    Whether I'm roadmapping a product, coaching a team, or diving into data, I bring the 
                    same rigor and empathy to the table.
                  </p>
                </StaggerItem>

                {/* Achievement pills */}
                <StaggerItem>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                    {achievements.map((item, index) => (
                      <motion.div
                        key={item.text}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r ${item.color} border border-primary/10`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <item.icon size={16} className="text-primary" />
                        <span className="text-sm font-medium text-foreground">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </StaggerItem>

                {/* LinkedIn CTA */}
                <StaggerItem>
                  <motion.a
                    href="https://www.linkedin.com/in/miketnicholsii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full hover:shadow-lg hover:shadow-primary/10 transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Linkedin size={20} className="text-primary" />
                    </motion.div>
                    <span className="font-medium text-foreground">18K+ Connections</span>
                    <motion.span
                      className="text-primary"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </StaggerItem>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default About;