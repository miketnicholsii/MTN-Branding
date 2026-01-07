import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import TextReveal from "./TextReveal";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "K+", label: "Connections" },
  { value: 6, suffix: "", label: "Companies Led" },
];

const About = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-40 relative overflow-hidden" ref={containerRef}>
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
        </motion.div>

        {/* Main headline - centered */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              I solve problems with clarity.
            </h2>
          </TextReveal>
        </div>
        
        {/* Description - centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
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
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 glass-card rounded-2xl"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-subtle text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Quick facts - horizontal pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            "Notre Dame '14",
            "Certified Scrum Master",
            "Vanguard Award Winner",
          ].map((item) => (
            <span
              key={item}
              className="px-5 py-2.5 glass-pill rounded-full text-body text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;