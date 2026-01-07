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

const Index = () => {
  return (
    <div className="min-h-screen relative">
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
    </div>
  );
};

export default Index;