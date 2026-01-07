import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Extra glow for contact section */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[180px]"
      />
      
      <SectionTransition>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <StaggerContainer className="max-w-3xl mx-auto text-center">
            {/* Section label */}
            <StaggerItem>
              <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-6">Contact</span>
            </StaggerItem>
            
            {/* Main headline */}
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-2">
                Let's build something
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gradient-brand mb-8">
                together.
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-body text-lg mb-12 max-w-xl mx-auto">
                Want to build something, fix something, or talk through an idea? 
                I'm always open to a good conversation.
              </p>
            </StaggerItem>

            {/* CTA */}
            <StaggerItem>
              <div className="flex justify-center">
                <MagneticButton
                  href="https://www.linkedin.com/in/miketnicholsii/"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-full transition-all text-lg hover:shadow-xl hover:shadow-primary/40"
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
              </div>
            </StaggerItem>

            {/* Decorative tagline */}
            <StaggerItem>
              <motion.p
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-16 text-subtle text-sm tracking-widest uppercase"
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