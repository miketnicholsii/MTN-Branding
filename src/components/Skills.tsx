import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";
import { 
  Target, 
  Rocket, 
  Palette, 
  BarChart3, 
  MessageSquare,
  ChevronRight 
} from "lucide-react";

// Strategic Capability Matrix - 5 categories with specific skills
const skillMatrix = [
  {
    icon: Target,
    category: "Strategy & Business",
    color: "orange-gold",
    skills: [
      { name: "Product Strategy & Roadmapping", tier: "Expert" },
      { name: "Business Development & Partnerships", tier: "Expert" },
      { name: "Go-to-Market Planning", tier: "Advanced" },
      { name: "Opportunity & Market Analysis", tier: "Advanced" },
    ]
  },
  {
    icon: Rocket,
    category: "Product & Delivery",
    color: "forest-sage",
    skills: [
      { name: "Agile Program Management", tier: "Expert" },
      { name: "Scrum & Kanban Execution", tier: "Expert" },
      { name: "Backlog Prioritization", tier: "Expert" },
      { name: "Cross-Functional Team Leadership", tier: "Expert" },
    ]
  },
  {
    icon: Palette,
    category: "Design & User Experience",
    color: "orange-bright",
    skills: [
      { name: "UX Collaboration & Design Strategy", tier: "Advanced" },
      { name: "User-Centered Design Principles", tier: "Advanced" },
      { name: "Website & Digital Experience Design", tier: "Proficient" },
      { name: "Prototyping & Feedback Loops", tier: "Advanced" },
    ]
  },
  {
    icon: BarChart3,
    category: "Data, Tools & Automation",
    color: "forest-deep",
    skills: [
      { name: "Data Analysis & Insight Generation", tier: "Expert" },
      { name: "Platform Testing & Optimization", tier: "Expert" },
      { name: "Office Suite Automation (Excel, VBA)", tier: "Expert" },
      { name: "No-Code / Low-Code Workflows", tier: "Advanced" },
    ]
  },
  {
    icon: MessageSquare,
    category: "Communication & Execution",
    color: "orange-deep",
    skills: [
      { name: "Stakeholder Alignment", tier: "Expert" },
      { name: "Technical Documentation", tier: "Expert" },
      { name: "Process Optimization", tier: "Expert" },
      { name: "Strategic Storytelling", tier: "Advanced" },
    ]
  },
];

const tierConfig = {
  Expert: { dots: 4, color: "bg-orange-gold" },
  Advanced: { dots: 3, color: "bg-forest-sage" },
  Proficient: { dots: 2, color: "bg-forest-dark" },
};

const TierIndicator = ({ tier }: { tier: "Expert" | "Advanced" | "Proficient" }) => {
  const config = tierConfig[tier];
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full ${i < config.dots ? config.color : "bg-forest-sage/20"}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}
      </div>
      <span className={`text-xs font-semibold ${tier === "Expert" ? "text-orange-gold" : "text-forest-sage"}`}>
        {tier}
      </span>
    </div>
  );
};

const SkillCard = ({ category, icon: Icon, skills, delay }: { 
  category: string; 
  icon: React.ElementType; 
  skills: { name: string; tier: "Expert" | "Advanced" | "Proficient" }[];
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.12, ease: "easeOut" }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="glass-card rounded-3xl p-6 lg:p-8 h-full hover:shadow-xl hover:shadow-forest-deep/10 transition-all duration-500"
      >
        {/* Category header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-forest-deep/5 border border-forest-sage/20 flex items-center justify-center group-hover:bg-orange-gold/10 group-hover:border-orange-gold/30 transition-all duration-300">
            <Icon size={22} className="text-forest-sage group-hover:text-orange-gold transition-colors duration-300" />
          </div>
          <h3 className="text-lg font-bold text-forest-deep">{category}</h3>
        </div>

        {/* Skills list */}
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative pl-4 py-2 rounded-lg cursor-default"
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              animate={{
                backgroundColor: hoveredSkill === index ? "hsl(130 8% 97%)" : "transparent",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ChevronRight 
                    size={14} 
                    className={`transition-colors duration-200 ${hoveredSkill === index ? "text-orange-gold" : "text-forest-sage/50"}`} 
                  />
                  <span className="text-sm font-medium text-forest-deep/80 group-hover:text-forest-deep transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
                <TierIndicator tier={skill.tier as "Expert" | "Advanced" | "Proficient"} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const bg1Y = useTransform(scrollYProgress, [0, 1], [-80, 120]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [60, -100]);
  const bg3Y = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 1]);

  return (
    <section id="skills" className="py-28 sm:py-36 lg:py-44 relative overflow-hidden" ref={ref}>
      {/* Parallax background with more green */}
      <motion.div 
        style={{ y: bg1Y, scale: bg1Scale }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest-sage/8 rounded-full blur-[120px]" 
      />
      <motion.div 
        style={{ y: bg2Y }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest-dark/6 rounded-full blur-[100px]" 
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
                <span className="text-orange-gold text-sm font-bold tracking-[0.2em] uppercase">Expertise</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-forest-deep">
                  Strategic Capability Matrix
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body text-lg text-center max-w-2xl mx-auto mb-16 font-medium">
                A decade of experience translated into measurable expertise across product, strategy, and leadership.
              </p>
            </StaggerItem>

            {/* Tier Legend */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {Object.entries(tierConfig).map(([tier, config]) => (
                  <div key={tier} className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${i < config.dots ? config.color : "bg-forest-sage/20"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-forest-sage">{tier}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>

            {/* Skills Grid - 5 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {skillMatrix.slice(0, 3).map((category, index) => (
                <SkillCard
                  key={category.category}
                  category={category.category}
                  icon={category.icon}
                  skills={category.skills as { name: string; tier: "Expert" | "Advanced" | "Proficient" }[]}
                  delay={index}
                />
              ))}
            </div>
            
            {/* Bottom row - 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
              {skillMatrix.slice(3).map((category, index) => (
                <SkillCard
                  key={category.category}
                  category={category.category}
                  icon={category.icon}
                  skills={category.skills as { name: string; tier: "Expert" | "Advanced" | "Proficient" }[]}
                  delay={index + 3}
                />
              ))}
            </div>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Skills;