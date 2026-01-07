import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 lg:py-40 bg-primary relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-60 h-60 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-80 h-80 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-secondary rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full"
        />
        
        {/* Gradient orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-40 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 left-40 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-6 backdrop-blur-sm"
          >
            Contact
          </motion.span>
          
          <div className="mb-6">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                Let's build something
              </h2>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary">
                together
              </h2>
            </TextReveal>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-xl mb-12 max-w-2xl mx-auto"
          >
            Want to build something, fix something, or talk through an idea? 
            I'm always open to a good conversation.
          </motion.p>

          {/* CTA with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <MagneticButton
              href="https://www.linkedin.com/in/miketnicholsii/"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-semibold rounded-full transition-all shadow-xl text-lg"
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

          {/* Decorative tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 text-white/40 text-sm tracking-widest uppercase"
          >
            Let's create something amazing
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;