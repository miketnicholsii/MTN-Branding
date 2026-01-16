import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar, 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const skillCategories = [
  {
    name: "Product Strategy",
    level: 95,
    color: "hsl(168, 72%, 36%)",
  },
  {
    name: "Agile & Scrum",
    level: 92,
    color: "hsl(168, 72%, 40%)",
  },
  {
    name: "Data Analysis",
    level: 88,
    color: "hsl(168, 72%, 44%)",
  },
  {
    name: "UX Research",
    level: 85,
    color: "hsl(168, 72%, 48%)",
  },
  {
    name: "Technical Writing",
    level: 90,
    color: "hsl(168, 72%, 42%)",
  },
  {
    name: "Stakeholder Management",
    level: 94,
    color: "hsl(168, 72%, 38%)",
  },
];

const radarData = [
  { skill: "Strategy", value: 95, fullMark: 100 },
  { skill: "Leadership", value: 92, fullMark: 100 },
  { skill: "Analytics", value: 88, fullMark: 100 },
  { skill: "UX/Design", value: 85, fullMark: 100 },
  { skill: "Technical", value: 87, fullMark: 100 },
  { skill: "Communication", value: 94, fullMark: 100 },
];

const growthData = [
  { year: "2014", impact: 20 },
  { year: "2016", impact: 35 },
  { year: "2018", impact: 55 },
  { year: "2020", impact: 72 },
  { year: "2022", impact: 88 },
  { year: "2024", impact: 100 },
];

const AnimatedSkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayLevel(prev => {
            if (prev >= level) {
              clearInterval(interval);
              return level;
            }
            return prev + 1;
          });
        }, 15);
        return () => clearInterval(interval);
      }, delay * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <motion.span 
          className="text-sm font-bold text-primary"
          animate={{ scale: displayLevel === level ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayLevel}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeChart, setActiveChart] = useState<'radar' | 'growth'>('radar');

  return (
    <section id="skills" className="py-20 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section header */}
            <StaggerItem>
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">Expertise</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center mb-4 sm:mb-6 px-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Skills & Competencies
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body text-base sm:text-lg text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
                A decade of experience translated into measurable expertise across product, strategy, and leadership.
              </p>
            </StaggerItem>

            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left: Skill bars */}
              <StaggerItem>
                <motion.div 
                  className="glass-card rounded-2xl p-6 sm:p-8"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Core Competencies
                  </h3>
                  <div className="space-y-5">
                    {skillCategories.map((skill, index) => (
                      <AnimatedSkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={index}
                      />
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>

              {/* Right: Charts */}
              <StaggerItem>
                <motion.div 
                  className="glass-card rounded-2xl p-6 sm:p-8"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Chart toggle */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                      <motion.span
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                      {activeChart === 'radar' ? 'Skill Distribution' : 'Career Growth'}
                    </h3>
                    <div className="flex gap-2">
                      <motion.button
                        onClick={() => setActiveChart('radar')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                          activeChart === 'radar' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'glass-pill text-body hover:text-foreground'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Skills
                      </motion.button>
                      <motion.button
                        onClick={() => setActiveChart('growth')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                          activeChart === 'growth' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'glass-pill text-body hover:text-foreground'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Growth
                      </motion.button>
                    </div>
                  </div>

                  {/* Charts */}
                  <motion.div
                    key={activeChart}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-[280px] sm:h-[320px]"
                  >
                    {activeChart === 'radar' ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                          <PolarGrid stroke="hsl(200, 10%, 80%)" />
                          <PolarAngleAxis 
                            dataKey="skill" 
                            tick={{ fill: 'hsl(200, 10%, 45%)', fontSize: 11 }}
                          />
                          <Radar
                            name="Skills"
                            dataKey="value"
                            stroke="hsl(168, 72%, 36%)"
                            fill="hsl(168, 72%, 36%)"
                            fillOpacity={0.3}
                            strokeWidth={2}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                          <defs>
                            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(168, 72%, 36%)" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="hsl(168, 72%, 36%)" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis 
                            dataKey="year" 
                            tick={{ fill: 'hsl(200, 10%, 45%)', fontSize: 11 }}
                            axisLine={{ stroke: 'hsl(200, 10%, 80%)' }}
                            tickLine={false}
                          />
                          <YAxis 
                            tick={{ fill: 'hsl(200, 10%, 45%)', fontSize: 11 }}
                            axisLine={{ stroke: 'hsl(200, 10%, 80%)' }}
                            tickLine={false}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              background: 'hsl(0, 0%, 100%)', 
                              border: '1px solid hsl(200, 10%, 88%)',
                              borderRadius: '8px',
                              fontSize: '12px'
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="impact"
                            stroke="hsl(168, 72%, 36%)"
                            strokeWidth={2}
                            fill="url(#growthGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    )}
                  </motion.div>
                </motion.div>
              </StaggerItem>
            </div>

            {/* Bottom: Animated skill tags */}
            <StaggerItem>
              <div className="mt-12 sm:mt-16 text-center">
                <h3 className="text-lg font-bold text-foreground mb-6">Tools & Technologies</h3>
                <motion.div 
                  className="flex flex-wrap justify-center gap-2 sm:gap-3"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      }
                    }
                  }}
                >
                  {[
                    "Jira", "Confluence", "Figma", "Miro", "SQL", "Tableau",
                    "Amplitude", "Mixpanel", "Notion", "Monday.com", "Azure DevOps", "GitHub"
                  ].map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="px-4 py-2 glass-pill rounded-full text-body text-xs sm:text-sm font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.8 },
                        visible: { opacity: 1, y: 0, scale: 1 }
                      }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Skills;