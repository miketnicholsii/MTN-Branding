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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-32 lg:py-40 relative overflow-hidden" ref={containerRef}>
      {/* Parallax background elements */}
      <motion.div
        style={{ y: imageY }}
        className="absolute top-0 right-0 w-1/2 h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 border border-accent/10 rounded-full"
        />
      </motion.div>
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6"
            >
              About Me
            </motion.span>
            
            <TextReveal className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                I solve problems with 
                <span className="text-gradient"> clarity</span> —
              </h2>
            </TextReveal>
            <TextReveal delay={0.1} className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                and occasionally a dad joke.
              </h2>
            </TextReveal>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-body text-lg leading-relaxed"
            >
              <p>
                I'm a product and strategy leader who thrives on turning ambiguity into action. 
                With over a decade of experience across fintech, enterprise software, and consulting, 
                I've led cross-functional teams to ship complex platforms and deliver measurable results.
              </p>
              <p>
                My work lives at the intersection of strategy, data, and user-centered design. 
                Whether I'm roadmapping a product, coaching a team, or diving into data, I bring the 
                same rigor and empathy to the table.
              </p>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Stats grid with animated counters */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center p-6 bg-card rounded-2xl border border-border cursor-default group"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-subtle text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick facts card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card rounded-3xl p-8 border border-border relative overflow-hidden group"
            >
              {/* Hover gradient effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"
              />
              
              <h3 className="text-xl font-bold text-foreground mb-6 relative">
                At a glance
              </h3>
              
              <dl className="space-y-4 relative">
                {[
                  { dt: "Education", dd: "Notre Dame '14, Mendoza College" },
                  { dt: "Certification", dd: "Certified Scrum Master" },
                  { dt: "Location", dd: "United States" },
                  { dt: "Recognition", dd: "Vanguard Award for Leadership" },
                ].map((item, index) => (
                  <motion.div
                    key={item.dt}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0 group/item"
                  >
                    <dt className="text-subtle text-sm font-medium group-hover/item:text-primary transition-colors">{item.dt}</dt>
                    <dd className="text-foreground text-sm font-medium text-right">{item.dd}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;