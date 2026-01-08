import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

const getDirectionOffset = (direction: string) => {
  switch (direction) {
    case "up": return { y: 60, x: 0 };
    case "down": return { y: -60, x: 0 };
    case "left": return { y: 0, x: 60 };
    case "right": return { y: 0, x: -60 };
    default: return { y: 60, x: 0 };
  }
};

const SectionTransition = ({ 
  children, 
  className = "", 
  direction = "up",
  delay = 0 
}: SectionTransitionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const offset = getDirectionOffset(direction);

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: offset.y,
      x: offset.x,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
