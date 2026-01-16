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
    <section id="contact" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-gold/6 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-forest-light/5 rounded-full blur-3xl" />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer className="max-w-3xl mx-auto text-center">
            {/* Section label */}
            <StaggerItem>
              <span className="inline-block text-orange-gold text-sm font-semibold tracking-widest uppercase mb-6">Contact</span>
            </StaggerItem>
            
            {/* Main headline */}
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-headline mb-2">
                Let's build something
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-brand mb-10">
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
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-forest-deep text-white font-semibold rounded-full transition-all duration-500 hover:bg-forest-mid hover:shadow-xl hover:shadow-forest-deep/20"
                >
                  <Linkedin size={22} />
                  <span className="text-lg">Connect on LinkedIn</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </MagneticButton>
              </div>
            </StaggerItem>

            {/* Decorative tagline */}
            <StaggerItem>
              <p className="mt-16 text-subtle text-sm tracking-widest uppercase">
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