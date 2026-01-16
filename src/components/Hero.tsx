import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { TrendingUp, Target, Zap } from "lucide-react";
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

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 120 };
  const imageXSpring = useSpring(mouseX, springConfig);
  const imageYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 60;
      const y = (clientY - innerHeight / 2) / 60;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 sm:pt-0">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-forest-sage/8 rounded-full blur-[100px] animate-breathe" />
        <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-orange-gold/10 rounded-full blur-[80px] animate-breathe delay-300" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <StaggerContainer className="text-center lg:text-left order-2 lg:order-1">
            {/* Eyebrow badge */}
            <StaggerItem>
              <motion.div 
                className="inline-flex items-center gap-3 px-5 py-2.5 glass-pill rounded-full mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="w-2.5 h-2.5 bg-orange-gold rounded-full animate-subtle-glow" />
                <span className="text-forest-dark text-sm font-semibold tracking-wide">Product Leader · Strategist · Builder</span>
              </motion.div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-bold leading-[1.08] mb-3 text-forest-deep">
                Hi, I'm Mike T. Nichols{" "}
                <span className="text-forest-sage" style={{ fontFamily: 'Georgia, serif' }}>II</span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-bold leading-[1.08] text-gradient-brand mb-10">
                I build products that matter.
              </h1>
            </StaggerItem>

            {/* Subheadline */}
            <StaggerItem>
              <p className="text-body text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12 font-medium">
                High-performance platforms, cross-functional teams, and business solutions — 
                with clarity, empathy, and a bias toward action.
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-14">
                <MagneticButton
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-forest-deep text-white font-semibold rounded-full transition-all duration-400 hover:bg-forest-dark hover:shadow-xl hover:shadow-forest-deep/25"
                >
                  Get in Touch
                  <motion.span 
                    className="inline-block text-orange-gold"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </MagneticButton>
                <MagneticButton
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 border-2 border-forest-sage/30 text-forest-deep font-semibold rounded-full hover:bg-forest-sage/5 hover:border-forest-sage/50 transition-all duration-400"
                >
                  View Experience
                </MagneticButton>
              </div>
            </StaggerItem>

            {/* Feature pills */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                {[
                  { icon: Target, text: "Strategic Vision" },
                  { icon: TrendingUp, text: "Proven Results" },
                  { icon: Zap, text: "Rapid Execution" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2.5 text-forest-sage text-sm font-medium group cursor-default"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.25 }}
                  >
                    <item.icon size={18} className="text-orange-gold group-hover:text-orange-bright transition-colors duration-300" />
                    <span className="group-hover:text-forest-dark transition-colors duration-300">{item.text}</span>
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
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-5 rounded-full border-2 border-forest-sage/20"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Pulsing ring */}
              <div className="absolute -inset-5 rounded-full border border-orange-gold/30 animate-pulse-ring" />
              
              {/* Accent dots */}
              <motion.div
                className="absolute -top-3 -right-3 w-5 h-5 bg-orange-gold rounded-full shadow-lg shadow-orange-gold/40"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-4 w-3 h-3 bg-forest-sage rounded-full"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-sage/15 via-transparent to-orange-gold/15 rounded-full blur-3xl scale-125" />
              
              {/* Image container */}
              <motion.div
                className="relative w-72 h-72 sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 30px 100px -25px rgba(42, 49, 42, 0.35), 0 15px 40px -15px rgba(42, 49, 42, 0.25), inset 0 0 0 1px rgba(69, 91, 70, 0.1)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src={headshot}
                  alt="Mike T. Nichols II"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/8 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-gold/5" />
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
          className="flex flex-col items-center text-forest-sage hover:text-forest-dark transition-colors duration-300"
        >
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-orange-gold rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;