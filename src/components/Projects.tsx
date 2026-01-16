import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Clock, Zap, ArrowUpRight, BarChart3, Target } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const projects = [
  {
    title: "Enterprise Platform Modernization",
    category: "Fintech",
    description: "Led end-to-end platform redesign for a major financial services client, migrating legacy systems to modern cloud architecture while maintaining 99.9% uptime.",
    metrics: [
      { icon: TrendingUp, value: "40%", label: "Revenue Increase" },
      { icon: Clock, value: "60%", label: "Faster Processing" },
      { icon: Users, value: "50K+", label: "Active Users" },
    ],
    tags: ["Agile", "Cloud Migration", "UX Design"],
    featured: true,
  },
  {
    title: "Go-to-Market Strategy & Launch",
    category: "SaaS Product",
    description: "Developed and executed GTM strategy for B2B SaaS product, coordinating cross-functional teams from beta through successful market launch.",
    metrics: [
      { icon: Target, value: "150%", label: "Launch Target Exceeded" },
      { icon: BarChart3, value: "$2M+", label: "First Year Revenue" },
      { icon: Zap, value: "3 mo", label: "Time to Market" },
    ],
    tags: ["Product Strategy", "GTM", "Team Leadership"],
    featured: false,
  },
  {
    title: "Process Automation Initiative",
    category: "Enterprise Software",
    description: "Designed and implemented automated workflows using VBA and Office Suite, reducing manual data entry and reporting time across multiple departments.",
    metrics: [
      { icon: Clock, value: "80%", label: "Time Saved" },
      { icon: TrendingUp, value: "25%", label: "Error Reduction" },
      { icon: Users, value: "200+", label: "Users Impacted" },
    ],
    tags: ["VBA", "Automation", "Process Optimization"],
    featured: false,
  },
  {
    title: "Data Analytics Dashboard",
    category: "Business Intelligence",
    description: "Built comprehensive analytics platform enabling real-time business insights, improving decision-making velocity and strategic planning capabilities.",
    metrics: [
      { icon: BarChart3, value: "15+", label: "KPIs Tracked" },
      { icon: Zap, value: "Real-time", label: "Data Updates" },
      { icon: Target, value: "30%", label: "Better Decisions" },
    ],
    tags: ["SQL", "Tableau", "Data Analysis"],
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const bg1Y = useTransform(scrollYProgress, [0, 1], [-100, 150]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [60, -120]);
  const bg3Y = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1]);

  return (
    <section id="projects" className="py-28 sm:py-36 lg:py-44 relative overflow-hidden" ref={ref}>
      {/* Parallax background */}
      <motion.div 
        style={{ y: bg1Y, scale: bg1Scale }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-forest-sage/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        style={{ y: bg2Y }}
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-forest-dark/8 rounded-full blur-[100px]" 
      />
      <motion.div 
        style={{ y: bg3Y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-gold/5 rounded-full blur-[80px]" 
      />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section header */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-orange-gold text-sm font-bold tracking-[0.2em] uppercase">Portfolio</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-forest-deep">
                  Case Studies
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body text-lg text-center max-w-2xl mx-auto mb-20 font-medium">
                Real-world projects where strategy met execution to deliver measurable business impact.
              </p>
            </StaggerItem>

            {/* Featured project */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="card-featured rounded-3xl p-8 lg:p-12 mb-8 max-w-5xl mx-auto cursor-default"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-gold/20 text-orange-gold text-xs font-bold rounded-full">
                        Featured
                      </span>
                      <span className="text-white/60 text-sm font-medium">{projects[0].category}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{projects[0].title}</h3>
                    <p className="text-white/70 text-base leading-relaxed mb-6 font-medium">
                      {projects[0].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projects[0].tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-80">
                    <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                      {projects[0].metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className="text-center lg:text-left p-4 lg:p-5 bg-white/5 rounded-2xl"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <metric.icon size={20} className="text-orange-gold mx-auto lg:mx-0 mb-2" />
                          <div className="text-2xl lg:text-3xl font-bold text-white">{metric.value}</div>
                          <div className="text-white/50 text-xs lg:text-sm font-medium">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Other projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {projects.slice(1).map((project, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="glass-card rounded-3xl p-6 lg:p-8 h-full cursor-default group hover:shadow-xl transition-shadow duration-500"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-orange-gold text-xs font-bold tracking-wider uppercase">
                        {project.category}
                      </span>
                      <ArrowUpRight size={18} className="text-forest-sage/50 group-hover:text-orange-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-forest-deep mb-3 group-hover:text-forest-dark transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-body text-sm leading-relaxed mb-6 font-medium">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-forest-sage/5 rounded-xl">
                          <div className="text-lg font-bold text-forest-deep">{metric.value}</div>
                          <div className="text-forest-sage text-[10px] font-medium leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1.5 bg-forest-sage/5 text-forest-sage text-xs font-medium rounded-full"
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
      </SectionTransition>
    </section>
  );
};

export default Projects;
