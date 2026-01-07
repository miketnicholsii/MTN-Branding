import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "K+", label: "Connections" },
  { value: 6, suffix: "", label: "Companies Led" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      <SectionTransition>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <StaggerContainer className="text-center">
            {/* Section label */}
            <StaggerItem>
              <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-6">About Me</span>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12 max-w-3xl mx-auto">
                I solve problems with clarity.
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
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="text-center p-6 glass-card rounded-2xl cursor-default"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-subtle text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>

            {/* Quick facts pills */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Notre Dame '14",
                  "Certified Scrum Master",
                  "Vanguard Award Winner",
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2.5 glass-pill rounded-full text-body text-sm font-medium cursor-default"
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