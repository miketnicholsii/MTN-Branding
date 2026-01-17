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
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-[100px]"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'hsla(var(--forest-900) / 0.3)' }} />
      </motion.div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer>
          {/* Section header */}
          <StaggerItem>
            <div className="text-center mb-4">
              <span 
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: 'hsl(var(--orange-500))' }}
              >
                Portfolio
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center mb-3">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{ color: 'hsl(var(--offwhite))' }}
              >
                Case Studies
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p 
              className="text-base text-center max-w-lg mx-auto mb-12"
              style={{ color: 'hsl(var(--softwhite))' }}
            >
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
              <div 
                className="relative overflow-hidden rounded-2xl p-[1px]"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--forest-950)), hsl(var(--forest-900)))',
                }}
              >
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, hsla(var(--orange-500) / 0.15), transparent, hsla(var(--forest-700) / 0.1))' }}
                />
                
                <div 
                  className="relative rounded-2xl p-6 sm:p-8 lg:p-10"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--forest-950) / 0.98), hsl(var(--forest-900) / 0.98))' }}
                >
                  {/* Flagship badge */}
                  <div 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-6"
                    style={{
                      background: 'hsla(var(--orange-500) / 0.2)',
                      border: '1px solid hsla(var(--orange-500) / 0.3)',
                    }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: 'hsl(var(--orange-500))' }}
                    />
                    <span 
                      className="text-xs font-bold tracking-wider uppercase"
                      style={{ color: 'hsl(var(--orange-500))' }}
                    >
                      Flagship Project
                    </span>
                  </div>
                  
                  {/* NÈKO Title */}
                  <h3 
                    className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 tracking-tight"
                    style={{ 
                      background: 'linear-gradient(90deg, hsl(var(--offwhite)), hsl(var(--orange-500) / 0.8))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    NÈKO
                  </h3>
                  
                  <p 
                    className="text-lg sm:text-xl font-medium mb-3 max-w-xl"
                    style={{ color: 'hsla(var(--offwhite) / 0.8)' }}
                  >
                    {nekoProject.subtitle}
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed mb-8 max-w-2xl"
                    style={{ color: 'hsl(var(--softwhite))' }}
                  >
                    {nekoProject.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {nekoProject.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="text-center p-4 rounded-xl"
                        style={{
                          background: 'hsla(var(--offwhite) / 0.05)',
                          border: '1px solid hsla(var(--offwhite) / 0.10)',
                        }}
                      >
                        <metric.icon size={18} className="mx-auto mb-2" style={{ color: 'hsl(var(--orange-500))' }} />
                        <div 
                          className="text-xl sm:text-2xl font-bold"
                          style={{ color: 'hsl(var(--offwhite))' }}
                        >
                          {metric.value}
                        </div>
                        <div 
                          className="text-xs"
                          style={{ color: 'hsl(var(--softwhite))' }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {nekoProject.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium rounded-full"
                        style={{
                          background: 'hsla(var(--offwhite) / 0.05)',
                          border: '1px solid hsla(var(--offwhite) / 0.10)',
                          color: 'hsl(var(--softwhite))',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study Link */}
                  <Link 
                    to="/neko"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full group"
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
                    <span 
                      className="text-[10px] font-bold tracking-wider uppercase"
                      style={{ color: 'hsl(var(--orange-500))' }}
                    >
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-sm font-bold mb-2 leading-tight"
                    style={{ color: 'hsl(var(--offwhite))' }}
                  >
                    {project.title}
                  </h3>
                  
                  <p 
                    className="text-xs leading-relaxed mb-4"
                    style={{ color: 'hsl(var(--softwhite))' }}
                  >
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-1 mb-3">
                    {project.metrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className="text-center p-2 rounded-lg"
                        style={{ background: 'hsla(var(--forest-950) / 0.5)' }}
                      >
                        <div 
                          className="text-xs font-bold"
                          style={{ color: 'hsl(var(--offwhite))' }}
                        >
                          {metric.value}
                        </div>
                        <div 
                          className="text-[9px]"
                          style={{ color: 'hsl(var(--softwhite))' }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full"
                        style={{
                          background: 'hsl(var(--forest-950))',
                          color: 'hsl(var(--softwhite))',
                        }}
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
