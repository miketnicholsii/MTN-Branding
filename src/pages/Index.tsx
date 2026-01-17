import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Skills from "@/components/Skills";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleField from "@/components/ParticleField";
import LoadingScreen from "@/components/LoadingScreen";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }
    },
  };

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoaded(true)} />
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pageVariants}
            className="min-h-screen relative"
          >
            <AnimatedBackground />
            <ParticleField />
            <ScrollProgress />
            <Header />
            <main className="relative z-10">
              <Hero />
              <SectionDivider 
                variant="fade" 
                from="hsl(var(--forest-700))" 
                to="hsl(var(--forest-900))" 
              />
              <About />
              <SectionDivider 
                variant="fade" 
                from="hsl(var(--forest-900))" 
                to="hsl(var(--forest-700))" 
              />
              <Experience />
              <SectionDivider 
                variant="curve" 
                from="hsl(var(--forest-700))" 
                to="hsl(var(--forest-900))" 
              />
              <Projects />
              <SectionDivider 
                variant="fade" 
                from="hsl(var(--forest-900))" 
                to="hsl(var(--forest-700))" 
              />
              <Skills />
              <SectionDivider 
                variant="angle" 
                from="hsl(var(--forest-700))" 
                to="hsl(var(--forest-900))" 
              />
              <Capabilities />
              <SectionDivider 
                variant="fade" 
                from="hsl(var(--forest-900))" 
                to="hsl(var(--forest-700))" 
              />
              <Recommendations />
              <SectionDivider 
                variant="curve" 
                from="hsl(var(--forest-700))" 
                to="hsl(var(--forest-900))" 
              />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;