import { motion, useInView, Variants, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
}

const getItemOffset = (direction: string) => {
  switch (direction) {
    case "up": return { y: 24, x: 0, scale: 1 };
    case "down": return { y: -24, x: 0, scale: 1 };
    case "left": return { y: 0, x: 24, scale: 1 };
    case "right": return { y: 0, x: -24, scale: 1 };
    case "fade": return { y: 0, x: 0, scale: 1 };
    case "scale": return { y: 0, x: 0, scale: 0.96 };
    default: return { y: 24, x: 0, scale: 1 };
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Smooth deceleration curve
    },
  },
};

export const StaggerContainer = ({ 
  children, 
  className = "", 
  staggerDelay = 0.1,
  delayStart = 0.05 
}: StaggerRevealProps) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const dynamicContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayStart,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={dynamicContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "", direction = "up" }: StaggerItemProps) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = getItemOffset(direction);
  
  const dynamicItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : offset.y,
      x: shouldReduceMotion ? 0 : offset.x,
      scale: shouldReduceMotion ? 1 : offset.scale,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div 
      variants={dynamicItemVariants} 
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
