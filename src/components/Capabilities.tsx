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
import SectionTransition from "./SectionTransition";

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
      { name: "UX Design Collaboration", icon: Figma },
      { name: "Prototyping & Wireframing", icon: PenTool },
      { name: "Website Design", icon: Globe },
      { name: "HTML/CSS Fundamentals", icon: FileCode },
    ]
  },
  {
    title: "Data & Automation",
    icon: BarChart3,
    tools: [
      { name: "Excel & Office Suite", icon: TableProperties },
      { name: "VBA & Reporting Tools", icon: FileSpreadsheet },
      { name: "Data-Driven Decisions", icon: BarChart3 },
      { name: "Squarespace", icon: Globe },
    ]
  },
  {
    title: "Communication",
    icon: MessageSquare,
    tools: [
      { name: "Technical Documentation", icon: FileText },
      { name: "Executive Communication", icon: Users },
      { name: "Cross-Functional Facilitation", icon: Sparkles },
      { name: "Strategic Storytelling", icon: MessageSquare },
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.15, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="glass-card-dark rounded-3xl p-6 lg:p-8 h-full hover:bg-forest-sage/20 transition-all duration-500"
      >
        {/* Category header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-gold/20 border border-orange-gold/30 flex items-center justify-center">
            <category.icon size={22} className="text-orange-gold" />
          </div>
          <h3 className="text-lg font-bold text-white">{category.title}</h3>
        </div>

        {/* Tools list */}
        <div className="space-y-3">
          {category.tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="flex items-center gap-3 group/tool cursor-default"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: delay * 0.15 + index * 0.08, duration: 0.4 }}
              whileHover={{ x: 4 }}
            >
              <tool.icon 
                size={16} 
                className="text-white/50 group-hover/tool:text-orange-gold transition-colors duration-200" 
              />
              <span className="text-sm font-medium text-white/80 group-hover/tool:text-white transition-colors duration-200">
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

  // Parallax transforms
  const bg1Y = useTransform(scrollYProgress, [0, 1], [-120, 180]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [80, -140]);
  const bg3Y = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.95]);
  const bg2Rotate = useTransform(scrollYProgress, [0, 1], [-10, 20]);

  return (
    <section id="capabilities" className="py-28 sm:py-36 lg:py-44 relative overflow-hidden section-dark" ref={ref}>
      {/* Parallax background with green tones */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          style={{ y: bg1Y, scale: bg1Scale }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-forest-sage/25 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: bg2Y, rotate: bg2Rotate }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-gold/12 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: bg3Y }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-forest-dark/20 rounded-full blur-[80px]" 
        />
      </div>
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section label */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-orange-gold text-sm font-bold tracking-[0.2em] uppercase">Tools & Frameworks</span>
              </div>
            </StaggerItem>

            {/* Main headline */}
            <StaggerItem>
              <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Capability-Driven Toolkit
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-16 font-medium">
                From strategy to execution, I leverage the right tools for every stage of product development.
              </p>
            </StaggerItem>

            {/* Tools grid - 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-white/60 text-sm font-medium">
                  And many more tools tailored to each project's unique needs
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Capabilities;