import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Zap, 
  Target, 
  Brain, 
  BarChart3, 
  Layers, 
  Shield,
  Sparkles,
  LineChart,
  Database,
  Workflow,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/StaggerReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const metrics = [
  { icon: TrendingUp, value: "300%", label: "Faster Insights", description: "Reduced time-to-insight from days to hours" },
  { icon: Users, value: "10K+", label: "Beta Users", description: "Active users during closed beta phase" },
  { icon: Zap, value: "AI", label: "Powered", description: "ML models for predictive analytics" },
  { icon: Target, value: "98%", label: "Accuracy", description: "Prediction accuracy across key metrics" },
];

const features = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Machine learning models that forecast user behavior, churn risk, and revenue trends with unprecedented accuracy.",
  },
  {
    icon: LineChart,
    title: "Real-time Dashboards",
    description: "Live metrics that update in milliseconds, giving product teams instant visibility into what matters most.",
  },
  {
    icon: Database,
    title: "Unified Data Layer",
    description: "Connect all your data sources into a single, coherent view that eliminates silos and inconsistencies.",
  },
  {
    icon: Workflow,
    title: "Collaborative Workflows",
    description: "Built-in tools for teams to annotate, share insights, and coordinate on data-driven decisions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption and granular access controls.",
  },
  {
    icon: Sparkles,
    title: "AI Copilot",
    description: "Natural language queries that let anyone on the team explore data without SQL knowledge.",
  },
];

const timeline = [
  {
    phase: "Discovery",
    period: "Q1 2022",
    title: "Problem Identification",
    description: "Identified core pain points in product analytics: data silos, slow insights, and lack of predictive capabilities.",
    outcomes: ["50+ user interviews", "Market analysis", "Technical feasibility study"],
  },
  {
    phase: "Foundation",
    period: "Q2 2022",
    title: "Architecture & MVP",
    description: "Designed scalable architecture and built minimum viable product with core analytics engine.",
    outcomes: ["Data pipeline design", "ML model prototypes", "First internal users"],
  },
  {
    phase: "Beta",
    period: "Q3-Q4 2022",
    title: "Closed Beta Launch",
    description: "Launched to select partners, iterating rapidly based on real-world usage and feedback.",
    outcomes: ["1K+ beta users", "95% satisfaction rate", "Key feature prioritization"],
  },
  {
    phase: "Scale",
    period: "2023",
    title: "Growth & Expansion",
    description: "Scaled infrastructure, expanded feature set, and grew user base through organic adoption.",
    outcomes: ["10K+ active users", "Enterprise features", "API ecosystem"],
  },
  {
    phase: "Current",
    period: "2024+",
    title: "AI-First Evolution",
    description: "Integrating advanced AI capabilities including natural language queries and automated insights.",
    outcomes: ["AI Copilot launch", "Predictive modeling v2", "Global expansion"],
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"] },
  { category: "Infrastructure", items: ["AWS", "Kubernetes", "Terraform", "DataDog"] },
];

const Neko = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest-dark to-forest-deep" />
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-gold/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-forest-sage/15 rounded-full blur-[120px]" />
        </motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-24">
          <StaggerContainer className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <StaggerItem>
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                <span className="text-sm">Back to Projects</span>
              </Link>
            </StaggerItem>

            {/* Badge */}
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-gold/20 border border-orange-gold/30 rounded-full mb-8">
                <span className="w-2 h-2 bg-orange-gold rounded-full animate-pulse" />
                <span className="text-orange-gold text-sm font-bold tracking-wider uppercase">Case Study</span>
              </div>
            </StaggerItem>
            
            {/* Title */}
            <StaggerItem>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-orange-gold bg-clip-text text-transparent">
                  NÈKO
                </span>
              </h1>
            </StaggerItem>
            
            {/* Subtitle */}
            <StaggerItem>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/80 font-medium mb-4">
                AI-Powered Product Intelligence
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                A next-generation platform transforming how product teams make decisions through 
                real-time analytics, predictive modeling, and collaborative workflows.
              </p>
            </StaggerItem>

            {/* Metrics */}
            <StaggerItem>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                  >
                    <metric.icon size={24} className="text-orange-gold mx-auto mb-3" />
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-white/50 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Problem */}
              <StaggerItem>
                <div className="space-y-6">
                  <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase">The Problem</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Product teams were drowning in data
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Modern product teams face an overwhelming challenge: they have access to more data than ever, 
                      yet struggle to extract actionable insights quickly.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                        <span>Data scattered across 10+ tools with no unified view</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                        <span>Insights arriving days or weeks after decisions were needed</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                        <span>No predictive capabilities—always reacting, never anticipating</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </StaggerItem>

              {/* Solution */}
              <StaggerItem>
                <div className="space-y-6">
                  <span className="text-forest-sage text-xs font-bold tracking-[0.2em] uppercase">The Solution</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Intelligence that moves at the speed of product
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      NÈKO was built from the ground up to solve these challenges with a fundamentally 
                      different approach to product analytics.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-forest-sage mt-0.5 flex-shrink-0" />
                        <span>Unified data layer connecting all your tools in real-time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-forest-sage mt-0.5 flex-shrink-0" />
                        <span>Insights delivered in seconds, not days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-forest-sage mt-0.5 flex-shrink-0" />
                        <span>AI-powered predictions that anticipate what's coming</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="max-w-6xl mx-auto">
            <StaggerItem>
              <div className="text-center mb-16">
                <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Capabilities</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Built for the modern product team
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Every feature designed to reduce time-to-insight and empower data-driven decisions.
                </p>
              </div>
            </StaggerItem>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-2xl p-6 h-full"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-gold/20 to-forest-sage/20 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon size={24} className="text-orange-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Mockup Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="max-w-6xl mx-auto">
            <StaggerItem>
              <div className="text-center mb-16">
                <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Interface</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Designed for clarity
                </h2>
              </div>
            </StaggerItem>

            {/* Dashboard Mockup */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -8 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Browser chrome */}
                <div className="bg-forest-deep p-4 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-orange-gold/80" />
                    <div className="w-3 h-3 rounded-full bg-forest-sage/80" />
                  </div>
                  <div className="flex-1 bg-forest-dark/50 rounded-lg px-4 py-1.5 text-white/40 text-sm">
                    app.neko.ai/dashboard
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="bg-gradient-to-br from-forest-dark to-forest-deep p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-white text-xl font-bold">Product Dashboard</h3>
                      <p className="text-white/50 text-sm">Real-time analytics overview</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm">Last 7 days</div>
                      <div className="px-4 py-2 bg-orange-gold rounded-lg text-forest-deep text-sm font-medium">Export</div>
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Active Users", value: "12,847", change: "+12%" },
                      { label: "Avg. Session", value: "4m 32s", change: "+8%" },
                      { label: "Conversion", value: "3.2%", change: "+15%" },
                      { label: "Revenue", value: "$48.2K", change: "+23%" },
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-white/50 text-xs mb-1">{stat.label}</p>
                        <div className="flex items-end justify-between">
                          <span className="text-white text-2xl font-bold">{stat.value}</span>
                          <span className="text-forest-sage text-xs font-medium">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-48 flex items-end justify-between gap-2">
                    {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72].map((height, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-orange-gold to-orange-gold/50 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="max-w-4xl mx-auto">
            <StaggerItem>
              <div className="text-center mb-16">
                <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Journey</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  From idea to impact
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The evolution of NÈKO through key milestones and learnings.
                </p>
              </div>
            </StaggerItem>

            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="glass-card rounded-2xl p-6 sm:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                      {/* Phase indicator */}
                      <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 sm:w-28 flex-shrink-0">
                        <span className="text-orange-gold text-xs font-bold tracking-wider uppercase">{item.phase}</span>
                        <span className="text-muted-foreground text-sm">{item.period}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.outcomes.map((outcome, oidx) => (
                            <span 
                              key={oidx}
                              className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                            >
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="max-w-4xl mx-auto">
            <StaggerItem>
              <div className="text-center mb-16">
                <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Technology</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Built with modern tools
                </h2>
              </div>
            </StaggerItem>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack, idx) => (
                <StaggerItem key={idx}>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-sm font-bold text-orange-gold uppercase tracking-wider mb-4">{stack.category}</h3>
                    <div className="space-y-2">
                      {stack.items.map((item, iidx) => (
                        <div key={iidx} className="text-foreground text-sm">{item}</div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-forest-deep to-forest-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-gold/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <StaggerContainer className="text-center max-w-2xl mx-auto">
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Want to build something like this?
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-white/60 text-lg mb-8">
                Let's discuss how I can help bring your product vision to life.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Link 
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-gold text-forest-deep font-bold rounded-full hover:bg-orange-gold/90 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Neko;
