import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  { name: "Product Strategy", level: 95 },
  { name: "Agile & Scrum", level: 92 },
  { name: "Data Analysis", level: 88 },
  { name: "UX Research", level: 85 },
  { name: "Technical Writing", level: 90 },
  { name: "Stakeholder Management", level: 94 },
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

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-headline group-hover:text-forest-light transition-colors duration-300">
          {name}
        </span>
        <span className="text-sm font-semibold text-orange-gold">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--forest-deep)), hsl(var(--forest-light)))'
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-orange-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section header */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-orange-gold text-sm font-semibold tracking-widest uppercase">Expertise</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-headline">
                  Skills & Competencies
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body text-lg text-center max-w-2xl mx-auto mb-16">
                A decade of experience translated into measurable expertise across product, strategy, and leadership.
              </p>
            </StaggerItem>

            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
              {/* Left: Skill bars */}
              <StaggerItem>
                <motion.div 
                  className="glass-card rounded-2xl p-8"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-headline mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-gold rounded-full" />
                    Core Competencies
                  </h3>
                  <div className="space-y-6">
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

              {/* Right: Chart */}
              <StaggerItem>
                <motion.div 
                  className="glass-card rounded-2xl p-8"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-headline mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-gold rounded-full" />
                    Skill Distribution
                  </h3>

                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                        <PolarGrid stroke="hsl(120, 6%, 85%)" />
                        <PolarAngleAxis 
                          dataKey="skill" 
                          tick={{ fill: 'hsl(120, 6%, 45%)', fontSize: 12 }}
                        />
                        <Radar
                          name="Skills"
                          dataKey="value"
                          stroke="hsl(137, 12%, 17%)"
                          fill="hsl(130, 16%, 31%)"
                          fillOpacity={0.25}
                          strokeWidth={2}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </StaggerItem>
            </div>

            {/* Bottom: Tools */}
            <StaggerItem>
              <div className="mt-16 text-center max-w-4xl mx-auto">
                <h3 className="text-lg font-bold text-headline mb-8">Tools & Technologies</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Jira", "Confluence", "Figma", "Miro", "SQL", "Tableau",
                    "Amplitude", "Mixpanel", "Notion", "Monday.com", "Azure DevOps", "GitHub"
                  ].map((tool) => (
                    <motion.span
                      key={tool}
                      className="px-5 py-2.5 glass-card rounded-full text-sm font-medium text-headline hover:text-forest-light transition-colors duration-300"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Skills;