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

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Mouse parallax for image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const imageXSpring = useSpring(mouseX, springConfig);
  const imageYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 50;
      const y = (clientY - innerHeight / 2) / 50;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 sm:pt-0">
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <StaggerContainer className="text-center lg:text-left order-2 lg:order-1">
            {/* Eyebrow badge */}
            <StaggerItem>
              <motion.div 
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 glass-pill rounded-full mb-6 sm:mb-8 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={14} className="text-primary sm:w-4 sm:h-4" />
                <span className="text-body text-xs sm:text-sm font-medium">Product Leader · Strategist · Builder</span>
              </motion.div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-1 sm:mb-2 text-headline px-1 lg:px-0">
                Hi, I'm Mike T. Nichols{" "}
                <motion.span 
                  className="text-primary inline-block" 
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  II
                </motion.span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gradient-brand mb-5 sm:mb-8 px-1 lg:px-0"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                I build products that matter.
              </motion.h1>
            </StaggerItem>

            {/* Subheadline */}
            <StaggerItem>
              <p className="text-body text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 px-2 lg:px-0">
                High-performance platforms, cross-functional teams, and business solutions — 
                with clarity, empathy, and a bias toward action.
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 px-4 lg:px-0">
                <MagneticButton
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 text-sm sm:text-base"
                >
                  Get in Touch
                  <motion.span 
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
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
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 px-2 lg:px-0">
                {[
                  { icon: Target, text: "Strategic Vision" },
                  { icon: TrendingUp, text: "Proven Results" },
                  { icon: Zap, text: "Rapid Execution" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 text-subtle text-xs sm:text-sm cursor-default transition-colors duration-300 hover:text-body"
                    whileHover={{ scale: 1.1, x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                    >
                      <item.icon size={14} className="text-primary sm:w-4 sm:h-4" />
                    </motion.div>
                    <span>{item.text}</span>
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
                rotateZ: imageRotate,
                x: imageXSpring,
              }}
              className="relative"
            >
              {/* Animated rings */}
              <motion.div
                className="absolute -inset-4 sm:-inset-6 rounded-full border-2 border-primary/20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -inset-8 sm:-inset-12 rounded-full border border-primary/10"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating accent dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-3 h-3 bg-primary rounded-full"
                animate={{ 
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-6 w-2 h-2 bg-primary/60 rounded-full"
                animate={{ 
                  y: [10, -10, 10],
                  x: [5, -5, 5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-full blur-2xl scale-110" />
              
              {/* Image container */}
              <motion.div
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={headshot}
                  alt="Mike T. Nichols II"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </StaggerItem>
        </div>
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
          <motion.div 
            className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-1 h-1 bg-current rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;