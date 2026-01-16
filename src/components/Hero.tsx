import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, TrendingUp, Target, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { useRef, useEffect } from "react";
import headshot from "@/assets/headshot.png";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Subtle mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const imageXSpring = useSpring(mouseX, springConfig);
  const imageYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 80;
      const y = (clientY - innerHeight / 2) / 80;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 sm:pt-0">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-forest-light/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-orange-gold/8 rounded-full blur-3xl animate-breathe delay-200" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <StaggerContainer className="text-center lg:text-left order-2 lg:order-1">
            {/* Eyebrow badge */}
            <StaggerItem>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 glass-pill rounded-full mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="w-2 h-2 bg-orange-gold rounded-full animate-pulse-subtle" />
                <span className="text-body text-sm font-medium">Product Leader · Strategist · Builder</span>
              </motion.div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] mb-2 text-headline">
                Hi, I'm Mike T. Nichols{" "}
                <span 
                  className="text-forest-light" 
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  II
                </span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] text-gradient-brand mb-8">
                I build products that matter.
              </h1>
            </StaggerItem>

            {/* Subheadline */}
            <StaggerItem>
              <p className="text-body text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                High-performance platforms, cross-functional teams, and business solutions — 
                with clarity, empathy, and a bias toward action.
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <MagneticButton
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest-deep text-white font-semibold rounded-full transition-all duration-500 hover:bg-forest-mid hover:shadow-lg hover:shadow-forest-deep/20"
                >
                  Get in Touch
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </MagneticButton>
                <MagneticButton
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card text-foreground font-semibold rounded-full hover:shadow-md transition-all duration-500"
                >
                  View Experience
                </MagneticButton>
              </div>
            </StaggerItem>

            {/* Feature pills */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {[
                  { icon: Target, text: "Strategic Vision" },
                  { icon: TrendingUp, text: "Proven Results" },
                  { icon: Zap, text: "Rapid Execution" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-subtle text-sm group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon size={16} className="text-orange-gold group-hover:text-orange-bright transition-colors duration-300" />
                    <span className="group-hover:text-body transition-colors duration-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Headshot Image */}
          <StaggerItem className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              style={{ 
                y: imageY, 
                scale: imageScale,
                x: imageXSpring,
              }}
              className="relative"
            >
              {/* Subtle decorative ring */}
              <motion.div
                className="absolute -inset-6 rounded-full border border-forest-light/20"
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Accent dot */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-orange-gold rounded-full shadow-lg"
                animate={{ 
                  y: [-4, 4, -4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-light/10 via-transparent to-orange-gold/10 rounded-full blur-2xl scale-110" />
              
              {/* Image container */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 25px 80px -20px rgba(42, 49, 42, 0.25), 0 10px 30px -10px rgba(42, 49, 42, 0.2)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src={headshot}
                  alt="Mike T. Nichols II"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/5 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </StaggerItem>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden sm:block absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-subtle hover:text-forest-mid transition-colors duration-300"
        >
          <motion.div 
            className="w-5 h-9 rounded-full border border-current flex justify-center pt-2"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-orange-gold rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;