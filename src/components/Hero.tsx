import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, TrendingUp, Target, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 sm:pt-0">
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <StaggerContainer className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <StaggerItem>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 glass-pill rounded-full mb-6 sm:mb-8 hover:shadow-md transition-all duration-300">
              <Sparkles size={14} className="text-primary sm:w-4 sm:h-4" />
              <span className="text-body text-xs sm:text-sm font-medium">Product Leader · Strategist · Builder</span>
            </div>
          </StaggerItem>

          {/* Main headline */}
          <StaggerItem>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-1 sm:mb-2 text-headline">
              Hi, I'm Mike T. Nichols{" "}
              <span className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl align-baseline" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>II</span>
            </h1>
          </StaggerItem>
          
          <StaggerItem>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-gradient-brand mb-5 sm:mb-8">
              I build products that matter.
            </h1>
          </StaggerItem>

          {/* Subheadline */}
          <StaggerItem>
            <p className="text-body text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
              High-performance platforms, cross-functional teams, and business solutions — 
              with clarity, empathy, and a bias toward action.
            </p>
          </StaggerItem>

          {/* CTAs */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
              <MagneticButton
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 text-sm sm:text-base"
              >
                Get in Touch
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </MagneticButton>
              <MagneticButton
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 glass-pill text-foreground font-semibold rounded-full hover:shadow-md transition-all duration-300 text-sm sm:text-base"
              >
                View Experience
              </MagneticButton>
            </div>
          </StaggerItem>

          {/* Feature pills */}
          <StaggerItem>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-2">
              {[
                { icon: Target, text: "Strategic Vision" },
                { icon: TrendingUp, text: "Proven Results" },
                { icon: Zap, text: "Rapid Execution" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 text-subtle text-xs sm:text-sm cursor-default transition-colors duration-300 hover:text-body"
                >
                  <item.icon size={14} className="text-primary sm:w-4 sm:h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </motion.div>

      {/* Scroll indicator - hide on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="hidden sm:block absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-subtle hover:text-primary transition-colors duration-300"
        >
          <div className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5">
            <div className="w-1 h-1 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
