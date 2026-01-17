import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const bg1Y = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const bg3Y = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.08, 1]);

  return (
    <section id="contact" className="py-24 sm:py-28 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Parallax ambient background with more green */}
      <motion.div 
        style={{ y: bg1Y, scale: bg1Scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-forest-sage/10 rounded-full blur-[140px]" 
      />
      <motion.div 
        style={{ y: bg2Y }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest-dark/8 rounded-full blur-[100px]" 
      />
      <motion.div 
        style={{ y: bg3Y }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-gold/6 rounded-full blur-[80px]" 
      />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer className="max-w-4xl mx-auto text-center">
            {/* Section label */}
            <StaggerItem>
              <span className="inline-block text-orange-gold text-sm font-bold tracking-[0.2em] uppercase mb-6">Contact</span>
            </StaggerItem>
            
            {/* Main headline */}
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-forest-deep mb-3">
                Let's build something
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-brand mb-12">
                together.
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-body text-lg mb-14 max-w-xl mx-auto font-medium">
                Want to build something, fix something, or talk through an idea? 
                I'm always open to a good conversation.
              </p>
            </StaggerItem>

            {/* CTA */}
            <StaggerItem>
              <div className="flex justify-center">
                <MagneticButton
                  href="https://www.linkedin.com/in/miketnicholsii/"
                  className="group inline-flex items-center gap-4 px-12 py-5 bg-forest-deep text-white font-semibold rounded-full transition-all duration-400 hover:bg-forest-dark hover:shadow-2xl hover:shadow-forest-deep/30"
                >
                  <Linkedin size={24} />
                  <span className="text-lg">Connect on LinkedIn</span>
                  <ArrowUpRight size={22} className="text-orange-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </MagneticButton>
              </div>
            </StaggerItem>

            {/* Decorative tagline */}
            <StaggerItem>
              <p className="mt-20 text-forest-sage text-sm font-semibold tracking-[0.15em] uppercase">
                Let's create something amazing
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Contact;
