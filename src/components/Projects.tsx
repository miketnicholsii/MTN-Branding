import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Zap, Target, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

const nekoProject = {
  title: "NÈKO",
  subtitle: "AI-Powered Product Intelligence Platform",
  description: "A next-generation platform transforming how product teams make decisions. NÈKO combines real-time analytics, predictive modeling, and collaborative workflows.",
  metrics: [
    { icon: TrendingUp, value: "300%", label: "Faster Insights" },
    { icon: Users, value: "10K+", label: "Beta Users" },
    { icon: Zap, value: "AI", label: "Powered" },
    { icon: Target, value: "98%", label: "Accuracy" },
  ],
  tags: ["AI/ML", "Product Analytics", "Real-time Data", "Collaboration"],
};

const projects = [
  {
    title: "Enterprise Platform Modernization",
    category: "Fintech",
    description: "Led platform redesign for financial services, migrating to cloud with 99.9% uptime.",
    metrics: [
      { value: "40%", label: "Revenue ↑" },
      { value: "60%", label: "Faster" },
      { value: "50K+", label: "Users" },
    ],
    tags: ["Agile", "Cloud", "UX"],
  },
  {
    title: "Go-to-Market Strategy",
    category: "SaaS",
    description: "Developed GTM strategy for B2B SaaS, from beta through successful launch.",
    metrics: [
      { value: "150%", label: "Target ↑" },
      { value: "$2M+", label: "Revenue" },
      { value: "3 mo", label: "Launch" },
    ],
    tags: ["Strategy", "GTM", "Leadership"],
  },
  {
    title: "Process Automation",
    category: "Enterprise",
    description: "Automated workflows using VBA, reducing manual work across departments.",
    metrics: [
      { value: "80%", label: "Time Saved" },
      { value: "25%", label: "Errors ↓" },
      { value: "200+", label: "Users" },
    ],
    tags: ["VBA", "Automation", "Process"],
  },
  {
    title: "Analytics Dashboard",
    category: "BI",
    description: "Built real-time analytics platform improving decision-making velocity.",
    metrics: [
      { value: "15+", label: "KPIs" },
      { value: "Real-time", label: "Updates" },
      { value: "30%", label: "Better" },
    ],
    tags: ["SQL", "Tableau", "Data"],
  },
];

const Projects = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-forest-sage/8 rounded-full blur-[100px]" 
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer>
          {/* Section header */}
          <StaggerItem>
            <div className="text-center mb-4">
              <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase">Portfolio</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center mb-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Case Studies
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted-foreground text-base text-center max-w-lg mx-auto mb-12">
              Real-world projects where strategy met execution to deliver measurable impact.
            </p>
          </StaggerItem>

          {/* NÈKO Hero Section */}
          <StaggerItem>
            <motion.div
              className="relative mb-12 max-w-4xl mx-auto"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-deep via-forest-dark to-forest-deep p-[1px]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-gold/15 via-transparent to-forest-sage/10" />
                
                <div className="relative rounded-2xl bg-gradient-to-br from-forest-deep/98 to-forest-dark/98 p-6 sm:p-8 lg:p-10">
                  {/* Flagship badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-gold/20 border border-orange-gold/30 rounded-full mb-6">
                    <span className="w-1.5 h-1.5 bg-orange-gold rounded-full animate-pulse" />
                    <span className="text-orange-gold text-xs font-bold tracking-wider uppercase">Flagship Project</span>
                  </div>
                  
                  {/* NÈKO Title */}
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">
                    <span className="bg-gradient-to-r from-white to-orange-gold/80 bg-clip-text text-transparent">
                      NÈKO
                    </span>
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-white/80 font-medium mb-3 max-w-xl">
                    {nekoProject.subtitle}
                  </p>
                  
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                    {nekoProject.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {nekoProject.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="text-center p-4 bg-white/5 border border-white/10 rounded-xl"
                      >
                        <metric.icon size={18} className="text-orange-gold mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-white">{metric.value}</div>
                        <div className="text-white/50 text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {nekoProject.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/70 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study Link */}
                  <Link 
                    to="/neko"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-gold text-forest-deep font-bold rounded-full hover:bg-orange-gold/90 transition-colors group"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Other projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-xl p-4 h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-orange-gold text-[10px] font-bold tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-foreground mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-1 mb-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-2 bg-muted/50 rounded-lg">
                        <div className="text-xs font-bold text-foreground">{metric.value}</div>
                        <div className="text-muted-foreground text-[9px]">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 bg-muted text-muted-foreground text-[10px] font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
