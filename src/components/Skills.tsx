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

const AnimatedSkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.08, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-sm font-semibold text-forest-deep group-hover:text-forest-dark transition-colors duration-300">
          {name}
        </span>
        <span className="text-sm font-bold text-orange-gold">
          {level}%
        </span>
      </div>
      <div className="h-2.5 bg-forest-sage/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #2A312A, #455B46)'
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 sm:py-36 lg:py-44 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-gold/4 rounded-full blur-[120px] -translate-y-1/2" />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section header */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-orange-gold text-sm font-bold tracking-[0.2em] uppercase">Expertise</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-forest-deep">
                  Skills & Competencies
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body text-lg text-center max-w-2xl mx-auto mb-20 font-medium">
                A decade of experience translated into measurable expertise across product, strategy, and leadership.
              </p>
            </StaggerItem>

            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
              {/* Left: Skill bars */}
              <StaggerItem>
                <motion.div 
                  className="glass-card rounded-3xl p-8 lg:p-10"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-forest-deep mb-10 flex items-center gap-3">
                    <span className="w-3 h-3 bg-orange-gold rounded-full" />
                    Core Competencies
                  </h3>
                  <div className="space-y-7">
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
                  className="glass-card rounded-3xl p-8 lg:p-10"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-forest-deep mb-10 flex items-center gap-3">
                    <span className="w-3 h-3 bg-orange-gold rounded-full" />
                    Skill Distribution
                  </h3>

                  <div className="h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData} margin={{ top: 20, right: 35, bottom: 20, left: 35 }}>
                        <PolarGrid stroke="#455B46" strokeOpacity={0.2} />
                        <PolarAngleAxis 
                          dataKey="skill" 
                          tick={{ fill: '#455B46', fontSize: 12, fontWeight: 500 }}
                        />
                        <Radar
                          name="Skills"
                          dataKey="value"
                          stroke="#2A312A"
                          fill="#455B46"
                          fillOpacity={0.2}
                          strokeWidth={2.5}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </StaggerItem>
            </div>

            {/* Bottom: Tools */}
            <StaggerItem>
              <div className="mt-20 text-center max-w-4xl mx-auto">
                <h3 className="text-lg font-bold text-forest-deep mb-10">Tools & Technologies</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Jira", "Confluence", "Figma", "Miro", "SQL", "Tableau",
                    "Amplitude", "Mixpanel", "Notion", "Monday.com", "Azure DevOps", "GitHub"
                  ].map((tool) => (
                    <motion.span
                      key={tool}
                      className="px-6 py-3 glass-card rounded-full text-sm font-semibold text-forest-deep hover:text-forest-dark hover:bg-forest-sage/5 transition-all duration-300"
                      whileHover={{ y: -4 }}
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