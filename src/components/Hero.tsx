import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Ambient glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-subtle text-sm font-medium tracking-widest uppercase mb-6 animate-fade-up">
            Product Leader · Strategist · Builder
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1] mb-8 animate-fade-up-delay-1">
            Hi, I'm Mike.
            <br />
            <span className="text-gradient">
              I build products that matter.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-body text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mb-12 animate-fade-up-delay-2">
            High-performance platforms, cross-functional teams, and business solutions — 
            with clarity, empathy, and a bias toward action.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
            >
              View experience
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up-delay-4">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-subtle hover:text-body transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
