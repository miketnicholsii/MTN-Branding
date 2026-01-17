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
  { icon: Zap, value: "$8K", label: "Avg Build", description: "Average project value delivered" },
  { icon: Target, value: "99.9%", label: "Uptime", description: "Platform reliability and availability" },
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
    <div className="min-h-screen" style={{ background: 'hsl(var(--forest-700))' }}>
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, hsl(var(--forest-950)), hsl(var(--forest-900)), hsl(var(--forest-950)))' }}
        />
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div 
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
            style={{ background: 'hsla(var(--orange-500) / 0.12)' }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ background: 'hsla(var(--forest-700) / 0.3)' }}
          />
        </motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsla(var(--offwhite) / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsla(var(--offwhite) / 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-24">
          <StaggerContainer className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <StaggerItem>
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 transition-colors mb-8"
                style={{ color: 'hsl(var(--softwhite))' }}
              >
                <ArrowLeft size={16} />
                <span className="text-sm">Back to Projects</span>
              </Link>
            </StaggerItem>

            {/* Badge */}
            <StaggerItem>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  background: 'hsla(var(--orange-500) / 0.2)',
                  border: '1px solid hsla(var(--orange-500) / 0.3)',
                }}
              >
                <span 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: 'hsl(var(--orange-500))' }}
                />
                <span 
                  className="text-sm font-bold tracking-wider uppercase"
                  style={{ color: 'hsl(var(--orange-500))' }}
                >
                  Case Study
                </span>
              </div>
            </StaggerItem>
            
            {/* Title */}
            <StaggerItem>
              <h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--offwhite)), hsl(var(--offwhite)), hsl(var(--orange-500)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                NÈKO
              </h1>
            </StaggerItem>
            
            {/* Subtitle */}
            <StaggerItem>
              <p 
                className="text-xl sm:text-2xl md:text-3xl font-medium mb-4"
                style={{ color: 'hsla(var(--offwhite) / 0.8)' }}
              >
                Digital Strategy & Product Intelligence
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <p 
                className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
                style={{ color: 'hsl(var(--softwhite))' }}
              >
                A next-generation platform transforming how product teams make decisions through 
                real-time analytics, predictive modeling, and collaborative workflows.
              </p>
            </StaggerItem>

            {/* Metrics */}
            <StaggerItem>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
                {metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="text-center p-6 sm:p-8 backdrop-blur-md rounded-2xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, hsla(var(--forest-900) / 0.8), hsla(var(--forest-950) / 0.6))',
                      border: '1px solid hsla(var(--offwhite) / 0.12)',
                      boxShadow: 'var(--shadow-1), inset 0 1px 0 hsla(var(--offwhite) / 0.05)',
                    }}
                  >
                    {/* Subtle gradient overlay */}
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{ 
                        background: 'radial-gradient(circle at 50% 0%, hsla(var(--orange-500) / 0.15), transparent 70%)' 
                      }}
                    />
                    <div className="relative z-10">
                      <metric.icon size={28} className="mx-auto mb-4" style={{ color: 'hsl(var(--orange-500))' }} />
                      <div 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight"
                        style={{ color: 'hsl(var(--offwhite))' }}
                      >
                        {metric.value}
                      </div>
                      <div 
                        className="text-sm font-medium"
                        style={{ color: 'hsl(var(--softwhite))' }}
                      >
                        {metric.label}
                      </div>
                    </div>
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
          <div 
            className="w-6 h-10 rounded-full flex items-start justify-center p-2"
            style={{ border: '2px solid hsla(var(--offwhite) / 0.3)' }}
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'hsl(var(--offwhite))' }}
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
                  <span 
                    className="text-xs font-bold tracking-[0.2em] uppercase"
                    style={{ color: 'hsl(var(--orange-500))' }}
                  >
                    The Problem
                  </span>
                  <h2 
                    className="text-3xl sm:text-4xl font-bold"
                    style={{ color: 'hsl(var(--offwhite))' }}
                  >
                    Product teams were drowning in data
                  </h2>
                  <div className="space-y-4" style={{ color: 'hsl(var(--softwhite))' }}>
                    <p>
                      Modern product teams face an overwhelming challenge: they have access to more data than ever, 
                      yet struggle to extract actionable insights quickly.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: 'hsl(var(--orange-700))' }}
                        />
                        <span>Data scattered across 10+ tools with no unified view</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: 'hsl(var(--orange-700))' }}
                        />
                        <span>Insights arriving days or weeks after decisions were needed</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: 'hsl(var(--orange-700))' }}
                        />
                        <span>No predictive capabilities—always reacting, never anticipating</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </StaggerItem>

              {/* Solution */}
              <StaggerItem>
                <div className="space-y-6">
                  <span 
                    className="text-xs font-bold tracking-[0.2em] uppercase"
                    style={{ color: 'hsl(var(--forest-700))' }}
                  >
                    The Solution
                  </span>
                  <h2 
                    className="text-3xl sm:text-4xl font-bold"
                    style={{ color: 'hsl(var(--offwhite))' }}
                  >
                    Intelligence that moves at the speed of product
                  </h2>
                  <div className="space-y-4" style={{ color: 'hsl(var(--softwhite))' }}>
                    <p>
                      NÈKO was built from the ground up to solve these challenges with a fundamentally 
                      different approach to product analytics.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--forest-700))' }} />
                        <span>Unified data layer connecting all your tools in real-time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--forest-700))' }} />
                        <span>Insights delivered in seconds, not days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--forest-700))' }} />
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
      <section 
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: 'hsl(var(--forest-900))' }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="max-w-6xl mx-auto">
            <StaggerItem>
              <div className="text-center mb-16">
                <span 
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
                  style={{ color: 'hsl(var(--orange-500))' }}
                >
                  Capabilities
                </span>
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: 'hsl(var(--offwhite))' }}
                >
                  Built for the modern product team
                </h2>
                <p 
                  className="max-w-2xl mx-auto"
                  style={{ color: 'hsl(var(--softwhite))' }}
                >
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
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'linear-gradient(135deg, hsla(var(--orange-500) / 0.2), hsla(var(--forest-700) / 0.2))' }}
                    >
                      <feature.icon size={24} style={{ color: 'hsl(var(--orange-500))' }} />
                    </div>
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ color: 'hsl(var(--offwhite))' }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'hsl(var(--softwhite))' }}
                    >
                      {feature.description}
                    </p>
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
                <span 
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
                  style={{ color: 'hsl(var(--orange-500))' }}
                >
                  Interface
                </span>
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: 'hsl(var(--offwhite))' }}
                >
                  Designed for clarity
                </h2>
              </div>
            </StaggerItem>

            {/* Dashboard Mockup */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -8 }}
                className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: 'var(--shadow-2)' }}
              >
                {/* Browser chrome */}
                <div 
                  className="p-4 flex items-center gap-3"
                  style={{ background: 'hsl(var(--forest-950))' }}
                >
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(var(--orange-700))' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(var(--orange-500))' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(var(--forest-700))' }} />
                  </div>
                  <div 
                    className="flex-1 rounded-lg px-4 py-1.5 text-sm"
                    style={{ 
                      background: 'hsla(var(--forest-900) / 0.5)',
                      color: 'hsl(var(--softwhite))',
                    }}
                  >
                    app.neko.ai/dashboard
                  </div>
                </div>

                {/* Dashboard content */}
                <div 
                  className="p-8"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--forest-900)), hsl(var(--forest-950)))' }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 
                        className="text-xl font-bold"
                        style={{ color: 'hsl(var(--offwhite))' }}
                      >
                        Product Dashboard
                      </h3>
                      <p 
                        className="text-sm"
                        style={{ color: 'hsl(var(--softwhite))' }}
                      >
                        Real-time analytics overview
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div 
                        className="px-4 py-2 rounded-lg text-sm"
                        style={{ 
                          background: 'hsla(var(--offwhite) / 0.1)',
                          color: 'hsl(var(--offwhite))',
                        }}
                      >
                        Last 7 days
                      </div>
                      <div 
                        className="px-4 py-2 rounded-lg text-sm font-medium"
                        style={{ 
                          background: 'hsl(var(--orange-500))',
                          color: 'hsl(var(--ink))',
                        }}
                      >
                        Export
                      </div>
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
                      <div 
                        key={idx} 
                        className="rounded-xl p-4"
                        style={{
                          background: 'hsla(var(--offwhite) / 0.05)',
                          border: '1px solid hsla(var(--offwhite) / 0.10)',
                        }}
                      >
                        <p 
                          className="text-xs mb-1"
                          style={{ color: 'hsl(var(--softwhite))' }}
                        >
                          {stat.label}
                        </p>
                        <div className="flex items-end justify-between">
                          <span 
                            className="text-2xl font-bold"
                            style={{ color: 'hsl(var(--offwhite))' }}
                          >
                            {stat.value}
                          </span>
                          <span 
                            className="text-xs font-medium"
                            style={{ color: 'hsl(var(--forest-700))' }}
                          >
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div 
                    className="rounded-xl p-6 h-48 flex items-end justify-between gap-2"
                    style={{
                      background: 'hsla(var(--offwhite) / 0.05)',
                      border: '1px solid hsla(var(--offwhite) / 0.10)',
                    }}
                  >
                    {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72].map((height, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                        className="flex-1 rounded-t"
                        style={{ background: 'linear-gradient(to top, hsl(var(--orange-500)), hsla(var(--orange-500) / 0.5))' }}
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
      <section 
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: 'hsl(var(--forest-900))' }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="max-w-4xl mx-auto">
            <StaggerItem>
              <div className="text-center mb-16">
                <span 
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
                  style={{ color: 'hsl(var(--orange-500))' }}
                >
                  Journey
                </span>
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: 'hsl(var(--offwhite))' }}
                >
                  From idea to impact
                </h2>
                <p 
                  className="max-w-2xl mx-auto"
                  style={{ color: 'hsl(var(--softwhite))' }}
                >
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
                        <span 
                          className="text-xs font-bold tracking-wider uppercase"
                          style={{ color: 'hsl(var(--orange-500))' }}
                        >
                          {item.phase}
                        </span>
                        <span 
                          className="text-sm"
                          style={{ color: 'hsl(var(--softwhite))' }}
                        >
                          {item.period}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 
                          className="text-xl font-bold mb-2"
                          style={{ color: 'hsl(var(--offwhite))' }}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="mb-4"
                          style={{ color: 'hsl(var(--softwhite))' }}
                        >
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.outcomes.map((outcome, oidx) => (
                            <span 
                              key={oidx}
                              className="px-3 py-1 text-xs font-medium rounded-full"
                              style={{
                                background: 'hsl(var(--forest-950))',
                                color: 'hsl(var(--softwhite))',
                              }}
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
                <span 
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
                  style={{ color: 'hsl(var(--orange-500))' }}
                >
                  Technology
                </span>
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: 'hsl(var(--offwhite))' }}
                >
                  Built with modern tools
                </h2>
              </div>
            </StaggerItem>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack, idx) => (
                <StaggerItem key={idx}>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 
                      className="text-sm font-bold uppercase tracking-wider mb-4"
                      style={{ color: 'hsl(var(--orange-500))' }}
                    >
                      {stack.category}
                    </h3>
                    <div className="space-y-2">
                      {stack.items.map((item, iidx) => (
                        <div 
                          key={iidx} 
                          className="text-sm"
                          style={{ color: 'hsl(var(--offwhite))' }}
                        >
                          {item}
                        </div>
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
      <section 
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, hsl(var(--forest-950)), hsl(var(--forest-900)))' }}
      >
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ background: 'hsla(var(--orange-500) / 0.12)' }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <StaggerContainer className="text-center max-w-2xl mx-auto">
            <StaggerItem>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'hsl(var(--offwhite))' }}
              >
                Want to build something like this?
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p 
                className="text-lg mb-8"
                style={{ color: 'hsl(var(--softwhite))' }}
              >
                Let's discuss how I can help bring your product vision to life.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Link 
                to="/#contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold rounded-full"
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