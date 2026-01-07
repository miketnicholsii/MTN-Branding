import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "18K+", label: "Connections" },
  { value: "6", label: "Companies Led" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Main text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8"
            >
              I solve problems with 
              <span className="text-gradient"> clarity</span> — and occasionally a dad joke.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
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

          {/* Right column - Stats & facts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-2xl border border-border hover-lift"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-subtle text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick facts card */}
            <div className="bg-card rounded-3xl p-8 border border-border hover-lift">
              <h3 className="text-xl font-bold text-foreground mb-6">
                At a glance
              </h3>
              
              <dl className="space-y-4">
                {[
                  { dt: "Education", dd: "Notre Dame '14, Mendoza College" },
                  { dt: "Certification", dd: "Certified Scrum Master" },
                  { dt: "Location", dd: "United States" },
                  { dt: "Recognition", dd: "Vanguard Award for Leadership" },
                ].map((item) => (
                  <div key={item.dt} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                    <dt className="text-subtle text-sm font-medium">{item.dt}</dt>
                    <dd className="text-foreground text-sm font-medium text-right">{item.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;