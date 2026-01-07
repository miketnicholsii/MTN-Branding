import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
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
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 geometric-grid" />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsl(173 79% 43% / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsl(195 65% 37% / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, hsl(38 100% 73% / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsl(173 79% 43% / 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 left-16 w-24 h-24 border border-accent/20 rounded-full"
      />
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-secondary rounded-full"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: 45 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-10 w-16 h-16 border-2 border-secondary/30"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-5xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={14} className="text-primary" />
            </motion.div>
            <span className="text-primary text-sm font-medium">Product Leader · Strategist · Builder</span>
          </motion.div>

          {/* Main headline with text reveal */}
          <div className="mb-8">
            <TextReveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05]">
                Hi, I'm Mike.
              </h1>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05]">
                <span className="text-gradient">I build products</span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05]">
                <span className="text-gradient">that matter.</span>
              </h1>
            </TextReveal>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body text-xl md:text-2xl leading-relaxed max-w-2xl mb-12"
          >
            High-performance platforms, cross-functional teams, and business solutions — 
            with clarity, empathy, and a bias toward action.
          </motion.p>

          {/* CTAs with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all shadow-lg shadow-primary/20"
            >
              Get in touch
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground font-semibold rounded-full"
            >
              View experience
            </MagneticButton>
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
          className="flex flex-col items-center gap-3 text-subtle hover:text-primary transition-colors group"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs font-semibold tracking-widest uppercase"
          >
            Scroll
          </motion.span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;