import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'hsla(var(--forest-900) / 0.3)' }} />
      </motion.div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer className="max-w-2xl mx-auto text-center">
          {/* Section label */}
          <StaggerItem>
            <span 
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: 'hsl(var(--orange-500))' }}
            >
              Contact
            </span>
          </StaggerItem>
          
          {/* Main headline */}
          <StaggerItem>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
              style={{ color: 'hsl(var(--offwhite))' }}
            >
              Let's build something
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-brand mb-8">
              together.
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <p 
              className="text-base mb-10 max-w-md mx-auto"
              style={{ color: 'hsl(var(--softwhite))' }}
            >
              Want to build something, fix something, or talk through an idea? 
              I'm always open to a good conversation.
            </p>
          </StaggerItem>

          {/* CTA */}
          <StaggerItem>
            <div className="flex justify-center">
              <MagneticButton
                href="https://www.linkedin.com/in/miketnicholsii/"
                className="btn-primary group inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight 
                  size={18} 
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  style={{ color: 'hsl(var(--ink))' }}
                />
              </MagneticButton>
            </div>
          </StaggerItem>

          {/* Decorative tagline */}
          <StaggerItem>
            <p 
              className="mt-12 text-xs font-medium tracking-[0.15em] uppercase"
              style={{ color: 'hsl(var(--softwhite))' }}
            >
              Let's create something amazing
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Contact;