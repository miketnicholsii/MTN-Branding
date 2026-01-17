import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { 
  Target, 
  Rocket, 
  Palette, 
  BarChart3, 
  MessageSquare,
  ChevronRight 
} from "lucide-react";

const skillMatrix = [
  {
    icon: Target,
    category: "Strategy & Business",
    skills: [
      { name: "Product Strategy & Roadmapping", tier: "Expert" },
      { name: "Business Development", tier: "Expert" },
      { name: "Go-to-Market Planning", tier: "Advanced" },
      { name: "Market Analysis", tier: "Advanced" },
    ]
  },
  {
    icon: Rocket,
    category: "Product & Delivery",
    skills: [
      { name: "Agile Program Management", tier: "Expert" },
      { name: "Scrum & Kanban", tier: "Expert" },
      { name: "Backlog Prioritization", tier: "Expert" },
      { name: "Cross-Functional Leadership", tier: "Expert" },
    ]
  },
  {
    icon: Palette,
    category: "Design & UX",
    skills: [
      { name: "UX Collaboration", tier: "Advanced" },
      { name: "User-Centered Design", tier: "Advanced" },
      { name: "Website Design", tier: "Expert" },
      { name: "Prototyping", tier: "Advanced" },
    ]
  },
  {
    icon: BarChart3,
    category: "Data & Automation",
    skills: [
      { name: "Data Analysis", tier: "Expert" },
      { name: "Platform Testing", tier: "Expert" },
      { name: "Excel & VBA", tier: "Expert" },
      { name: "Low-Code Workflows", tier: "Advanced" },
    ]
  },
  {
    icon: MessageSquare,
    category: "Communication",
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
  Proficient: { dots: 2, color: "bg-muted-foreground" },
};

const TierIndicator = ({ tier }: { tier: "Expert" | "Advanced" | "Proficient" }) => {
  const config = tierConfig[tier];
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${i < config.dots ? config.color : "bg-border"}`}
          />
        ))}
      </div>
      <span className={`text-[10px] font-medium ${tier === "Expert" ? "text-orange-gold" : "text-muted-foreground"}`}>
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="glass-card rounded-xl p-5 h-full flex flex-col"
      >
        {/* Category header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-orange-gold/10 transition-colors">
            <Icon size={16} className="text-muted-foreground group-hover:text-orange-gold transition-colors" />
          </div>
          <h3 className="text-sm font-bold text-foreground">{category}</h3>
        </div>

        {/* Skills list */}
        <div className="space-y-1.5 flex-1">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between gap-2 py-1.5 px-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                <ChevronRight size={10} className="text-muted-foreground shrink-0" />
                <span className="text-xs text-muted-foreground truncate">
                  {skill.name}
                </span>
              </div>
              <TierIndicator tier={skill.tier as "Expert" | "Advanced" | "Proficient"} />
            </div>
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

  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-forest-sage/6 rounded-full blur-[100px]" 
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer>
          {/* Section header */}
          <StaggerItem>
            <div className="text-center mb-4">
              <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase">Expertise</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center mb-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Strategic Capability Matrix
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted-foreground text-base text-center max-w-lg mx-auto mb-8">
              A decade of experience across product, strategy, and leadership.
            </p>
          </StaggerItem>

          {/* Tier Legend */}
          <StaggerItem>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {Object.entries(tierConfig).map(([tier, config]) => (
                <div key={tier} className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 rounded-full ${i < config.dots ? config.color : "bg-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground">{tier}</span>
                </div>
              ))}
            </div>
          </StaggerItem>

          {/* Skills Grid - 3 top, 2 bottom centered */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-4">
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
    </section>
  );
};

export default Skills;
