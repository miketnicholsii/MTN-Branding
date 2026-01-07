import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 geometric-grid" />
      
      {/* Floating blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 blob floating opacity-60" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent/10 blob floating opacity-40" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-secondary/20 blob floating opacity-50" style={{ animationDelay: "-5s" }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary text-sm font-medium">Product Leader · Strategist · Builder</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] mb-8"
          >
            Hi, I'm Mike.
            <br />
            <span className="text-gradient">
              I build products
            </span>
            <br />
            <span className="text-gradient">
              that matter.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body text-xl md:text-2xl leading-relaxed max-w-2xl mb-12"
          >
            High-performance platforms, cross-functional teams, and business solutions — 
            with clarity, empathy, and a bias toward action.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              Get in touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground font-semibold rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all hover:-translate-y-1"
            >
              View experience
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-subtle hover:text-primary transition-colors group"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
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