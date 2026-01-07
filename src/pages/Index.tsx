import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleField from "@/components/ParticleField";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoaded(true)} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen relative"
      >
        <AnimatedBackground />
        <ParticleField />
        <ScrollProgress />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Capabilities />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;