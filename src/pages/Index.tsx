import { useState, lazy, Suspense, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import LoadingScreen from "@/components/LoadingScreen";

// Lazy load below-the-fold components
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Capabilities = lazy(() => import("@/components/Capabilities"));
const Skills = lazy(() => import("@/components/Skills"));
const Recommendations = lazy(() => import("@/components/Recommendations"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const ParticleField = lazy(() => import("@/components/ParticleField"));

// Minimal fallback for lazy components
const SectionFallback = memo(() => (
  <div className="min-h-[200px]" aria-hidden="true" />
));
SectionFallback.displayName = "SectionFallback";

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
            <Suspense fallback={null}>
              <ParticleField />
            </Suspense>
            <ScrollProgress />
            <Header />
            <main className="relative z-10">
              <Hero />
              <Suspense fallback={<SectionFallback />}>
                <About />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Experience />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Skills />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Capabilities />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Recommendations />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={<SectionFallback />}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;