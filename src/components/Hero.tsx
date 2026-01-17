import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { TrendingUp, Target, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import TypeWriter from "./TypeWriter";
import { SkillTags } from "./RotatingText";
import { useRef, useEffect } from "react";
import headshot from "@/assets/headshot.png";

const Hero = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const contentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 80]),
    springConfig
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, shouldReduceMotion ? 1 : 0]);
  
  const imageYRaw = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 50]);
  const imageY = useSpring(imageYRaw, springConfig);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, shouldReduceMotion ? 1 : 0.97]);

  const layer1Y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 150]),
    springConfig
  );
  const layer2Y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -100]),
    springConfig
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseSpringConfig = { damping: 30, stiffness: 120 };
  const imageXSpring = useSpring(mouseX, mouseSpringConfig);
  const imageYSpring = useSpring(mouseY, mouseSpringConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 80;
      const y = (clientY - innerHeight / 2) / 80;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: "calc(80px + 2rem)", paddingBottom: "2rem" }}
    >
      {/* Simplified parallax background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: layer1Y }}
          className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full"
        >
          <div className="w-full h-full bg-gradient-radial from-forest-sage/20 via-forest-sage/5 to-transparent rounded-full blur-[100px]" />
        </motion.div>
        
        <motion.div 
          style={{ y: layer2Y }}
          className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] rounded-full"
        >
          <div className="w-full h-full bg-gradient-radial from-orange-gold/12 via-orange-gold/3 to-transparent rounded-full blur-[80px]" />
        </motion.div>

        {/* Subtle floating particles */}
        <motion.div
          className="absolute top-[25%] left-[20%] w-2 h-2 bg-orange-gold/30 rounded-full blur-[1px]"
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[50%] right-[25%] w-1.5 h-1.5 bg-forest-sage/40 rounded-full blur-[1px]"
          animate={{ y: [8, -8, 8], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <StaggerContainer className="text-center lg:text-left order-2 lg:order-1">
            {/* Eyebrow badge */}
            <StaggerItem>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 glass-pill rounded-full mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="w-2 h-2 bg-orange-gold rounded-full animate-subtle-glow" />
                <span className="text-foreground/80 text-xs sm:text-sm font-medium tracking-wide">Product Leader · Strategist · Builder</span>
              </motion.div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-foreground">
                <TypeWriter 
                  text="Hi, I'm " 
                  delay={800}
                  speed={80}
                  cursor={false}
                />
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.4 }}
                >
                  <span className="text-gradient-brand">Mike</span>
                  <motion.span 
                    className="ml-2 inline-block"
                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 1.8, duration: 0.5, type: "spring", stiffness: 200 }}
                  >
                    👋🏾
                  </motion.span>
                </motion.span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
                I solve complex problems with{" "}
                <span className="text-gradient-brand font-semibold">clarity</span>,{" "}
                <span className="text-gradient-brand font-semibold">creativity</span>, and a{" "}
                <span className="text-orange-gold font-semibold">dad joke</span> or two.
              </p>
            </StaggerItem>

            {/* Subheadline */}
            <StaggerItem>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
                I'm an <span className="text-foreground font-medium">Agile Product Manager</span> and{" "}
                <span className="text-foreground font-medium">Digital Strategist</span> who builds platforms that drive growth.
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <MagneticButton
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Get in Touch
                  <motion.span 
                    className="inline-block text-orange-gold"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </MagneticButton>
                <MagneticButton
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-muted transition-all duration-300"
                >
                  View Experience
                </MagneticButton>
              </div>
            </StaggerItem>

            {/* Skill Tags */}
            <StaggerItem>
              <SkillTags
                skills={[
                  ["Product Strategy", "Roadmapping", "Vision"],
                  ["Agile", "Scrum", "Kanban"],
                  ["UX Design", "Research", "Prototyping"],
                  ["Data Analysis", "SQL", "Tableau"],
                  ["Leadership", "Stakeholders", "Teams"],
                ]}
                className="justify-center lg:justify-start mb-6"
                tagClassName="bg-card border-border text-foreground text-xs"
                interval={2800}
              />
            </StaggerItem>

            {/* Feature pills */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {[
                  { icon: Target, text: "Strategic Vision" },
                  { icon: TrendingUp, text: "Proven Results" },
                  { icon: Zap, text: "Rapid Execution" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground text-xs font-medium"
                  >
                    <item.icon size={14} className="text-orange-gold" />
                    <span>{item.text}</span>
                  </div>
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
                className="absolute -inset-3 rounded-full border border-border/50"
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Accent dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-orange-gold rounded-full shadow-lg shadow-orange-gold/30"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Image container */}
              <motion.div
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px -15px rgba(42, 49, 42, 0.25)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={headshot}
                  alt="Mike T. Nichols II"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </StaggerItem>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <motion.div 
            className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-1 h-1 bg-orange-gold rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
