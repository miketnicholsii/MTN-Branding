import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Large gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Contact</span>
          </motion.div>
          
          {/* Main headline */}
          <div className="mb-6">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground">
                Let's build something
              </h2>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gradient-brand">
                together.
              </h2>
            </TextReveal>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body text-lg mb-12 max-w-xl mx-auto"
          >
            Want to build something, fix something, or talk through an idea? 
            I'm always open to a good conversation.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <MagneticButton
              href="https://www.linkedin.com/in/miketnicholsii/"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-full transition-all text-lg"
            >
              <Linkedin size={24} />
              <span>Connect on LinkedIn</span>
              <motion.div
                animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;