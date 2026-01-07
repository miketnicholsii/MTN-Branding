import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, TrendingUp, Target, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 lg:px-8 relative z-10"
      >
        <StaggerContainer className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 glass-pill rounded-full mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} className="text-primary" />
              </motion.div>
              <span className="text-body text-sm font-medium">Product Leader · Strategist · Builder</span>
            </motion.div>
          </StaggerItem>

          {/* Main headline */}
          <StaggerItem>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-2">
              Hi, I'm Mike Nichols.
            </h1>
          </StaggerItem>
          
          <StaggerItem>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gradient mb-8">
              I build products that matter.
            </h1>
          </StaggerItem>

          {/* Subheadline */}
          <StaggerItem>
            <p className="text-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              High-performance platforms, cross-functional teams, and business solutions — 
              with clarity, empathy, and a bias toward action.
            </p>
          </StaggerItem>

          {/* CTAs */}
          <StaggerItem>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <MagneticButton
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                Get in Touch
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </MagneticButton>
              <MagneticButton
                href="#experience"
                className="inline-flex items-center gap-2 px-8 py-4 glass-pill text-foreground font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                View Experience
              </MagneticButton>
            </div>
          </StaggerItem>

          {/* Feature pills */}
          <StaggerItem>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Target, text: "Strategic Vision" },
                { icon: TrendingUp, text: "Proven Results" },
                { icon: Zap, text: "Rapid Execution" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="flex items-center gap-2 text-subtle text-sm cursor-default"
                >
                  <item.icon size={16} className="text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-subtle hover:text-primary transition-colors"
        >
          <div className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-current rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;