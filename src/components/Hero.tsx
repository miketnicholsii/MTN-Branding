import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, TrendingUp, Target, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Radial gradient glow from top */}
      <div className="absolute inset-0 gradient-glow" />
      
      {/* Subtle circular ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      
      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
      />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge - NEKO style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 glass-pill rounded-full mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-body text-sm font-medium">Product Leader · Strategist · Builder</span>
          </motion.div>

          {/* Main headline - centered like NEKO */}
          <div className="mb-6">
            <TextReveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                Hi, I'm Mike Nichols.
              </h1>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gradient mt-2">
                I build products that matter.
              </h1>
            </TextReveal>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            High-performance platforms, cross-functional teams, and business solutions — 
            with clarity, empathy, and a bias toward action.
          </motion.p>

          {/* CTAs - NEKO style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all"
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
              className="inline-flex items-center gap-2 px-8 py-4 glass-pill text-foreground font-semibold rounded-full"
            >
              View Experience
            </MagneticButton>
          </motion.div>

          {/* Feature pills - NEKO style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: Target, text: "Strategic Vision" },
              { icon: TrendingUp, text: "Proven Results" },
              { icon: Zap, text: "Rapid Execution" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-subtle text-sm">
                <item.icon size={16} className="text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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