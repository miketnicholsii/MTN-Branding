import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Rocket, 
  Palette, 
  BarChart3, 
  MessageSquare,
  Kanban,
  FileCode,
  Figma,
  PenTool,
  Globe,
  TableProperties,
  FileSpreadsheet,
  Workflow,
  FileText,
  Users,
  Sparkles
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

const toolCategories = [
  {
    title: "Product & Delivery",
    icon: Rocket,
    tools: [
      { name: "Agile & Scrum", icon: Kanban },
      { name: "Kanban", icon: Workflow },
      { name: "JIRA", icon: FileCode },
      { name: "Confluence", icon: FileText },
    ]
  },
  {
    title: "Design & Web",
    icon: Palette,
    tools: [
      { name: "UX Collaboration", icon: Figma },
      { name: "Prototyping", icon: PenTool },
      { name: "Website Design", icon: Globe },
      { name: "HTML/CSS", icon: FileCode },
    ]
  },
  {
    title: "Data & Automation",
    icon: BarChart3,
    tools: [
      { name: "Excel & Office", icon: TableProperties },
      { name: "VBA & Reporting", icon: FileSpreadsheet },
      { name: "Data Decisions", icon: BarChart3 },
      { name: "Squarespace", icon: Globe },
    ]
  },
  {
    title: "Communication",
    icon: MessageSquare,
    tools: [
      { name: "Documentation", icon: FileText },
      { name: "Executive Comm", icon: Users },
      { name: "Facilitation", icon: Sparkles },
      { name: "Storytelling", icon: MessageSquare },
    ]
  },
];

const ToolCategory = ({ category, delay }: { 
  category: typeof toolCategories[0]; 
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
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="glass-card-dark rounded-xl p-5 h-full"
      >
        {/* Category header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-orange-gold/20 flex items-center justify-center">
            <category.icon size={16} className="text-orange-gold" />
          </div>
          <h3 className="text-sm font-bold text-white">{category.title}</h3>
        </div>

        {/* Tools list */}
        <div className="space-y-2">
          {category.tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="flex items-center gap-2 group/tool"
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: delay * 0.1 + index * 0.05 }}
            >
              <tool.icon size={12} className="text-white/40 group-hover/tool:text-orange-gold transition-colors" />
              <span className="text-xs text-white/70 group-hover/tool:text-white transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Capabilities = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="capabilities" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden section-dark" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: bgY }}
          className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-forest-sage/15 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: bgY }}
          className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-orange-gold/8 rounded-full blur-[80px]" 
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer>
          {/* Section header */}
          <StaggerItem>
            <div className="text-center mb-4">
              <span className="text-orange-gold text-xs font-bold tracking-[0.2em] uppercase">Tools & Frameworks</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center mb-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Capability-Driven Toolkit
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="text-white/70 text-base text-center max-w-lg mx-auto mb-10">
              From strategy to execution, the right tools for every stage.
            </p>
          </StaggerItem>

          {/* Tools grid - 2x2 */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {toolCategories.map((category, index) => (
              <ToolCategory
                key={category.title}
                category={category}
                delay={index}
              />
            ))}
          </div>

          {/* Bottom callout */}
          <StaggerItem>
            <p className="text-white/40 text-xs text-center mt-8">
              And many more tools tailored to each project
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Capabilities;
