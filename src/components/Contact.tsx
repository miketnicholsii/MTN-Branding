import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ArrowUpRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Animated accent glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/10 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full"
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full"
        animate={{ 
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full"
        animate={{ 
          y: [-15, 15, -15],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer className="max-w-3xl mx-auto text-center">
            {/* Section label */}
            <StaggerItem>
              <motion.span 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-6"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={14} className="text-primary" />
                Contact
                <Sparkles size={14} className="text-primary" />
              </motion.span>
            </StaggerItem>
            
            {/* Main headline */}
            <StaggerItem>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-2 px-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Let's build something
              </motion.h2>
            </StaggerItem>
            
            <StaggerItem>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gradient-brand mb-6 sm:mb-8 px-2"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                together.
              </motion.h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-body text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto px-4">
                Want to build something, fix something, or talk through an idea? 
                I'm always open to a good conversation.
              </p>
            </StaggerItem>

            {/* CTA */}
            <StaggerItem>
              <div className="flex justify-center px-4">
                <MagneticButton
                  href="https://www.linkedin.com/in/miketnicholsii/"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground font-semibold rounded-full transition-all text-base sm:text-lg hover:shadow-xl hover:shadow-primary/40 animate-pulse-glow"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </motion.div>
                  <span>Connect on LinkedIn</span>
                  <motion.div
                    animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
                  </motion.div>
                </MagneticButton>
              </div>
            </StaggerItem>

            {/* Decorative tagline */}
            <StaggerItem>
              <motion.p 
                className="mt-10 sm:mt-16 text-subtle text-xs sm:text-sm tracking-widest uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Let's create something amazing
              </motion.p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Contact;